import React from "react";
import { Chart } from "chart.js";
import { MyResults } from "../data/data";
import { useRef, useEffect } from "react";

export const PointChart = () => {
    const chartRef = useRef(null);

useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'scatter', // Change the type to 'scatter'
        data: {
            labels: MyResults.map(student => student.name),
            datasets: [{
                data: MyResults.map(student => ({ x: student.name, y: student.point })), // Use an object with 'x' and 'y' properties for each point
                pointBackgroundColor: '#009172', 
                pointRadius: window.innerWidth > 1000 ? 10 : 4,
            }]
        },
        options: {
            scales: {
            x: {
                type: 'category', // Use 'category' scale for the x-axis when using scatter plot
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
                max: 140,
            }
            },
            plugins: {
            legend: {
                display: false, // Hide the legend
            },
            datalabels: {
                anchor: 'center',
                align: 'center',
                color: '#fff',
                offset: 4,
                formatter: (value) => value,
            }
            }
        }
    });

    // Clean up the chart when the component unmounts
        return () => {
            myChart.destroy();
        };
    }, []); // Empty dependency array ensures that this effect runs only once after the initial render

    return (
        <div>
            <canvas id="myChart" ref={chartRef}></canvas>
        </div>
    );

}