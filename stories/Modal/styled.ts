import { css } from "@emotion/core";
import styled from "styled-components";
import { animated } from "react-spring";

export const Fullscreen = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const DarkLayer = styled(animated.div)`
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);'
`;

export const WhiteBoxWrapper = styled(animated.div)`
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WhiteBox = styled.div<{}>`
  box-sizing: border-box;
  border-radius: 4px;
  width: 25rem;
  background: white;
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    color: #343a40;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    margin: 0;
    color: #868e96;
  }
`;
