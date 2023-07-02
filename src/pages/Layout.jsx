import {Outlet, Link, NavLink} from 'react-router-dom';

function Layout(props) {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service/3">Service</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home3">Home 3</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
      
    );
}

export default Layout;