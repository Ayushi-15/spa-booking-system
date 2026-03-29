import { useState } from "react";
import { Avatar } from "antd";
import { BellFilled } from "@ant-design/icons";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = ["Home", "Therapists","Sales","Clients","Transactions","Reports"];

  return (
    <div
      style={{
        width: "100%",
        background: "#3C2212",
        backdropFilter: "blur(14px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ color: "#fff", fontWeight: "bold" }}>
        LOGO
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px", // space between tabs & icons
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                cursor: "pointer",
                fontSize: "14px",
                color: activeTab === tab ? "#E7AD1B" : "#fff",
                fontWeight: activeTab === tab ? "600" : "400",
              }}
            >
              {tab}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <BellFilled
            style={{
              fontSize: "18px",
              color: "#fff",
              cursor: "pointer",
            }}
          />
          <Avatar
            style={{
              backgroundColor: "#E7AD1B",
              color: "#000",
              cursor: "pointer",
              width:"24px",
              height:"24px"
            }}
          >
            A
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;