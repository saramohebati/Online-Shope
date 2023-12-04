import PropTypes from "prop-types";
import { createContext } from "vm";

const ShopContext = createContext();

const ShopProvider = ({ children }: any) => {
  return <ShopContext.Provider>{children}</ShopContext.Provider>;
};

ShopProvider.propTypes = {
  children: PropTypes.node,
};

export default ShopProvider;
