import { Link } from "react-router";
import { useAuth } from "../store/useAuth";

function Navbar() {
  const { user, logout } = useAuth((state) => state);

  const logoutHandler = () => {
    logout();
  };

  return (
    <nav className="py-5 bg-[#1c2127]">
      <div className="nav-wrapper flex items-center justify-between max-w-7xl mx-auto">
        <div className="nav-content flex gap-x-25">
          {/* <!-- Logo --> */}
          <div className="nav-logo-links flex items-center gap-x-2">
            <div className="circle-logo bg-amber-600 w-4 h-4 rounded-full"></div>
            <a
              className="title-logo text-white font-secondary text-2xl leading-none"
              href="#"
            >
              Sinemata
            </a>
          </div>

          {/* <!-- Navigation Links --> */}
          <div className="nav-links text-sine-gray flex gap-x-7 items-center font-primary text-sm">
            <Link to="/">Home</Link>
            <Link to="/browse">Browse</Link>
            <Link to="/watchlist">Watchlist</Link>
            <a className="" href="#">
              My Reviews
            </a>
          </div>
        </div>

        <div className="nav-interaction flex items-center gap-x-5.5">
          {/* <!-- Input Search --> */}
          <input
            className="input-search py-2 px-4 bg-[#232831] border-none rounded-lg font-primary text-sm text-sine-gray"
            type="text"
            placeholder="⌕ Search..."
          />

          {/* <!-- Profile photo --> */}
          {!user ? (
            <Link to="/login">
              <span className="font-primary text-amber-600 text-sm font-bold">
                Login
              </span>
            </Link>
          ) : (
            <>
              <button
                popoverTarget="sinemata-popover-1"
                className="profile-photo cursor-pointer flex items-center justify-center w-9 h-9 rounded-full bg-amber-600"
                style={{ anchorName: "--sinemata-anchor-1" }}
              >
                <span className="initials font-primary text-[#14181c] text-sm font-bold">
                  {user.displayName
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </span>
              </button>

              <ul
                className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                popover="auto"
                id="sinemata-popover-1"
                style={
                  {
                    positionAnchor: "--sinemata-anchor-1",
                  } /* as React.CSSProperties */
                }
              >
                <li onClick={logoutHandler}>
                  <span className="font-bold text-red-500">Logout</span>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>

      {/* <!-- Profile photo --> */}
    </nav>
  );
}

export default Navbar;
