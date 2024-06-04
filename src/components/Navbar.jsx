import { NavLink , useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

  function Navbar() {
    const [vsb, setvsb] = useState(true);
    const appear = () => {setvsb(!vsb); };
    const home = location.pathname ==='/';
    return (
      <nav className="text-xl absolute z-20 md:relative pt-4 pb-4 ">
        <div className='md:hidden block'><MenuIcon className={`${vsb ? 'block' : 'invisible'}`} onClick={appear} />
        <CloseIcon className={`${vsb ? 'invisible' : 'block'}`} onClick={appear} /></div>
        <ul className={`grid md:flex ${home?'' : 'justify-center'} space-x-10 ${vsb ? 'hidden' : 'block '}`}>
        
          <li><NavLink exact to="/" className="nav-link hover:text-green-500 ">Home</NavLink></li>
          <li><NavLink to="/education" className="nav-link hover:text-green-500">Education</NavLink></li>
          <li><NavLink to="/Lawsuits" className="nav-link hover:text-green-500">Lawsuits</NavLink></li>
          <li><NavLink to="/skills" className="nav-link hover:text-green-500">Skills</NavLink></li>
          <li><NavLink to="/contact" className="nav-link hover:text-green-500">Contact</NavLink></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
   