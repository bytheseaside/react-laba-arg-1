import deleteIcon from "./assets/delete_icon.svg";
import divideIcon from "./assets/divide_icon.svg";
import minusIcon from "./assets/minus_icon.svg";
import plusIcon from "./assets/plus_icon.svg";
import xIcon from "./assets/x_icon.svg";
import equalIcon from "./assets/equal_icon.svg";

const keys = [
  {
    innerHtml: "C",
    boxStyle: "button border-box corner--left",
    value: "C",
  },
  {
    innerHtml: <img src={divideIcon} alt="divide icon" />,
    boxStyle: "button border-box",
    value: "/",
  },
  {
    innerHtml: <img src={xIcon} alt="x icon" />,
    boxStyle: "button border-box",
    value: "*",
  },
  {
    innerHtml: <img src={deleteIcon} alt="delete icon" />,
    boxStyle: "button border-box corner--right",
    value: "D",
  },
  {
    innerHtml: "7",
    boxStyle: "button middle-box",
    value: 7,
  },
  {
    innerHtml: "8",
    boxStyle: "button middle-box",
    value: 8,
  },
  {
    innerHtml: "9",
    boxStyle: "button middle-box",
    value: 9,
  },
  {
    innerHtml: <img src={minusIcon} alt="dminus icon" />,
    boxStyle: "button border-box",
    value: "-",
  },
  {
    innerHtml: "4",
    boxStyle: "button middle-box",
    value: 4,
  },
  {
    innerHtml: "5",
    boxStyle: "button middle-box",
    value: 5,
  },
  {
    innerHtml: "6",
    boxStyle: "button middle-box",
    value: 6,
  },
  {
    innerHtml: <img src={plusIcon} alt="plus icon" />,
    boxStyle: "button border-box",
    value: "+",
  },
  {
    innerHtml: "1",
    boxStyle: "button middle-box",
    value: 1,
  },
  {
    innerHtml: "2",
    boxStyle: "button middle-box",
    value: 2,
  },
  {
    innerHtml: "3",
    boxStyle: "button middle-box",
    value: 3,
  },
  {
    innerHtml: <img src={equalIcon} alt="equal icon" />,
    boxStyle: "button large-box bottom-rounded--right",
    value: "=",
  },
  {
    innerHtml: "%",
    boxStyle: "button middle-box bottom-rounded--left",
    value: "%",
  },
  {
    innerHtml: "0",
    boxStyle: "button middle-box",
    value: 0,
  },
  {
    innerHtml: ".",
    boxStyle: "button middle-box",
    value: ".",
  },
];

export default keys;
