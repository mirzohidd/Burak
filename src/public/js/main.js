$(document).ready(function () {
  // Initialize charts
  initializeCharts();

  // Date filter buttons for dashboard
  $(".date-filter .btn").on("click", function () {
    // Remove active class from all buttons
    $(".date-filter .btn").removeClass("active");

    // Add active class to clicked button
    $(this).addClass("active");

    // Update charts based on selected period
    updateCharts($(this).text().trim());
  });

  // Initialize all charts
  function initializeCharts() {
    initRevenueChart();
    initCategoriesChart();
    initBookingsChart();
    initUserGrowthChart();
  }

  // Initialize Revenue Chart
  function initRevenueChart() {
    const $revenueChartEl = $("#revenueChart");
    if ($revenueChartEl.length) {
      new Chart($revenueChartEl[0].getContext("2d"), {
        type: "line",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Revenue",
              data: [
                5000, 8000, 7000, 9000, 11000, 10000, 12000, 14000, 13000,
                15000, 16000, 18000,
              ],
              backgroundColor: "rgba(253, 59, 59, 0.1)",
              borderColor: "#FD3B3B",
              borderWidth: 2,
              tension: 0.3,
              pointBackgroundColor: "#FD3B3B",
              pointBorderColor: "#fff",
              pointBorderWidth: 2,
              pointRadius: 4,
              pointHoverRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: "rgba(0, 0, 0, 0.05)" },
              ticks: {
                callback: function (value) {
                  return "$" + value;
                },
              },
            },
            x: { grid: { display: false } },
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return "$" + context.raw;
                },
              },
            },
          },
        },
      });
    }
  }

  // Initialize Categories Chart
  function initCategoriesChart() {
    const $categoriesChartEl = $("#categoriesChart");
    if ($categoriesChartEl.length) {
      new Chart($categoriesChartEl[0].getContext("2d"), {
        type: "doughnut",
        data: {
          labels: ["Sedan", "SUV", "Luxury", "Sports"],
          datasets: [
            {
              data: [30, 25, 15, 10, 20],
              backgroundColor: [
                "#FD3B3B",
                "#FF9F43",
                "#28A745",
                "#0D6EFD",
                "#6C757D",
              ],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              labels: { padding: 20, boxWidth: 12 },
            },
          },
          cutout: "70%",
        },
      });
    }
  }

  // Initialize Bookings Chart
  function initBookingsChart() {
    const $bookingsChartEl = $("#bookingsChart");
    if ($bookingsChartEl.length) {
      new Chart($bookingsChartEl[0].getContext("2d"), {
        type: "bar",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Bookings",
              data: [65, 85, 75, 90, 120, 110, 130, 150, 140, 160, 170, 190],
              backgroundColor: "#FD3B3B",
              borderRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { beginAtZero: true, grid: { color: "rgba(0, 0, 0, 0.05)" } },
            x: { grid: { display: false } },
          },
          plugins: { legend: { display: false } },
        },
      });
    }
  }

  // Initialize User Growth Chart
  function initUserGrowthChart() {
    const $userGrowthChartEl = $("#userGrowthChart");
    if ($userGrowthChartEl.length) {
      new Chart($userGrowthChartEl[0].getContext("2d"), {
        type: "line",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "New Users",
              data: [20, 25, 30, 35, 40, 50, 55, 60, 65, 70, 75, 80],
              backgroundColor: "rgba(13, 110, 253, 0.1)",
              borderColor: "#0D6EFD",
              borderWidth: 2,
              tension: 0.3,
              pointBackgroundColor: "#0D6EFD",
              pointBorderColor: "#fff",
              pointBorderWidth: 2,
              pointRadius: 4,
              pointHoverRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { beginAtZero: true, grid: { color: "rgba(0, 0, 0, 0.05)" } },
            x: { grid: { display: false } },
          },
          plugins: { legend: { display: false } },
        },
      });
    }
  }

  // Update charts based on selected time period
  function updateCharts(period) {
    const revenueChart = Chart.getChart("revenueChart");
    const categoriesChart = Chart.getChart("categoriesChart");
    const bookingsChart = Chart.getChart("bookingsChart");
    const userGrowthChart = Chart.getChart("userGrowthChart");

    // Update Revenue Chart
    if (revenueChart) {
      const revenueData = {
        Today: {
          labels: [
            "00:00",
            "03:00",
            "06:00",
            "09:00",
            "12:00",
            "15:00",
            "18:00",
            "21:00",
          ],
          data: [50, 80, 120, 180, 250, 300, 280, 200],
        },
        Week: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          data: [800, 1200, 950, 1300, 1500, 1800, 1400],
        },
        Month: {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          data: [5000, 6200, 7500, 5800],
        },
        Year: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          data: [
            5000, 8000, 7000, 9000, 11000, 10000, 12000, 14000, 13000, 15000,
            16000, 18000,
          ],
        },
      };

      const data = revenueData[period] || revenueData["Week"];
      revenueChart.data.labels = data.labels;
      revenueChart.data.datasets[0].data = data.data;
      revenueChart.update();
    }

    // Update Categories Chart
    if (categoriesChart) {
      const categoriesData = {
        Today: [15, 25, 20, 10, 30],
        Week: [30, 25, 15, 10, 20],
        Month: [25, 30, 20, 15, 10],
        Year: [20, 25, 15, 20, 20],
      };

      const data = categoriesData[period] || categoriesData["Week"];
      categoriesChart.data.datasets[0].data = data;
      categoriesChart.update();
    }

    // Update Bookings Chart
    if (bookingsChart) {
      const bookingsData = {
        Today: [5, 8, 12, 15, 20, 18, 16, 10],
        Week: [25, 30, 28, 35, 40, 38, 32],
        Month: [100, 120, 140, 130],
        Year: [65, 85, 75, 90, 120, 110, 130, 150, 140, 160, 170, 190],
      };

      const data = bookingsData[period] || bookingsData["Week"];
      const labels = getLabelsForPeriod(period);
      bookingsChart.data.labels = labels;
      bookingsChart.data.datasets[0].data = data;
      bookingsChart.update();
    }

    // Update User Growth Chart
    if (userGrowthChart) {
      const userGrowthData = {
        Today: [2, 3, 4, 5, 7, 8, 6, 4],
        Week: [5, 8, 10, 12, 15, 18, 14],
        Month: [20, 25, 30, 35],
        Year: [20, 25, 30, 35, 40, 50, 55, 60, 65, 70, 75, 80],
      };

      const data = userGrowthData[period] || userGrowthData["Week"];
      const labels = getLabelsForPeriod(period);
      userGrowthChart.data.labels = labels;
      userGrowthChart.data.datasets[0].data = data;
      userGrowthChart.update();
    }
  }

  // Helper function to get labels based on period
  function getLabelsForPeriod(period) {
    switch (period) {
      case "Today":
        return [
          "00:00",
          "03:00",
          "06:00",
          "09:00",
          "12:00",
          "15:00",
          "18:00",
          "21:00",
        ];
      case "Week":
        return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      case "Month":
        return ["Week 1", "Week 2", "Week 3", "Week 4"];
      case "Year":
      default:
        return [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
    }
  }
});
