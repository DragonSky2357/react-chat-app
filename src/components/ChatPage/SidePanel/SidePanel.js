import React from "react";
import UserPanel from "./UserPanle";
import Favorited from "./Favorited";
import ChatRooms from "./ChatRooms";
import DirectMessage from "./DirectMessage";

function SidePanel() {
  return (
    <div
      style={{
        background: "#7B83EB",
        padding: "2rem",
        minHeight: "100vh",
        color: "white",
        minWidth: "275px",
      }}
    >
      <UserPanel />
      <Favorited />
      <ChatRooms />
      <DirectMessage />
    </div>
  );
}

export default SidePanel;
