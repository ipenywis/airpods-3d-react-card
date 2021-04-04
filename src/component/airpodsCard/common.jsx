import styled from "styled-components";

export const Button = styled.button`
  padding: 15px 2.4em;
  outline: none;
  border: none;
  border-radius: 28px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  background-color: rgb(130, 148, 126);
  background-color: linear-gradient(
    80deg,
    rgb(182, 199, 178) 0%,
    rgba(141, 167, 134, 1) 100%
  );
  cursor: pointer;
  transition: all 320ms ease-in-out;

  &:hover {
    background-color: rgb(93, 119, 86);
  }
`;

export const transition = {
  type: "tween",
  duration: 0.8,
};
