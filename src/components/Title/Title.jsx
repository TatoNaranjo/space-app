import styled from "styled-components";

const StyledTitle = styled.h2`
  color: #7b78e5;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: ${props => props.$align ? props.$align : "left" };

  @media (max-width:1280px) {
   font-size:24px;
  }
`;

export default function Title(props) {
    const {text,align} = props
  return (
    <>
      <StyledTitle >{text}</StyledTitle>
    </>
  );
}