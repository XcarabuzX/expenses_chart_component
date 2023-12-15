import { useState } from "react";
import estilos from "./Main.module.css";
import { useEffect } from "react";
import Chart from "chart.js/auto";

function Main() {
  const [data, setData] = useState({ labels: [], values: [] });

  const fetchData = async () => {
    try {
      const response = await fetch("/data.json");
      const jsonData = await response.json();

      const labels = jsonData.map((item) => item.day);
      const values = jsonData.map((item) => item.amount);

      setData({ labels, values });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const ctx = document.getElementById("myChart").getContext("2d");
      const existingChart = Chart.getChart(ctx);

      if (existingChart) {
        existingChart.destroy();
      }

      const highestValueIndex = data.values.indexOf(Math.max(...data.values));

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "Amount",
              data: data.values,
              backgroundColor: data.values.map((value,index) =>
                index === highestValueIndex
                  ? "hsl(186, 34%, 60%)"
                  : "hsl(10, 79%, 65%)"
              ),
              borderColor: data.values.map((value,index) =>
                index === highestValueIndex
                  ? "hsl(186, 34%, 60%)"
                  : "hsl(10, 79%, 65%)"
              ),
              borderWidth: 1,
              borderRadius: 5,
            },
          ],
        },
        options: {
          scales: {
            y: {
              display: false,
            },
            x: {
              display: true,
              grid: {
                display: false,
              },
              ticks: {
                color: "hsl(28, 10%, 53%)",
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          elements: {
            bar: {
              borderWidth: 2,
            },
          },
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, [data]);

  return (
    <main className={estilos.main}>
      <h1 className={estilos.titulo}>Spending - Last 7 days</h1>
      <div>
        <canvas id="myChart" width={400} height={300}></canvas>
      </div>
      <hr />
      <div className={estilos.contenedorBajo}>
        <div>
          <small className={estilos.small}>Total this month</small>
          <p className={estilos.total}>$478.33</p>
        </div>
        <div className={estilos.contenedorSegundo}>
          <p className="font-bold">+2.4%</p>
          <small className={estilos.small}>from last month</small>
        </div>
      </div>
    </main>
  );
}

export default Main;
