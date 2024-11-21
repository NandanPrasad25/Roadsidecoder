import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <NavLink
        to="/"
        // className={({ isActive }) => [isActive ? "activeLink" : ""]}
        // style={({isActive}) => {
        //     return {
        //         color: isActive ? "red" : "blue"
        //     }
        // }}
      >
        Home
      </NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </header>
  );
};

export default Header;
