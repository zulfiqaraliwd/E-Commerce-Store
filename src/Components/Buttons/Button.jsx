import React from 'react'

function Button() {
const btn = {
  background: "linear-gradient(135deg, #ff7a18, #ffb347)",
  color: "white",
  padding: "10px 18px",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  fontWeight: "600"
}

    
  return (
    <div>
      <button style={btn}> Shop now</button>
    </div>
  )
}

export default Button
