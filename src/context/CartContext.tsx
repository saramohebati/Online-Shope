import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createContext } from "react";

export const CartContext = createContext({});

const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<any[]>([]);

  const [itemAmount, setItemAmount] = useState(0);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem["price"] * currentItem["amount"];
    }, 0);
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem["amount"];
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  const addToCart = ({ product, id }: any) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item["id"] === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item["id"] === id) {
          return { ...item, amount: cartItem["amount"] + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([[...cart], newItem]);
    }
  };

  const removeFromCart = ({ id }: any) => {
    const newCart = cart.filter((item) => {
      return item["id"] !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = ({ id }: any) => {
    const cartItem = cart.filter((item) => item["id"] === id);
    addToCart({ cartItem, id });
  };

  const decreaseAmount = ({ id }: any) => {
    const cartItem = cart.find((item) => {
      return item["id"] === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item["id"] === id) {
          return { ...item, amount: cartItem["amount"] - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem["amount"] < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export default CartProvider;
