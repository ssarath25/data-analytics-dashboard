import React from "react";
import { CSVLink } from "react-csv";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 18000, 15000, 25000, 30000, 40000],
        borderColor: "blue",
      },
    ],
  };

  const salesData = {
    labels: ["Electronics", "Books", "Clothing", "Others"],
    datasets: [
      {
        label: "Sales",
        data: [40, 15, 25, 20],
        backgroundColor: [
          "#4CAF50",
          "#2196F3",
          "#FFC107",
          "#F44336",
        ],
      },
    ],
  };

  const transactions = [
    {
      customer: "Rahul",
      amount: 2500,
      date: "12-06-2026",
    },
    {
      customer: "Priya",
      amount: 1800,
      date: "13-06-2026",
    },
    {
      customer: "Karthik",
      amount: 3200,
      date: "14-06-2026",
    },
  ];

  const cards = [
    {
      title: "Revenue",
      value: "₹1,25,000",
    },
    {
      title: "Orders",
      value: "450",
    },
    {
      title: "Customers",
      value: "180",
    },
    {
      title: "Growth",
      value: "+12%",
    },
  ];

  return (
    <div
      style={{
        padding: "30px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1>Data Analytics & BI Dashboard</h1>

      {/* KPI Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "200px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{card.title}</h3>
            <h2>{card.value}</h2>
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <div
        style={{
          background: "white",
          padding: "20px",
          marginTop: "30px",
          borderRadius: "10px",
        }}
      >
        <h2>Revenue Trend</h2>
        <Line data={revenueData} />
      </div>

      {/* Sales Chart */}
      <div
        style={{
          background: "white",
          padding: "20px",
          marginTop: "30px",
          borderRadius: "10px",
        }}
      >
        <h2>Sales By Category</h2>
        <Bar data={salesData} />
      </div>

      {/* Transactions */}
      <div
        style={{
          background: "white",
          padding: "20px",
          marginTop: "30px",
          borderRadius: "10px",
        }}
      >
        <h2>Recent Transactions</h2>

        <CSVLink
          data={transactions}
          filename={"transactions.csv"}
          style={{
            padding: "10px",
            background: "#2196F3",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Export CSV
        </CSVLink>

        <table
          border="1"
          cellPadding="10"
          style={{
            width: "100%",
            marginTop: "20px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>Customer</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((item, index) => (
              <tr key={index}>
                <td>{item.customer}</td>
                <td>₹{item.amount}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: "20px" }}>
          <input type="file" accept=".csv" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;