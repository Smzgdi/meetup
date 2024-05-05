import { Link } from "react-router-dom";
import "./MainNavigation.css"



const MainNavigation = () => {
  return (
    <header className="header">
      <div className="logo2">React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/"> All Meetups </Link>
          </li>
          <li>
            <Link to="/favorites"> Favorites </Link>
          </li>
          <li>
            <Link to="/new-meetup"> My New meetups </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
