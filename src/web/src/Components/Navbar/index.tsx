import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = "underline text-gray-500 underline-offset-4";

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-md font-light top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">Scheming Wizard</NavLink>
                </li>
                <li>
                    <NavLink to="/" className={isActive => (isActive ? activeStyle : undefined)}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={isActive => (isActive ? activeStyle : undefined)}>
                        MotherBoards
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/categories" className={isActive => (isActive ? activeStyle : undefined)}>
                        Monitors
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/graphics-cards" className={isActive => (isActive ? activeStyle : undefined)}>
                        Graphics Cards
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cpus" className={isActive => (isActive ? activeStyle : undefined)}>
                        CPUs
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/ram" className={isActive => (isActive ? activeStyle : undefined)}>
                        RAM
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clearance" className={isActive => (isActive ? activeStyle : undefined)}>
                        Clearance
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;