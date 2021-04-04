import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import AirpodMaxBackgroundImg from "../../assets/images/audio_quality.jpg";
import { Button, transition } from "./common";
import { CardContext } from "./context";

const OverviewContainer = styled(motion.div)`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  background: url(${AirpodMaxBackgroundImg}) center;
  background-size: cover;
  background-position: -35px 0px;
  border-radius: 28px;
  padding-bottom: 3em;
  z-index: 100;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  margin-bottom: 1.8em;
`;

const Title = styled.h1`
  margin: 0;
  color: #fff;
  font-size: 58px;
  font-weight: 700;
`;

export function Overview(props) {
  const { active, setActive } = useContext(CardContext);

  const switchToBuy = () => {
    setActive("buy");
  };

  let animate = {};
  if (active === "overview") animate = { x: 0 };
  else if (active === "buy") animate = { x: -290 };

  return (
    <OverviewContainer animate={animate} transition={transition}>
      <Button onClick={switchToBuy}>Overview</Button>
      <TitleContainer>
        <Title>Airpods</Title>
        <Title>Max</Title>
      </TitleContainer>
    </OverviewContainer>
  );
}
