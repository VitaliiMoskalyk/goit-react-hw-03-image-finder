const Button = ({ arrayLength, pagination }) => {
  return (
    arrayLength > 11 && (
      <button type="button" onClick={pagination}>
        Load more
      </button>
    )
  );
};

export default Button;
