import { Component } from "react";
import { GalleryItem, ImageGalleryItemImage } from "./imageItem.styled";
import propTypes from "prop-types";

class ImageGalleryItem extends Component {
  click = () => {
    this.props.onClick(this.props.largeImageURL);
  };
  render() {
    const { webformatURL, id } = this.props;
    return (
      <GalleryItem>
        <ImageGalleryItemImage
          src={webformatURL}
          alt={id}
          onClick={this.click}
        />
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: propTypes.number.isRequired,
  webformatURL: propTypes.string.isRequired,
  largeImageURL: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

export default ImageGalleryItem;
