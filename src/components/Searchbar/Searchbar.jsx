import { Component } from "react";

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
      <form onSubmit={this.submitForm}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus="on"
          placeholder="Search images and photos"
          value={this.state.value}
          onChange={this.readInputValue}
        />
      </form>
    );
  }
}

export default Searchbar;
