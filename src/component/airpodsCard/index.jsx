import React, { useState } from "react";
import styled from "styled-components";
import { BuyProduct } from "./buyProduct";
import { Overview } from "./overview";

import AirpodsMaxImg from "../../assets/images/airpods_max.png";
import { CardContext } from "./context";
import { motion } from "framer-motion";

const CardContainer = styled.div`
  width: 290px;
  height: 580px;
  display: flex;
  border-radius: 28px;
  box-shadow: 0 0 12px 1px rgba(15, 15, 15, 0.12);
  position: relative;
`;

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 28px;
`;

const AirpodsMax = styled(motion.div)`
  position: absolute;
  width: auto;
  height: 23em;
  top: -2.9em;
  right: -1.7em;
  z-index: 99;

  img {
    width: auto;
    height: 100%;
  }
`;

export function AirpodsCard(props) {
  const [active, setActive] = useState("overview");

  const contextValue = { active, setActive };

  let animate = {};
  if (active === "buy") animate = { opacity: 1 };
  else if (active === "overview") animate = { opacity: 0 };

  return (
    <CardContext.Provider value={contextValue}>
      <CardContainer>
        <AirpodsMax
          initial={{ opacity: 0 }}
          animate={animate}
          transition={{ type: "tween", duration: 1 }}
        >
          <img src={AirpodsMaxImg} />
        </AirpodsMax>
        <CardWrapper>
          <Overview />
          <BuyProduct />
        </CardWrapper>
      </CardContainer>
    </CardContext.Provider>
  );
}
