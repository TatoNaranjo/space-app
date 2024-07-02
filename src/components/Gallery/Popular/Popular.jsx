import styled from "styled-components"
import Title from "../../Title/Title"
import photos from "./popularphotos.json"

const StyledPhotoColumn = styled.section`
    display:flex;
    flex-direction: column;
    gap:16px;
    margin-right: 12px;

    @media (max-width:1280px){
    margin-right:24px;
  }


`

const StyledPhoto = styled.img`
max-width: 212px;
border-radius: 20px;



@media (max-width:1280px){
    width:112px;
 
}
`

const StyledButton = styled.button`
background:transparent;
border: 2px solid;
border-color: #C98CF1;
color:#FFFFFF;
outline:none;
border-radius:10px;
padding:14px 29px;
text-align: center;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
&:hover{
    cursor: pointer;
}

@media (max-width:900px) {
    font-size:12px;
    width:112px;

}

`

const StyledPopularSection = styled.section`
@media (max-width:480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
}


`
export default function Popular(){

    return (
        <StyledPopularSection>
        <Title text = "Populares" align="center"/>
        <StyledPhotoColumn>
            {photos.map((photo)=>{
                return (
                    <StyledPhoto src={photo.path} key={photo.id} alt = {photo.alt}/>
                )
            })}
        <StyledButton>Ver Más</StyledButton>
        </StyledPhotoColumn>
        </StyledPopularSection>

    )
}