import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const Mychartss = () => {
  const [cpuData, setCpuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/cpu/performance');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setCpuData(result.cpu_percent);
      } catch (error) {
        console.error('Error fetching CPU data:', error);
      }
    };

    const intervalId = setInterval(fetchData, 1000); // Fetch data every 1 second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const data = {
    labels: Array.from({ length: cpuData.length }, (_, index) => index),
    datasets: [
      {
        label: 'CPU Usage',
        data: cpuData,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div>
      <h1>CPU Performance Chart</h1>
      <Line data={data} />
    </div>
  );
};

export default Mychartss;
