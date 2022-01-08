import { Component } from "react";
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  Searchbarr,
} from "./Searchbar.styled";
import propTypes from "prop-types";
import { MdFindReplace } from "react-icons/md";

class Searchbar extends Component {
  state = {
    value: "",
  };

  readInputValue = (evt) => {
    const inputValue = evt.currentTarget.value.toLowerCase();
    this.setState(() => ({ value: inputValue }));
  };

  submitForm = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state.value.trim());
    this.setState({ value: "" });
  };

  render() {
    return (
      <Searchbarr>
        <SearchForm onSubmit={this.submitForm}>
          <SearchFormButton type="submit">
            <MdFindReplace />
          </SearchFormButton>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus="on"
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.readInputValue}
          />
        </SearchForm>
      </Searchbarr>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};

export default Searchbar;
