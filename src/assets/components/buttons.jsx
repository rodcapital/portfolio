const Buttons = ({ title, style }) => {
  return <button style={{ ...buttonStyle, ...style }}>{title}</button>;
};

export default Buttons;

const buttonStyle = {
  backgroundColor: "black",
  color: "white",
  padding: ".5rem 1.4rem",
  border: "1px solid white",
  borderRadius: "2rem",
  fontSize: "12px",
};
