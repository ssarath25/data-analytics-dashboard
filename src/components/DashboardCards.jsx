import React from "react";

function DashboardCards() {
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
            background: "#ffffff",
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
  );
}

export default DashboardCards;