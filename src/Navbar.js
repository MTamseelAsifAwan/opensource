import React from "react";

function Navbar() {
  return (
    <nav style={navbarStyle}>
      <h1 style={titleStyle}>Object Detection</h1>
    </nav>
  );
}

const navbarStyle = {
  backgroundColor: '#3296F5',
  padding: '10px 20px'
};

const titleStyle = {
  margin: 0,
  color: 'white'
};

export default Navbar;
