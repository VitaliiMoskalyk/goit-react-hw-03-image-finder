
import { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from "react-loader-spinner";
import Modal from './components/Modal';
import Button from './components/Button';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from './components/servises/getData';

class App extends Component {
  state = {
    value: '',
    loader: false,
    pictures: [],
    modal: false,
    contentModal: '',
    page: 1, 
  };
  
  componentDidUpdate(prevProps, prevState) {
    const { value, page } = this.state;

    if (value !== prevState.value || page !== prevState.page) {

      this.setState((prevState) => ({ page: (value === prevState.value) ? (prevState.page) : 1, loader: true }))

      api.getData(value,page).then((data) => {
        this.setState({
          pictures: page === 1 ? data.hits : [...this.state.pictures, ...data.hits],
        }); toast(`We are find ${this.state.pictures.length} images from ${data.total}`);
        })
        .catch((error) => console.log(error))
        .finally(() => { this.setState({ loader: false }); })
    } 
  }
  
  submitForm = (value) => {
    this.setState({ value,page:1 })
  }
 
  givelargeImage = (contentModal) => {
    
    this.setState((prevState)=>({contentModal,modal:!prevState.modal}))
  }

  pagination = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    
  };
 
  render() {
    const {loader,pictures,modal,contentModal} = this.state;
    
    return (
      <section className='App'>

      <Searchbar  onSubmit={this.submitForm} />
      
        {pictures.length >= 1 &&
          <ImageGallery
            items={pictures}
            modalFn={this.givelargeImage} />}
        
        {pictures.length >= 11 &&
          <Button onClickFn={this.pagination}>Load more</Button>}
        
        {loader &&
          <Loader className='loader'
        type="Circles"
        color="#3f51b5"
        height={"80%"}
        width={"80%"}
          timeout={30000} //3 secs
        />}
        
        {modal &&
          <Modal
            src={contentModal}
            onClick={this.givelargeImage}
            onClose={this.givelargeImage} />}
        
        <ToastContainer />
        
    </section>)
  }
}

export default App;
