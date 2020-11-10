import React from "react";
import * as icons from "./svg";

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[];

export type IconProps = {
  /** Icon type to use */
  icon: IconType;
  /** Icon color */
  color?: string;
  /** Icon size */
  size?: string | number;
  className?: string;
};

/** Use the `icon` component when you want to show the icon.
 *
 * This component shows the icon in svg form, and you can define the color and size of the icon using props or styles.
 *
 * When setting the shape of the style, set the color to `color` and set the size to `width`.
 */

export const Icon = ({ icon, color, size, className }: IconProps) => {
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

export default Icon;
