import { css } from "@emotion/core";

export const gapStyle = (direction, gap) => {
  const marginType = direction === "row" ? "marginLeft" : "marginTop";
  return css({
    "button + button": {
      [marginType]: `${gap} !important`,
    },
  });
};

export const rightAlignStyle = css`
  justify-content: flex-end;
`;
