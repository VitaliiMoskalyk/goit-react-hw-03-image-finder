import { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ImageGalery } from "./imageGallery.styled";
import propTypes from "prop-types";

class ImageGallery extends Component {
  render() {
    return <ImageGalery>{this.props.children}</ImageGalery>;
  }
}

// ImageGallery.propTypes = {
//   value: propTypes.string,
//   loader: propTypes.func,
//   givePictures: propTypes.func,
//   pictures: propTypes.array,
//   page: propTypes.number,
// };

export default ImageGallery;
