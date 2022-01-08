
import { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem'
import Loader from "react-loader-spinner";
import Modal from './components/Modal'


class App extends Component {
  state = {
    value: '',
    loader: false,
    pictures: [],
    modal: false,
    contentModal:'',
  }

  submitForm = (value) => {
    this.setState({ value })
  }
  
  loader = (loader) => {
    this.setState({loader})
  }

  givePictures = (pictures) => {
    this.setState({pictures})
  }
 
  onClick = (contentModal) => {
    this.setState({contentModal,modal:!this.state.modal})
  }
  
  render() {
    const { value, loader,pictures,modal,contentModal} = this.state;
    
    return (
      <section className='App'>
      <Searchbar  onSubmit={this.submitForm} />
      
        <ImageGallery
          value={value}
          loader={this.loader}
          givePictures={this.givePictures}>
          
          {pictures.map(({id,webformatURL,largeImageURL}) => (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onClick={this.onClick}
              />))}
        
        </ImageGallery>

      {loader && <Loader
        type="Circles"
        color="#00BFFF"
        height={"80%"}
        width={"80%"}
          timeout={3000} //3 secs
        />}
        
        {modal && <Modal src={contentModal} onClick={this.onClick} onClose={this.onClick}/>}
        
    </section>)
  }
}

export default App;
