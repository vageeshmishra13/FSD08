import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" bg-body-tertiary d-flex justify-content-between align-items-center">
      <span className="  fs-4 fw-bold">My company</span>
      <div className=" d-flex gap-4">
        <Link to={"/"}> Home</Link>
        <Link to={"/about"}> About</Link>
        <Link to={"/product"}> Products</Link>
        <Link to={"/contect"}> Contact</Link>
        <span> Home</span>
        <span> About</span>
        <span>Products</span>
        <span> Contact us</span>
      </div>
      <div className=" d-flex gap-2">
        <Link to={"/login"}>
        
          <button className=" btn btn-outline-success ">login</button>
        </Link>
        <Link to={"/register"}>
          <button className=" btn btn-success"> Register</button>
        </Link>
      </div>
    </div>
  );
}
export default Header;
