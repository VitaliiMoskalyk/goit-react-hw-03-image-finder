import { Component } from "react";
import { GalleryItem, ImageGalleryItemImage } from "./imageItem.styled";
import propTypes from "prop-types";
import noImage from "../Images/template.png";

class ImageGalleryItem extends Component {
  static defaultProps = {
    webformat: noImage,
    largeImage: noImage,
    altText: "no description",
  };

  giveLargeImage = () => {
    this.props.onClick(this.props.largeImage);
  };

  render() {
    const { webformat, altText } = this.props;

    return (
      <GalleryItem>
        <ImageGalleryItemImage
          src={webformat}
          alt={altText}
          loading="lazy"
          onClick={this.giveLargeImage}
        />
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformat: propTypes.string.isRequired,
  largeImage: propTypes.string.isRequired,
  altText: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.string),
    propTypes.string,
  ]).isRequired,
  onClick: propTypes.func,
};

export default ImageGalleryItem;
