import React from "react";
import { cardsData } from "../data/cardsData";
import Card from "./Card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import AddProfileCard from "./AddProfileCard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  SubTitle
);
const optionsDoughnut = {
  responsive: true,
  cutout: "80%",
  plugins: {},
};

const dataDoughnut = {
  datasets: [
    {
      label: "My First Dataset",
      data: [20, 10, 10],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio:false,
  plugins: {
    legend: {
      position: "top",
      align: "end",
      labels: {
        usePointStyle: true,
      },
    },
    title: {
      display: true,
      text: ["Activities"],
      position: "top",
      align: "start",
      font: { weight: "bold", size: 20 },
      color: "black",
    },
    subtitle: {
      display: true,
      text: "May - June 2023",
      color: "black",
      align: "start",
    },
  },
};

const labels = ["week1", "week2", "week3", "week4"];

const data = {
  labels,
  datasets: [
    {
      label: "Guest",
      data: labels.map(() => faker.number.int({ min: 0, max: 500 })),
      backgroundColor: "#98D89E",
      borderRadius: 5,
      maxBarThickness: 40,
    },
    {
      label: "User",
      data: labels.map(() => faker.number.int({ min: 0, max: 500 })),
      backgroundColor: "#EE8484",
      borderRadius: 5,
      maxBarThickness: 40,
    },
  ],
};

const Main = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex gap-5 flex-wrap ">
        {cardsData.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </div>
      {/* chart */}
      <Bar
        options={options}
        data={data}
        className="bg-white p-4 rounded-lgPlus border-2 border-[#E0E0E0] shadow-shadowFull max-h-[360px] "
      />
      {/* boxes */}
      <div className="grid md:grid-cols-2 gap-4 max-h-80 md:grid-row-1">
        <div className="bg-white rounded-lgPlus shadow-shadowFull border-2  p-4 flex flex-col justify-center ">
          <div className="flex items-center justify-between">
            <div className="font-bold">Top Products</div>
            <div className="text-xs">may - june 2023</div>
          </div>
          <div className="flex gap-2 items-center justify-evenly">
            <div className="h-40 w-40 aspect-square">
              <Doughnut data={dataDoughnut} options={optionsDoughnut} />
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-[#98D89E]"></div>
                  <h2 className="text-sm font-bold font-Montserrat">
                    Basic Tees
                  </h2>
                </div>
                <p className="text-xs font-Lato text-[#858585] relative left-4">{10}%</p>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-[#F6DC7D]"></div>
                  <h2 className="text-sm font-bold font-Montserrat">
                    Custom Short Pants
                  </h2>
                </div>
                <p className="text-xs font-Lato text-[#858585] relative left-4">{50}%</p>
              </div>

              <div>
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-[#EE8484]"></div>
                  <h2 className="text-sm font-bold font-Montserrat">
                    Super Hoodies
                  </h2>
                </div>
                <p className="text-xs font-Lato text-[#858585] relative left-4">{40}%</p>
              </div>
            </div>
          </div>
        </div>
        <AddProfileCard />
      </div>
    </section>
  );
};

export default Main;
