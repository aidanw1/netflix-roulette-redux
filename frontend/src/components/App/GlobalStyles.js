import { createGlobalStyle } from "styled-components"
import { create } from "yup/lib/Reference"

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
  /* 10px/16px = 62.5% -> 1rem = 10px */
  font-size: 62.5%;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  background: #232323;
}

.MovieStyles__MovieImage-sc-1botavk-8 {
  max-width: 100%;
}

.active_genre {
  padding-bottom: 5px;
  border-bottom: 2px solid red;
}

.menu {
  overflow: hidden;
  border: 3px solid #f65261;
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  top: 60px;
  right: 0;
  width: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 10;
}

.menu.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  z-index: 10;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  border-bottom: 1px solid #dddddd;
}

.menu li a {
  text-decoration: none;
  color: #333333;
  padding: 15px 20px;
  display: block;
}

.react-datepicker-wrapper {
  width: 100%;
}

select {
  /* font-size: 16px;

  border: 0;
  border-radius: 5px;

  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right #ddd;
  /* background: url(./images/down-arrow.svg) no-repeat right #bada55; */
  /* -webkit-appearance: none;
  background-position-x: 244px;  */
  /* background-image: linear-gradient(45deg, transparent 50%, #f65261 50%),
    linear-gradient(135deg, #f65261 50%, transparent 50%),
    linear-gradient(to right, transparent, transparent);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), 100% 0;
  background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
  background-repeat: no-repeat;
  appearance: none; */
  appearance: none;
}

.react-datepicker {
  font-size: 1.4em;
}
.react-datepicker__header {
  padding-top: 0.8em;
}
.react-datepicker__month {
  margin: 0.4em 1em;
}
.react-datepicker__day-name,
.react-datepicker__day {
  width: 1.9em;
  line-height: 1.9em;
  margin: 0.166em;
}
.react-datepicker__current-month {
  font-size: 1em;
}
.react-datepicker__navigation {
  top: 1em;
  line-height: 1.7em;
  border: 0.45em solid transparent;
}
.react-datepicker__navigation--previous {
  border-right-color: #ccc;
  left: 1em;
}
.react-datepicker__navigation--next {
  border-left-color: #ccc;
  right: 1em;
}

.react-datepicker__time-list-item--disabled {
  display: none;
}


`