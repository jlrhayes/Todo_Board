import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

/**
 * A NavBar component that send the user back to the home page when they 
 * click on the home icon.
 * @returns {element} An element
 */
function NavBar() {
  const links = [{ icon: HomeIcon, slug: "/" }];
  return (
    <div className="bg-white w-full object-top-right">
      <span className="flex flex-row">
        {links.map((obj, index) => {
          return (
            <span key={index} className="px-3 py-2 m-1">
              <Link to={obj.slug}>
                <obj.icon fontSize="medium" />
              </Link>
            </span>
          );
        })}
      </span>
    </div>
  );
}

export default NavBar;
