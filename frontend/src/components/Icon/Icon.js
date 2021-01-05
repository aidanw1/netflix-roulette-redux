import React from "react";
import { IconContainer, IconBold, IconSub } from "./IconStyles";

const Icon = ({ setSwitchBanner = { setSwitchBanner } }) => {
  return (
    <IconContainer onClick={() => setSwitchBanner(false)}>
      <IconBold>netlix</IconBold>
      <IconSub>roulette</IconSub>
    </IconContainer>
  );
};

export default Icon;
