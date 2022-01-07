import { Component } from "react";
import axios from "axios";
import ImageGalleryItem from "../ImageGalleryItem";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class ImageGallery extends Component {
  state = {
    pictures: [],
    loader: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { pictures, page } = this.state;
    const { value } = this.props;
    const API = `https://pixabay.com/api/?q=${value}&page=${page}&key=24190237-c75eaa2cb0fd0521e8d3d1887&image_type=photo&orientation=horizontal&per_page=12`;

    if (value !== prevProps.value || page !== prevState.page) {
      value !== prevProps.value && this.setState({ page: 1 });

      axios.get(API).then((response) => {
        if (response) {
          const data = response.data.hits;
          this.setState({
            pictures: page === 1 ? data : [...pictures, ...data],
          });
          this.props.set(this.state.pictures);
        } else console.log("error");
      });
    }
  }

  pagination = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    console.log(this.props);
    return (
      <ul>
        {this.state.pictures.map((picture) => (
          <ImageGalleryItem
            key={picture.id}
            id={picture.id}
            webformatURL={picture.webformatURL}
          />
        ))}

        {this.state.pictures.length > 11 && (
          <button type="button" onClick={this.pagination}>
            Load more
          </button>
        )}
      </ul>
    );
  }
}

export default ImageGallery;
