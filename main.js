const ctx = document.qetElementById("myChart").getContext("2d")

const labels = [  
    "00",
    "02",
    "04",
    "06",
    "08",
    "10",
    "12",
    "14",
    "16",
    "18",
    "20",
    "22",
 ];

  const data = {
      labels,
      datasets: [{
          data: [1.14, 0.98, 0.87, 0.64, 0.44, 0.33, 0.73, 1.98, 2.10, 2.09, 2.06, 2.03, 1.95, 1.82, 1.65, 1.94, 2.02, 2.09, 2.12, 2.12, 2.13, 2.14, 2.12, 2.02 ],
          label: "Elpriser", 
      },
    ],
  };

  const config = {
      type : "line",
      data: data,
      options: {
          responsive: true,
      },
  };

  const myChart =  new Chart(ctx, config);


