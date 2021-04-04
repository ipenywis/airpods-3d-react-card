import React from "react";

const initialState = {
  active: "overview",
  setActive: () => {},
};

export const CardContext = React.createContext(initialState);
