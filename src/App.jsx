import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Banner from "./components/Banner/Banner";
import Gallery from "./components/Gallery/Gallery";
import photos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./components/ModalZoom/ModalZoom";

const GradientBackground = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  @media (max-width: 480px) {
    align-items: center;
    gap: 0;
  }
  @media (max-width:900px) {
   display: block;
   }
`;

const GalleryContent = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  @media (max-width:900px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
    align-items: center;
    gap: 0;
  }
`;

function App() {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [selectedTag, setSelectedTag] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toSelectFavourite = (receivedPhoto) => {
    if (selectedPhoto?.id === receivedPhoto.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favourite: !receivedPhoto.favourite,
      });
    }
    setGalleryPhotos(
      galleryPhotos.map((photo) => {
        return {
          ...photo,
          favourite:
            photo.id == receivedPhoto.id ? !photo.favourite : photo.favourite,
        };
      })
    );
  };

  const handleSearch = (text) => {
    setSearchText(text.toLowerCase());
  };

  const handleTag = (tag) => {
    setSelectedTag(tag);
  };

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    console.log(mobileMenu);
  };

  return (
    <>
      <GradientBackground>
        <GlobalStyles />
        <AppContainer>
          <Header
            handleSearch={(text) => handleSearch(text)}
            handleMobileMenu={handleMobileMenu}
          />
          <MainContainer>
            <SideBar
              handleMobileMenu={handleMobileMenu}
              isActive={mobileMenu}
            />
            <GalleryContent>
              <Banner
                text="La galería más completa de fotos del espacio"
                backgroundImage="/img/Banner.png"
                backgroundMobile="/img/Banner_Mobile.png"
                backgroundTablet="/img/Banner_Tablet.png"
              />
              <Gallery
                toSelectFavourite={(photo) => toSelectFavourite(photo)}
                toSelectPhoto={(photo) => setSelectedPhoto(photo)}
                photos={galleryPhotos}
                searchInput={searchText}
                handleTag={(tag) => handleTag(tag)}
                selectedTag={selectedTag}
              />
            </GalleryContent>
          </MainContainer>
        </AppContainer>
        <ModalZoom
          toSelectFavourite={(photo) => toSelectFavourite(photo)}
          onClose={() => setSelectedPhoto(null)}
          photo={selectedPhoto}
        />
      </GradientBackground>
    </>
  );
}

export default App;
