import React, { useState, useEffect } from "react";
import {
  Wrapper,
  TitleWrapper,
  Card,
  CardWrapper,
  QuestionTitle,
  DetailBtn,
} from "./index.style";
import Typography from "../shared/Typography";
import { Display1M, Display1, Display4, Title2 } from "../../theme/fonts";
import { Generals, Secondary } from "../../theme/colors";
import Button from "../shared/Button";
import DetailCo from "./Detail";

function Questions({ QuestionData, className }: Props) {
  
  const [showDetail, setShowDetail] = useState(false);



  const togglePopup = (url) => {
    setUrl(url);
    setShowDetail(!showDetail);
  };

  return (
    <Wrapper className={className}>
      <TitleWrapper>
        <Typography font={Title2} color={Secondary.i} hoverable>
          Qusetions
        </Typography>
      </TitleWrapper>
      <CardWrapper>
        {QuestionData.map((item, index) => {
          return (
            <Card key={index}>
              <QuestionTitle font={Display1M} color={Generals.vi} hoverable>
                {item.question}
              </QuestionTitle>
              <Typography font={Display4} color={Generals.vi} hoverable>
                {item.published_at}
              </Typography>
              <br></br>
              <Typography font={Display1} color={Generals.vi} hoverable>
                {item.choices.length}
              </Typography>
              <br></br>
              <DetailBtn>
                <Button
                  hoverColor={Generals.vi}
                  icon="61508"
                  iconColor={Secondary.i}
                  spacing="4.8px"
                  iconSize="16px"
                  clicked={() => togglePopup(item.url)}
                ></Button>
              </DetailBtn>
            </Card>
          );
        })}
      </CardWrapper>

     
    </Wrapper>
  );
}

export default Questions;
