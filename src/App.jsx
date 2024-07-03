import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Banner from "./components/Banner/Banner";
import Gallery from "./components/Gallery/Gallery";
import ModalZoom from "./components/ModalZoom/ModalZoom";
import GlobalContextProvider from "./context/GlobalContext";


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
  @media (max-width: 900px) {
    display: block;
  }
`;

const GalleryContent = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
    align-items: center;
    gap: 0;
  }
`;

function App() {
  return (
    <>
      <GradientBackground>
          <GlobalContextProvider>
        <GlobalStyles />
        <AppContainer>
            <Header />
            <MainContainer>
              <SideBar />
              <GalleryContent>
                <Banner
                  text="La galería más completa de fotos del espacio"
                  backgroundImage="/img/Banner.png"
                  backgroundMobile="/img/Banner_Mobile.png"
                  backgroundTablet="/img/Banner_Tablet.png"
                />
                <Gallery />
              </GalleryContent>
            </MainContainer>
        </AppContainer>
        <ModalZoom />
          </GlobalContextProvider>
      </GradientBackground>
    </>
  );
}

export default App;
