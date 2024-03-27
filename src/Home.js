import React from "react";
import Navbar from "./Navbar";
function Home() {
  return (
    <div>
        <Navbar/>
    <div className="container">
      <nav style={navbarStyle}>
        <ul style={navListStyle}>
          <li style={listItemStyle}>
            <div style={contentContainerStyle}> {/* Container to align Service 1 and button */}
              <span>Service 1</span>
              <span style={statusStyle}>
  Status 
  <span style={{ color: "white" }}>:</span>
  Running
</span>
              <button style={buttonStyle}>
                View
              </button>

            </div>
          </li>
        
          {/* Add more services as needed */}
        </ul>
      </nav>
    </div>
    </div>
  );
}

const navbarStyle = {
  backgroundColor: '#3296F5',
  padding: '10px 20px',
};

const navListStyle = {
  listStyleType: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 0,
  padding: 0,
};

const listItemStyle = {
  marginRight: '20px', // Adjust the space between items if needed
};

const contentContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const buttonStyle = {
  backgroundColor: '#fff', // Background color of the button
  border: 'none',
  cursor: 'pointer',
  padding: '5px 10px',
  borderRadius: '5px',
  marginLeft:'400px',
};
const statusStyle={
    marginLeft:'600px',
}
export default Home;
