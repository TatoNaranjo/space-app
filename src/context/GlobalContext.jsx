import { createContext } from "react";
import { useState } from "react";
import photos from "./fotos.json";

export const globalContext = createContext();




const GlobalContextProvider = ({ children }) => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const [openedModal, setOpenedModal] = useState(false);

  const [selectedTag, setSelectedTag] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const [searchText, setSearchText] = useState("");

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
    <globalContext.Provider
      value={{
        searchText,
        setSearchText,
        galleryPhotos,
        setGalleryPhotos,
        selectedPhoto,
        setSelectedPhoto,
        setSelectedTag,
        mobileMenu,
        setMobileMenu,
        toSelectFavourite,
        selectedTag,
        handleTag,
        handleMobileMenu,
        handleSearch,
        openedModal,
        setOpenedModal
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;
