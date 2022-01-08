import { Component } from "react";
import axios from "axios";
import Button from "../Button";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ImageGalery } from "./imageGallery.styled";
import propTypes from "prop-types";

class ImageGallery extends Component {
  state = {
    pictures: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { pictures, page } = this.state;
    const { value, loader } = this.props;
    const API = `https://pixabay.com/api/?q=${value}&page=${page}&key=24190237-c75eaa2cb0fd0521e8d3d1887&image_type=photo&orientation=horizontal&per_page=12`;

    if (value !== prevProps.value || page !== prevState.page) {
      value !== prevProps.value && this.setState({ page: 1 });

      loader(true);

      axios.get(API).then((response) => {
        if (response) {
          const data = response.data.hits;
          this.setState({
            pictures: page === 1 ? data : [...pictures, ...data],
          });
          this.props.givePictures(this.state.pictures);

          loader(false);
        } else console.log("error");
      });
    }
  }

  pagination = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { pictures } = this.state;
    return (
      <>
        {pictures.length >= 1 && (
          <>
            <ImageGalery>{this.props.children}</ImageGalery>
            <Button
              arrayLength={pictures.length}
              paginationFn={this.pagination}
            />
          </>
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  value: propTypes.string,
  loader: propTypes.func,
  givePictures: propTypes.func,
  pictures: propTypes.array,
  page: propTypes.number,
};

export default ImageGallery;
