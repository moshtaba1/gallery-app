import React, { useState } from "react";
import "./Sidebar.css";

export default function Sidebar({ setSubject }) {
  const MenuItems = [
    { id: 1, title: "nature" },
    { id: 2, title: "sport" },
    { id: 3, title: "art" },
    { id: 4, title: "animals" },
    { id: 5, title: "music" },
    { id: 6, title: "cars" },
  ];

  const [isSubjectActive, setIsSubjectActive] = useState();

  const handleSubjectChange = (id, title) => {
    setIsSubjectActive(id);
    setSubject(title);
  };

  return (
    <div className="side-container">
      {MenuItems.map((data) => (
        <div
          key={data.id}
          id={data.id}
          onClick={() => handleSubjectChange(data.id, data.title)}
          className={`menu-item ${isSubjectActive === data.id ? "active" : ""}`}
        >
          {data.title}
        </div>
      ))}
    </div>
  );
}
