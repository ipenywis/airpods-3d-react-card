import React, { useContext } from "react";
import styled from "styled-components";
import { Button, transition } from "./common";

import LightningCableImg from "../../assets/images/airpods-max-lightning-usbc.jpeg";
import AirpodsMaxFrontImg from "../../assets/images/airpods-max-front.jpeg";
import SmartCaseImg from "../../assets/images/airpods-max-smartcase.jpeg";
import { motion } from "framer-motion";
import { CardContext } from "./context";

const BuyProductContainer = styled(motion.div)`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 28px;
  background: rgb(145, 169, 139);
  background: linear-gradient(
    176deg,
    rgba(145, 169, 139, 1) 0%,
    rgba(159, 179, 153, 1) 100%
  );
  padding: 10px;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fafafa;
  border-radius: 30px;
  padding: 10px 14px;
`;

const InBoxContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Accessory = styled.div`
  width: auto;
  height: 6em;

  img {
    width: auto;
    height: 100%;
  }
`;

export function BuyProduct(props) {
  const { active, setActive } = useContext(CardContext);

  let animate = {};
  if (active === "overview") animate = { x: 0 };
  else if (active === "buy") animate = { x: -290 };

  return (
    <BuyProductContainer animate={animate} transition={transition}>
      <InfoContainer>
        <InBoxContainer>
          <Accessory>
            <img src={AirpodsMaxFrontImg} />
          </Accessory>
          <Accessory>
            <img src={SmartCaseImg} />
          </Accessory>
          <Accessory>
            <img src={LightningCableImg} />
          </Accessory>
        </InBoxContainer>
        <Button>Buy</Button>
      </InfoContainer>
    </BuyProductContainer>
  );
}
