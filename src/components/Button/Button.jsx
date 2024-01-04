import PropTypes from "prop-types";

const Button = (props) => {
  const { btnText, btnClick, btnClass } = props;
  return (
    <button className={btnClass} onClick={btnClick}>
      {btnText}
    </button>
  );
};

Button.propTypes = {
  btnText: PropTypes.string,
  btnClick: PropTypes.func,
  btnClass: PropTypes.string,
};

export default Button;
