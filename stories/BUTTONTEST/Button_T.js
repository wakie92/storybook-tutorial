/** @jsx jsx */
import { jsx } from "@emotion/core";
import { style, themes, sizes, iconOnlyStyle, iconOnlySizes } from "./style";
import PropTypes from "prop-types";

/** The `Button` component is used to trigger an action.  */
const Button = ({
  children,
  onClick,
  size,
  theme,
  disabled,
  width,
  iconOnly,
}) => {
  return (
    <button
      css={[
        style,
        themes[theme],
        sizes[size],
        { width },
        iconOnly && [iconOnlyStyle, iconOnlySizes[size]],
      ]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Button.propTypes = {
//   /** content of button inside */
//   children: PropTypes.node.isRequired,
//   /** function to call when clicking */
//   onClick: PropTypes.func,
//   /** Sets the appearance of the button */
//   theme: PropTypes.onOf(["primary", "secondary", "tertiary"]),
//   /** Sets the size of the button */
//   size: PropTypes.oneOf(["small", "medium", "big"]),
//   /** Sets the disabled */
//   disabled: PropTypes.bool,
//   /** Sets the width what you want */
//   width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   iconOnly: PropTypes.bool,
// };

// Button.defaultProps = {
//   theme: "primary",
//   size: "medium`",
//   onClick: () => {},
//   theme: "primary",
//   size: "medium",
//   disabled: false,
//   width: "2rem",
//   iconOnly: false,
// };

export default Button;
