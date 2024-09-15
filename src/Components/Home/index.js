import { Link } from 'react-router-dom';
import './index.css';
import { FaRegBookmark } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";

const Home = () => (
<div className='home-container'>
    <h1 className='welcome-heading'>Welcome <br/>to jobs App</h1>
  <nav className="bottom-nav">
    <Link to="/jobs" className="nav-link"><FaMailBulk className='icon'/> Jobs</Link>
    <Link to="/bookmarks" className="nav-link"><FaRegBookmark className='icon'/> Bookmarks</Link>
  </nav>
</div>
);

export default Home;
