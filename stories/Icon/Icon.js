import React from "react";
import * as icons from "./svg";
import PropTypes from "prop-types";

export const iconTypes = Object.keys(icons);

/** Use the `icon` component when you want to show the icon.
 *
 * This component shows the icon in svg form, and you can define the color and size of the icon using props or styles.
 *
 * When setting the shape of the style, set the color to `color` and set the size to `width`.
 */

export const Icon = ({ icon, color, size, className }) => {
  const SVGIcon = icons[icon];
  console.log(icons, icon, size, color);
  return (
    <>
      <SVGIcon
        style={{
          fill: color || "currentColor",
          width: size,
          height: "auto",
          marginRight: "0",
        }}
        className={className}
      />
    </>
  );
};

Icon.propTypes = {
  /** Icon type to use */
  icon: PropTypes.string.isRequired,
  /** Icon color */
  color: PropTypes.string,
  /** Icon size */
  size: PropTypes.oneOfType([PropTypes.string | PropTypes.number]),
  className: PropTypes.string,
};
Icon.defaultProps = {
  color: "black",
  size: "auto",
};
