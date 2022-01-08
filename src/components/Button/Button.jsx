import { ButtonLoad } from "./button.styled";
import propTypes from "prop-types";

const Button = ({ arrayLength, paginationFn }) => {
  return (
    arrayLength > 11 && (
      <ButtonLoad type="button" onClick={paginationFn}>
        Load more
      </ButtonLoad>
    )
  );
};

Button.propTypes = {
  arrayLength: propTypes.number.isRequired,
  paginationFn: propTypes.func,
};

export default Button;
