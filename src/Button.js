import PropTypes from "prop-types";
import styles from "./Button.module.css";

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
function Button({ text }) {
  return <button className={styles.title}>{text}</button>;
}

export default Button;
