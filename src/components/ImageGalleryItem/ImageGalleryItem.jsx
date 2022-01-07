import { Component } from "react";

class ImageGalleryItem extends Component {
  click = () => {
    console.log(this.props.largeImageURL);
    this.props.onClick(this.props.largeImageURL);
  };
  render() {
    return (
      <li>
        <img
          src={this.props.webformatURL}
          alt={this.props.id}
          onClick={this.click}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
