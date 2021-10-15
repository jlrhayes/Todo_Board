import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ModalComponent from "./ModalComponent";
import "./Add.css";

function logout() {
  //Delete token
  localStorage.removeItem("token");
  //Redirect to login page
  document.location.href = "/login";
}

async function deleteUser() {
  //Call delete user endpoint
  const id = localStorage.getItem("token");
  const requestOptions = { method: "DELETE" };
  await fetch(`http://localhost:4000/users/${id}`, requestOptions);
  //Delete token
  localStorage.removeItem("token");
  //Redirect to login page
  document.location.href = "/login";
}

function redirectToRegister() {
  document.location.href = "/register";
}

function redirectToLogin() {
  document.location.href = "/login";
}

/**
 * A NavBar component that send the user back to the home page when they 
 * click on the home icon.
 * @returns {element} An element
 */
function NavBar() {
  const links = [{ icon: HomeIcon, slug: "/" }];
  const token = localStorage.getItem("token");
  const path = window.location.pathname;
  return (
    <div className="bg-white w-full object-top-right">
      <span className="flex flex-row justify-between">
        {links.map((obj, index) => {
          return (
            <span key={index} className="px-3 py-2 m-1">
              <Link to={obj.slug}>
                <obj.icon fontSize="medium" />
              </Link>
            </span>
          );
        })}
        <span>
          {path === "/login" && (
            <button className="px-3 py-2 m-1" onClick={redirectToRegister}>
              Register
            </button>
          )}
          {path === "/register" && (
            <button className="px-3 py-2 m-1" onClick={redirectToLogin}>
              Login
            </button>
          )}
          {token && (
            <button className="px-3 py-2 m-1" onClick={logout}>
              Logout
            </button>
          )}
          {token && (
            <button className="px-3 py-2 m-1" onClick={deleteUser}>
              Delete User
            </button>
          )}
        </span>
      </span>
    </div>
  );
}

export default NavBar;
