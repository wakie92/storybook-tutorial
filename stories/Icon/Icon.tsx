/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as icons from './svg';

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
  return (
    <SVGIcon
      css={{ fill: color || 'currentColor', width: size, height: 'auto' }}
      className={className}
    />
  );
};

export default Icon;
