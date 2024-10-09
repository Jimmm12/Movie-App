
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="h-14 lg:h-20 bg-slate-950 flex justify-between text-white items-center px-8">
        <div className="flex items-center gap-4 lg:gap-6">
          <Link to="/">
            <img src="/netflix.png" className="w-16 sm:w-28" />
          </Link>
          <Link to="/search?mediaType=movie" className="lg:text-lg">Movies</Link>
          <Link to="/search?mediaType=tv" className="lg:text-lg">TV series</Link>
        </div>
        <div>
          <Link to="/search">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </header>
    </div >
  )
}
export default Header