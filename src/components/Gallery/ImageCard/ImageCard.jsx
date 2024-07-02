import styled from "styled-components";

const StyledFigure = styled.figure`
  flex-direction: column;
  width: ${(props) => (props.$isExpanded ? "90%" : "448px")};
  max-width: 100%;
  gap: 16px;
  margin: 0;
  padding: 0;
  border-radius: 20px;
  overflow: hidden;
  background: #001634;
  img {
    width: 100%;
    object-fit: cover;
    height: auto;
  }

  .closeIcon {
    position: absolute;
    top: 20px;
    right: 30px;
    width: 32px;
    height: 32px;
  }
  button {
    background: none;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }

  max-width: 254px;
  
  @media (min-width: 1281px) {
    max-width:448px;
    flex-wrap: wrap;
  }
  @media (max-width: 480px) {
    max-width: 312px;
    flex-wrap: wrap;
  }
`;

const StyledImg = styled.img`

`;
const StyledCaption = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0px 0px 20px 20px;
  background: #001634;
  padding: 16px 22px;
  line-height: 0;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
    @media (max-width: 900px) {
    text-align: left;
    line-height: normal;
    h3 {
      margin:0;
      margin-bottom: 0;
    }
    h4 {
      margin-top: 8px;
    }
  }

  @media (max-width: 480px) {
    max-width: 312px;
    line-height: normal;
    text-align: left;

    h3 {
      margin-bottom: 0;
    }
    h4 {
      margin-top: 8px;
    }
  }



`;

const StyledDivButtons = styled.div`
  display: flex;
  gap: 24px;

  img {
    width:20px;
    height:20px;
  }
`;
export default function ImageCard(props) {
  const { photo, toAskZoom, isExpanded = false, toSelectFavourite } = props;
  const { titulo, path, fuente, favourite } = photo;

  const LikeIcon = favourite
    ? "/img/icons/liked.svg"
    : "/img/icons/favorite_outline.svg";
  const expandIcon = "/img/icons/open_in_full.png";

  return (
    <StyledFigure $isExpanded={isExpanded}>
      <StyledImg src={path} alt={titulo} />
      <StyledCaption>
        <div>
          <h3>{titulo}</h3>
          <h4>{fuente}</h4>
        </div>

        <StyledDivButtons>
          <button>
            <img
              src={LikeIcon}
              onClick={() => toSelectFavourite(photo)}
              alt="Active Like Icon"
            />
          </button>

          {!isExpanded && (
            <button onClick={() => toAskZoom(photo)}>
              <img src={expandIcon} alt="Expand Icon" />
            </button>
          )}
        </StyledDivButtons>
      </StyledCaption>
    </StyledFigure>
  );
}
