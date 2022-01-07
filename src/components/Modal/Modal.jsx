const Modal = ({ content }) => {
  document.body.style.overflow = "hidden";
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(192,192,192,0.7)",
      }}
    >
      <img
        width={"60%"}
        src={content}
        alt=""
        style={{
          position: "fixed",
          top: "5%",
          right: "50%",
          transform: "translate( 50%,5%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
export default Modal;
