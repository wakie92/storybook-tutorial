import React from 'react';

export type HelloProps = {
  /**  Name you want to show */
  name: string,
  /** Setting this value to `true` renders it as an h1 tag. */
  big?: boolean,
  /** Function to call when the Hello button is pressed */
  onHello?: () => void,
  /** Function to call when the Bye button is pressed */
  onBye?: () => void,
}

/**
 * When you want to show hello, use the `Hello` component..
 *
 * - If the `big` value is set to `true`, **Large** will appear..
 * - By setting `onHello` and `onBye` props, you can specify functions to call when the button is clicked..
 */

const Hello = ({ name, big, onHello, onBye }: HelloProps) => {
  return (
    <div>
      {big ? <h1>Hello, {name}!</h1> : <p>Hello, {name}!</p>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>Bye</button>
      </div>
    </div>
  );
};

Hello.defaultProps = {
  big: false
}

export default Hello;