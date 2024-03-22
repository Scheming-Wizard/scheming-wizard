import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = "underline text-gray-500 underline-offset-4";

    return (
      <nav className="flex justify-between items-center fixed
          z-10 w-full py-5 px-8 text-md font-light top-0">
          <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg">
              <NavLink to="/">Scheming-wizard</NavLink>
            </li>
            <li>c
            <NavLink to="/"
                    className={({ isActive }) => (isActive ? activeStyle : undefined)}>
                All
            </NavLink>
            </li>
          </ul>
      </nav>

    )
}



export default Navbar;
