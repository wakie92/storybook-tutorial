/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as icons from "./svg";
import PropTypes from "prop-types";

const IconType = typeof icons;
export const iconTypes = Object.keys(icons);

/** Use the `icon` component when you want to show the icon.
 *
 * This component shows the icon in svg form, and you can define the color and size of the icon using props or styles.
 *
 * When setting the shape of the style, set the color to `color` and set the size to `width`.
 */

export const Icon = ({ icon, color, size, className }) => {
  const SVGIcon = icons[icon];
  return (
    <SVGIcon
      css={{ fill: color || "currentColor", width: size, height: "auto" }}
      className={className}
    />
  );
};

Icon.propTypes = {
  /** Icon type to use */
  icon: PropTypes.string,
  /** Icon color */
  color: PropTypes.string,
  /** Icon size */
  size: PropTypes.oneOfType([PropTypes.string | PropTypes.number]),
  className: PropTypes.string,
};
export default Icon;
