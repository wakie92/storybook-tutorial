/** @jsx jsx */
import { jsx } from '@emotion/core';
import { gapStyle, rightAlignStyle } from './style';

export type ButtonGroupProps = {
  /** Direction to show buttons */
  direction: 'row' | 'column';
  /** Show button to right. */
  rightAlign?: boolean;
  /** Sets the distance between the button and buttons. */
  gap: number | string;
  /** Buttons to show in the Button Group */
  children: React.ReactNode;
  /** Use when you want to customize your style */
  className?: string;
};

/**
 * Use `ButtonGroup` component to show multiple `Button` components or to align buttons to the right.
 */

const ButtonGroup = ({ direction, rightAlign, gap, children, className }: ButtonGroupProps) => {
  return (
    <div
      css={[
        {
          display: 'flex',
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

ButtonGroup.defaultProps = {
  direction: 'row',
  gap: '0.5rem',
};

export default ButtonGroup;
