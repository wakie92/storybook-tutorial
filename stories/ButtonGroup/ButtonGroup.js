/** @jsx jsx */
import { jsx } from "@emotion/core";
import { gapStyle, rightAlignStyle } from "./style";
import PropTypes from "prop-types";

/**
 * Use `ButtonGroup` component to show multiple `Button` components or to align buttons to the right.
 */

const ButtonGroup = ({ direction, rightAlign, gap, children, className }) => {
  return (
    <div
      css={[
        {
          display: "flex",
          flexDirection: direction,
        },
        gapStyle(direction, gap),
        rightAlign && rightAlignStyle,
      ]}
      className={className}
    >
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  /** Direction to show buttons */
  direction: PropTypes.oneOf(["row", "column"]).isRequired,
  /** Show button to right. */
  rightAlign: PropTypes.bool,
  /** Sets the distance between the button and buttons. */
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Buttons to show in the Button Group */
  children: PropTypes.node.isRequired,
  /** Use when you want to customize your style */
  className: PropTypes.string,
};

ButtonGroup.defaultProps = {
  direction: "row",
  gap: "0.5rem",
  rightAlign: false,
  className: "",
};

export default ButtonGroup;
