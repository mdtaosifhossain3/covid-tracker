import numeral from "numeral";
export const formatedNum = (num) => {
  return num ? `+${numeral(num).format("0.0a")}` : "0";
};
