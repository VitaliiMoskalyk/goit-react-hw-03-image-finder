const ImageGalleryItem = ({ webformatURL, id }) => {
  return (
    <li>
      <img src={webformatURL} alt={id} />
    </li>
  );
};

export default ImageGalleryItem;
