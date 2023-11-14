import React, { createContext } from "react";
import PropTypes from "prop-types";

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  return <ShopContext.Provider>{children}</ShopContext.Provider>;
};

ShopProvider.propTypes = {
  children: PropTypes.node,
};

export default ShopProvider;
