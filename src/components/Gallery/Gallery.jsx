import styled from "styled-components";
import Tags from "./Tags/Tags";
import Popular from "./Popular/Popular";
import Title from "../Title/Title";
import ImageCard from "./ImageCard/ImageCard";
import { useEffect, useState } from "react";

const StyledTagContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  color: #ffffff;
  align-items: center;
  font-size: 24px;
  gap: 24px;
  justify-content: start;
  margin-top:32px;

@media (max-width:900px) {
 padding-left :12px ;
}

@media (max-width:480px) {
  flex-direction: column;
  margin:32px 26px;
  margin-left:0;
  max-width:312px;
  gap:0;
}
`;

const InsideTagContainer = styled.div`
display: flex;
gap:16px;
@media (max-width:480px) {
  gap:8px;
  
}

max-width:312px;


`


const GalleryContainer = styled.div`
  display: flex;

  @media (max-width:900px){
    padding-left: 12px;
  }
  @media (max-width:480px) {
   flex-direction :column ; 
   text-align: center;
  }
`;
const FluidSection = styled.section`
  flex-grow: 1;
`;

const CardContainer = styled.section`
  display: grid;
  @media (max-width:480px) {
    grid-template-columns: repeat(1,1fr);
  }
  grid-template-columns: repeat(2, 1fr);
  
  gap: 24px;
`;
export default function Gallery(props) {
  const { photos = [], toSelectPhoto, toSelectFavourite,searchInput, handleTag, selectedTag} = props;
  const [filteredPhotos,setFilteredPhotos]=useState(photos);

  useEffect(()=>{
    if(searchInput!=""){
    setFilteredPhotos((photos.filter((photo)=>photo.titulo.toLowerCase().includes(searchInput))))
  }
  else setFilteredPhotos(photos)
  },[searchInput,photos])

  useEffect(()=>{
    if(selectedTag == 0){
      setFilteredPhotos(photos)
    }
    else setFilteredPhotos(photos.filter((photo)=>photo.tagId==selectedTag))
  },[selectedTag,photos])

  return (
    <>
      <StyledTagContainer>
        <span>Busque Por Tags:</span>
        
      <InsideTagContainer><Tags handleTag={handleTag} /></InsideTagContainer>
      </StyledTagContainer>

      <GalleryContainer>
        <FluidSection>
          <Title text="Navegue Por la Galería" />
          <CardContainer>
            {
            filteredPhotos.map((photo) => {
              return (
                 
                <ImageCard
                toSelectFavourite={toSelectFavourite}
                toAskZoom={toSelectPhoto}
                key={photo.id}
                photo={photo}
              />
               

              );
            })}
          </CardContainer>
        </FluidSection>

        <Popular />
      </GalleryContainer>
    </>
  );
}
