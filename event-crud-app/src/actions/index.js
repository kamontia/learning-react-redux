const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// ActionCreator:Actionを返す関数
export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};
