import { PiBooksDuotone } from "react-icons/pi";
import { FiLogIn } from "react-icons/fi";
import { FaInfoCircle } from "react-icons/fa";

export const navbarLinks = [
  {
    id: "1",
    title: " دسته بندی محصولات",
    mega: true,
    hover: "handleConsoleHomeHover",
  },
  {
    id: "2",
    title: "بازی ها",
    to: `#library`,
    hover: "handleConsoleJanebiHover",
  },
  {
    id: "3",
    title: "مجله خبری",
    to: `#library`,
    hover: "handleConsoleJanebiHover",
  },
  {
    id: "4",
    title: "در باره ما",
    to: `#library`,
    hover: "handleConsoleJanebiHover",
  },
];

export const megabtn = [
  {
    id: "1",
    title: " کنسول بازی",
    mega: true,
    classname: "btn1",
    state: "setOpencn",
  },
  {
    id: "2",
    title: "بازی ها",
    to: `#library`,
    classname: "btn2",
    state: "setOpengm",
  },
  {
    id: "3",
    title: "مجله خبری",
    to: `#library`,
    hover: "handleConsoleJanebiHover",
    state: "setOpenmg",
  },
  {
    id: "4",
    title: "در باره ما",
    to: `#library`,
    hover: "handleConsoleJanebiHover",
    state: "setOpenab",
  },
];

export const secondmegabtn = [
  {
    id: "1",
    title: " 1 کنسول بازی",
    mega: true,
    classname: "f1",
  },
  {
    id: "2",
    title: " 1 کنسول بازی",
    to: `#library`,
    classname: "f1",
  },
  {
    id: "3",
    title: " 1 کنسول بازی",
    to: `#library`,
    classname: "f1",
    hover: "handleConsoleJanebiHover",
  },
  {
    id: "4",
    title: " 1 کنسول ",
    mega: true,
    classname: "f2",
  },
  {
    id: "5",
    title: " 1 کنسول ",
    to: `#library`,
    classname: "f2",
  },
  {
    id: "6",
    title: " 1 کنسول ",
    to: `#library`,
    classname: "f2",
    hover: "handleConsoleJanebiHover",
  },
];
