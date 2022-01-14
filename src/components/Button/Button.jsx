import { ButtonLoad } from "./button.styled";
import propTypes from "prop-types";

const Button = ({ onClickFn, children = null }) => {
  return (
    <ButtonLoad type="button" onClick={onClickFn}>
      {children}
    </ButtonLoad>
  );
};

Button.propTypes = {
  onClickFn: propTypes.func.isRequired,
  children: propTypes.string,
};

export default Button;
