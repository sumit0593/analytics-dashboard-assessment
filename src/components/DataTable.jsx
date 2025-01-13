import React, { useState } from "react";

const DataTable = ({ data,isSelected }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); 
  const pageSize = 10;
  const filteredData = data.filter((item) =>
  (item.Make || "").toLowerCase().includes(searchQuery.toLowerCase())
);

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); 
  };

  return (
    <div style={{ marginTop: "4rem" }}>
      <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
      {isSelected?`Details Reports`:``}
      </h3>

      {/* Search Bar */}
      {isSelected &&
      <div style={{ marginBottom: "1rem", textAlign: "center" }}>
        <input
        className="input_srch"
          type="text"
          placeholder="Search by Componey..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            width: "50%",
            border: "1px solid #ddd",
            borderRadius: "20px",
          }}
        />
      </div>}

      {/* Data Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.9rem",
        }}
      >
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Componey</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Model</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Year</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Electric Vehicle Type
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
            Range (km)
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr
              key={index}
              style={{ background: index % 2 === 0 ? "#f9f9f9" : "#fff" }}
            >
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {item?.Make??''}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {item?.Model??''}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {item["Model Year"]??''}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {item["Electric Vehicle Type"]??''}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {item["Electric Range"]??''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            padding: "0.5rem 1rem",
            marginRight: "1rem",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
          }}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            padding: "0.5rem 1rem",
            marginLeft: "1rem",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
