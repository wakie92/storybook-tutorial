import React from "react";
import styled from "styled-components";

import { Icon, iconTypes } from "./Icon";

export default {
  title: "components|basic/Icon",
  component: Icon,
};

export const icon = () => <Icon icon="heart" />;
icon.story = {
  name: "Default",
};

export const customSize = () => <Icon icon="heart" size="4rem" />;

export const customColor = () => <Icon icon="heart" color="red" />;

export const customizedWithStyle = () => (
  <Icon icon="heart" color="red" width="4rem" />
);

export const listOfIcons = () => {
  return (
    <IconListStyle>
      {iconTypes.map((icon) => (
        <li key={icon}>
          <Icon icon={icon} />
          {icon}
        </li>
      ))}
    </IconListStyle>
  );
};

const IconListStyle = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
      font-size: 2rem;
    }
  }
`;
