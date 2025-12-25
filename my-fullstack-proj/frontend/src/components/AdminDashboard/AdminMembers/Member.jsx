import React from "react";

// Example icons using emoji. Replace with your icon library if needed.
const SearchIcon = ({ color = "black" }) => (
  <span style={{ fontSize: 22, color, marginRight: 8 }}>🔍</span>
);
const DeleteIcon = () => (
  <span style={{ fontSize: 22, color: "#222" }}>🗑️</span>
);
const ApproveIcon = () => (
  <span style={{ fontSize: 22, color: "green" }}>✅</span>
);
const RejectIcon = () => (
  <span style={{ fontSize: 22, color: "red" }}>❌</span>
);

const Member = ({
  name,
  onView,
  onDelete,
  onApprove,
  onReject,
  showActions = false, // If true, show approve/reject (applicants)
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      background: "#f5f5f5",
      borderRadius: 8,
      padding: "16px 20px",
      marginBottom: 12,
      boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
      justifyContent: "space-between",
    }}
  >
    <span style={{ fontWeight: 600, color: "#0a2259", fontSize: 22 }}>
      {name}
    </span>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <button onClick={onView} style={{ background: "none", border: "none" }}>
        <SearchIcon color={showActions ? "#f7c948" : "#222"} />
      </button>
      {showActions && (
        <>
          <button
            onClick={onApprove}
            style={{
              background: "none",
              border: "none",
              marginLeft: 4,
              marginRight: 4,
            }}
          >
            <ApproveIcon />
          </button>
          <button
            onClick={onReject}
            style={{
              background: "none",
              border: "none",
              marginLeft: 4,
              marginRight: 4,
            }}
          >
            <RejectIcon />
          </button>
        </>
      )}
      <button onClick={onDelete} style={{ background: "none", border: "none" }}>
        <DeleteIcon />
      </button>
    </div>
  </div>
);

export default Member;
