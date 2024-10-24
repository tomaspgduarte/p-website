import React, { useState } from "react";
import { useTheme } from "@mui/material";

function EventCard({ title, image }) {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    margin: "4%",
    width: "12%",
    height: "150px",
    borderRadius: "20px",
    transition: "transform 0.3s ease-in-out",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    overflow: "hidden",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: "20px 20px 0 0",
          textAlign: "center",
          color: "white",
        }}
      >
        <p style={{ padding: "0.5rem" }}>{title}</p>
      </div>
      <img
        style={{
          objectFit: "contain",
          width: "100%",
          borderRadius: "0 0 20px 20px",
        }}
        src={image}
        alt={title}
      />
    </div>
  );
}

export default EventCard;
