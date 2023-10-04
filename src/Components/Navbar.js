import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <div
            className="navbar-brand"
            style={{ fontSize: "40px", marginLeft: "50px" }}
          >
            Tally Counter
          </div>
          <form className="d-flex" style={{width:'600px'}}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
