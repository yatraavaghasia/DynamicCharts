import React, { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { BarChart } from './charted';

Chart.register(CategoryScale);

const Home = () => {
    const [Data, setData] = useState(null);
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: "Users Gained ",
                data: [],
                backgroundColor: [
                    "rgba(75, 192, 192, 1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/charts/');
            const json = await response.json();

            if (response.ok) {
                setData(json);
            }
        };

        fetchData();
    }, []);

    React.useEffect(() => {
        if (Data) {
            setChartData({
                labels: Data.map((data) => data.year),
                datasets: [
                    {
                        label: "Users Gained ",
                        data: Data.map((data) => data.userGain),
                        backgroundColor: [
                            "rgba(75, 192, 192, 1)",
                            "#ecf0f1",
                            "#50AF95",
                            "#f3ba2f",
                            "#2a71d0",
                        ],
                        borderColor: "black",
                        borderWidth: 2,
                    },
                ],
            });
        }
    }, [Data]);

    return (
        <div>
            {Data && Data.map((datum) => (
                <p key={datum.id}>{datum.year}</p>
            ))}
            {Data && <BarChart chartData={chartData} />}
        </div>
    );
};

export default Home;