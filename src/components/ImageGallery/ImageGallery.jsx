import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ImageGalery } from "./imageGallery.styled";
import ImageGalleryItem from "../ImageGalleryItem";
import propTypes from "prop-types";

const ImageGallery = ({ items, modalFn }) => {
  return (
    <ImageGalery>
      {items.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          altText={tags}
          webformat={webformatURL}
          largeImage={largeImageURL}
          onClick={modalFn}
        />
      ))}
    </ImageGalery>
  );
};

ImageGallery.propTypes = {
  modalFn: propTypes.func,
  items: propTypes.array,
};

export default ImageGallery;
