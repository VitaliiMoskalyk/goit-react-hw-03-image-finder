
import { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from "react-loader-spinner";

class App extends Component {
  state = {
    value: '',
  }

  submitForm = (value) => {
    this.setState({value:value})
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log(this.props, 'this.props');
    console.log(prevProps,'prevProps')
  }
 
  set=(set)=>{
  console.log(set)
  }
  render() {
    return (<>
      <Searchbar onSubmit={this.submitForm} />
      <Loader
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      <ImageGallery value={this.state.value} set={this.set}/>
    </>)
  }
}

export default App;
