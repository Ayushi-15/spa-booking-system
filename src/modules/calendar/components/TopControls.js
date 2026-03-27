const TopControls = () => {
  return (
    <div style={{ padding: "10px 20px", borderBottom: "1px solid #ddd" }}>
      <input
        type="text"
        placeholder="Search Sales by phone/name" //search
        style={{ padding: "8px", width: "250px" }}
      />
      <button style={{ marginLeft: "10px" }}>Filter</button>
      <button style={{ marginLeft: "10px" }}>Today</button>
    </div>
  );
};

export default TopControls;