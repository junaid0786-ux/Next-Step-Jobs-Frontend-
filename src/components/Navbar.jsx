import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center w-full h-20 gap-20 shadow-lg bg-white">
    <div>
        <img src={logo} alt="Logo" className="w-[180px]" />
    </div>

      <div className="flex gap-8 text-black font-medium justify-between">
        <Link to="/" className="hover:text-blue-700  ">Home</Link>
        <Link to="/about" className="hover:text-blue-700">About</Link>
        <Link to="/jobs" className="hover:text-blue-700">Jobs</Link>
        <Link to="/contact" className="hover:text-blue-700">Contact</Link>
       </div>
       <div className='flex gap-5 rounded text-white '>
        <Link to="/register" className="hover:bg-blue-700 rounded w-24 h-10 flex justify-center items-center bg-blue-500">Register</Link>
        <Link to="/login" className="hover:bg-blue-700 rounded w-24 h-10 flex justify-center items-center bg-blue-500">Login</Link>

       
       </div>
      </div>
    
  );
};

export default Navbar;
