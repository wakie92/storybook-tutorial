/** @jsx jsx */
import { jsx } from '@emotion/core';
import { style, themes, sizes, iconOnlyStyle, iconOnlySizes } from './style';

export type ButtonProps = {
  /** content of button inside */
  children: React.ReactNode;
  /** function to call when clicking */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** Sets the appearance of the button */
  theme: 'primary' | 'secondary' | 'tertiary';
  /** Sets the size of the button */
  size: 'small' | 'medium' | 'big';
  /** Sets the disabled */
  disabled?: boolean;
  /** Sets the width what you want */
  width?: string | number;
  iconOnly?: boolean;
};

/** The `Button` component is used to trigger an action.  */
const Button = ({ children, onClick, size, theme, disabled, width, iconOnly }: ButtonProps) => {
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

Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
};

export default Button;
