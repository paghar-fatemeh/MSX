import styled from "styled-components";
import { Generals } from "../../../theme/colors";
import Typography from "../../shared/Typography";

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10px;
  border-radius: 0.5rem;
`;

export const CloseButton = styled.span`
  float: right;
  width: 20px;
  line-height: 1.5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 3px;
  background-color: lightgray;
`;

export const Wrapper = styled.div`
  border: 1px solid ${Generals.x};
  border-radius: 5px;
  box-shadow: 0px 0px 6px 1px rgba(50, 123, 250, 0.43);
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 2px 5px 15px;
`;

export const QuestionTitle = styled(Typography)`
  margin: 0px 2px 10px 15px;
`;

export const DetailInfo = styled.div`
  display:flex;
  margin: 10px;
  padding: 0px 20px;
 
`;

export const DetailCol = styled.div`
  width: ${({ colWith }) => colWith}%;  
  align-self: center; 
`;

export const ProgressBar = styled.div`
  width: 80%;
  height: 5px;
  background-color: ${Generals.v};
  border-radius: 5px;
  margin-right: 11px;
  position: relative;

  & > span {
    display: block;
    width: ${({ progressBarWith }) => progressBarWith}%;
    transition: width 400ms linear;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 0px 6px 1px rgba(255, 0, 70, 0.55);
    box-shadow: 0px 0px 6px 1px rgba(50, 123, 250, 0.43);
    background: linear-gradient(
      90deg,
      rgba(0, 69, 187, 1) 0%,
      rgba(0, 177, 255, 1) 100%
    );

    position: relative;
    overflow: hidden;
  }
`;
