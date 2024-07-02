import styled from "styled-components";
import ImageCard from "../Gallery/ImageCard/ImageCard";

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`

const StyledDialog = styled.dialog`
  background: transparent;
  border: 0;
  padding:0;
  position: absolute;
  top:10px;
  width: 1156px;
  display: flex;
  justify-content:center;

  @media (max-width:480px) {
      width: 384px;
      height: 312px;

      footer{
        max-height:80px;
        padding:0 12px 0 18px;
        font-size:14px;
      }
    }
  button {
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      cursor: pointer;
    }
  }
  form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`
    
export default function ModalZoom({ photo, onClose, toSelectFavourite }) {
  return (
    <>
      {photo && (
        <StyledOverlay>
          <StyledDialog open={!!photo} onClose={onClose}>
            <ImageCard photo={photo} isExpanded={true} className="imageCard" toSelectFavourite = {toSelectFavourite} />

            <form method="dialog" className="closeButton">
              <button >
                <img src="/img/icons/close.svg" alt="Icono de cerrar" />
              </button>
            </form>
          </StyledDialog>
        </StyledOverlay>
      )}
    </>
  );
}
