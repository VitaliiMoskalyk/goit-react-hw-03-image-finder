import { Component } from "react";
import { Overlay, Modall } from "./modal.styled";
import propTypes from "prop-types";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.keyDown);
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyDown);
    document.body.style.overflow = "visible";
  }

  keyDown = (e) => {
    if (e.code === "Escape") this.click();
  };

  click = () => {
    this.props.onClick();
  };

  close = (e) => {
    if (e.target === e.currentTarget) this.props.onClick();
  };

  render() {
    return (
      <Overlay onClick={this.close} onClose={this.close}>
        <Modall>
          <img width={"100%"} src={this.props.src} alt={this.props.src} />
        </Modall>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  src: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  onClose: propTypes.func.isRequired,
};
export default Modal;
