import React from "react";
//import: to import from external module
//React: name of module/package that we will import
//'react': souce of module from where are you importimg react library(package installed )

const Header = () => {
  return (
    <>
      <nav className="navbar row">
        {/* logo */}
        <div className="col-12 col-md-3">
          <img src="/images/logo.webp" alt="logo" className="logo"></img>
        </div>

        {/* search bar */}
        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <div className="input-group">
            <input
              type="text"
              id="search_field"
              className="form-control"
              placeholder="Search Your Favourite Restaurant...."
              
            />

            <div className="input-group-append">
              <button id="search_btn" className="btn">
              <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>

          </div>
        </div>

      </nav>
    </>
  );
};

export default Header;
