import styled from "styled-components";
const StyledSection = styled.section`
  display: flex;
  align-items: center;
  color: white;
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  background-repeat: no-repeat;
  
  min-height: 328px;
  margin: 0;
  background-size: cover;
  flex-shrink: 0;
  border-radius: 20px;
  opacity: 0.8;
  flex-grow: 1;

  h1 {
    padding: 0 64px;
    font-size: 40px;
    line-height: 48px;
    max-width: 300px;
    font-style: normal;
  }
  
    margin-right:24px;
  

  @media (max-width: 900px) {
    position:relative;
    left:40%;
    background-image: ${(props) => `url(${props.$backgroundTablet})`};
    max-width:426px;
    min-height:276px;
    flex-shrink:0;
    background-size:contain;
    margin-right:12px;
    
  }

  @media (max-width: 480px) {
    position:static;
    display: block;
    align-items: center;
    margin-left:8px;
    min-width: 312px;
    min-height: 140px;
    flex-shrink: 0;
    background-image: ${(props) => `url(${props.$backgroundMobile})`};
    background-size: cover;
    h1 {
      display: none;
    }
  }


`;

export default function Banner(props) {
  const { backgroundImage, backgroundMobile, text,backgroundTablet } = props;
  return (
    <StyledSection
      $backgroundImage={backgroundImage}
      $backgroundMobile={backgroundMobile}
      $backgroundTablet = {backgroundTablet}
    >
      <h1>{text}</h1>
    </StyledSection>
  );
}
