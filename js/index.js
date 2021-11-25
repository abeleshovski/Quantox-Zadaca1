import { setTime } from "./views/base.js";
import Box from "./views/Box.js";
import ReportCard from "./views/ReportCard.js";

let data = [];

const getData = async () => {
  await fetch("data.json")
    .then((res) => res.json())
    .then((info) => {
      data = info;
    })
    .catch((err) => console.log(err));
};

const getRepordCard = async () => {
  ReportCard();
  document.getElementById("dailyBtn").style.color = "#fff";
};

const getBoxData = async () => {
  data.forEach((item, id) => Box(item, id));
};

const getDaily = () => {
  setTime(data, "daily");
};

const getWeekly = () => {
  setTime(data, "weekly");
};

const getMonthly = () => {
  setTime(data, "monthly");
};

//on load event
window.addEventListener("load", async () => {
  await getData();
  await getRepordCard();
  await getBoxData();

  document.getElementById("dailyBtn").addEventListener("click", getDaily);
  document.getElementById("weeklyBtn").addEventListener("click", getWeekly);
  document.getElementById("monthlyBtn").addEventListener("click", getMonthly);
});
