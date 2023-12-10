import { NavLink } from "react-router-dom";

export default function Navbar() {
  
  return (
      <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <p style={{ minWidth: 100 }}>
            <NavLink to="/">HOME</NavLink>
        </p>
        <p style={{ minWidth: 100 }}>
            <NavLink to="/bmi">BMI</NavLink>
        </p>
      </div>
      
  );
}
