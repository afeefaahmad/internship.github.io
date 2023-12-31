import React from "react";
//import: to import from external module
//React: name of module/package that we will import
//'react': souce of module from where are you importimg react library(package installed )

const Header = () => {
  return (
    <>
      <nav className="navbar row sticky-top">
        {/* logo */}
        <div className="col-12 col-md-3">
          <img src="/images/logo.webp" className='logo' alt="logo" ></img>
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

{/* Login */}
<div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
<button className="btn" id="login_btn">
  Login
</button>
<span className="ml-3" id="cart">
  Cart{" "}
</span>
{/* margin-left 3units from left  :Bootstarp  */}
<span className="ml-1" id="cart_count">
  2
</span>
</div>
      </nav>
    </>
  );
};


export default Header;


