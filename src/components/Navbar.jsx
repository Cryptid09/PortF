import { NavLink } from 'react-router-dom';

  function Navbar() {
    return (
      <nav className=" p-4">
        <ul className="flex justify-center space-x-8 ">
          <li><NavLink exact to="/" className="nav-link hover:text-green-500">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link hover:text-green-500">About</NavLink></li>
          <li><NavLink to="/education" className="nav-link hover:text-green-500">Education</NavLink></li>
          <li><NavLink to="/projects" className="nav-link hover:text-green-500">Projects</NavLink></li>
          <li><NavLink to="/skills" className="nav-link hover:text-green-500">Skills</NavLink></li>
          <li><NavLink to="/resume" className="nav-link hover:text-green-500">Resume</NavLink></li>
          <li><NavLink to="/contact" className="nav-link hover:text-green-500">Contact</NavLink></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
   