import styled from "styled-components";
import Typography from "../shared/Typography";
import Button from "../shared/Button"

import { Generals } from "../../theme/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Generals.viii};
  width: 70%;
  border: 1px solid ${Generals.x};
  border-radius: 7px;
  padding: 30px;
`;

export const TitleWrapper = styled.div`
  padding-bottom: 20px;
`;

export const CardWrapper = styled.div`
display: flex;
flex-wrap: wrap;

`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 177, 255, 0.2); 
  transition: 0.3s;
  width: 30%;
  margin:10px;
  padding:10px;
`;

export const QuestionTitle = styled(Typography)`
  display:block;
`;

export const DetailBtn=styled.div`
  display:flex;
  justify-content: flex-end; 
`;