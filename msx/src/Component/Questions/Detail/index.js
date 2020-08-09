import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  Wrapper,
  TitleWrapper,
  QuestionTitle,
  DetailInfo,
  DetailCol,
  ProgressBar,
} from "./index.style";
import Typography from "../../shared/Typography";
import { Display1, Title2, Title1, Display1M } from "../../../theme/fonts";
import { Generals, Secondary } from "../../../theme/colors";
import Button from "../../shared/Button";

function Detail({
  QuestionData,
  url,
  closeDetail,
 
  className,
}: Props) {

   let detailData = QuestionData.find((item) => item.url == url);

  return (
    <Modal>
      <ModalContent>
        <Wrapper>
          <TitleWrapper>
            <Typography font={Title2} color={Secondary.i} hoverable>
              Qusetions Details
            </Typography>
            <Button
              hoverColor={Generals.v}
              icon="61453"
              iconColor={Generals.vi}
              spacing="4.8px"
              iconSize="16px"
              clicked={closeDetail}
            ></Button>
          </TitleWrapper>
          <QuestionTitle font={Display1M} color={Generals.vi} hoverable>
            {detailData.question}
          </QuestionTitle>
          {detailData.choices.map((item, index) => (
            <DetailInfo key={index}>
              <DetailCol colWith={30}>
                <Typography font={Display1} color={Generals.vi} hoverable>
                  {item.choice}
                </Typography>
              </DetailCol>
              <DetailCol colWith={20}>
                <Typography font={Display1} color={Generals.vi} hoverable>
                  {item.votes}
                </Typography>
              </DetailCol>

              <DetailCol colWith={40}>
                <ProgressBar progressBarWith={(item.votes * 100) / 100}>
                  <span></span>
                </ProgressBar>
              </DetailCol>
              <DetailCol colWith={10}>
                <Button
                  hoverColor={Generals.vi}
                  icon="63346"
                  iconColor={Secondary.i}
                  spacing="4.8px"
                  iconSize="16px"
                 
                ></Button>
              </DetailCol>
            </DetailInfo>
          ))}
        </Wrapper>
      </ModalContent>
    </Modal>
  );
}

export default Detail;
