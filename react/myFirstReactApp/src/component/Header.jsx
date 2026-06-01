import { Link } from "react-router-dom"

function Header(){
    return <div className=" bg-body-tertiary d-flex justify-content-between align-items-center">

<span className="  fs-4 fw-bold">My company</span>
<div className=" d-flex gap-4">
 <Link to={}> Home</Link>
 <Link> About</Link>
 <Link> <Products></Products></Link>
 <Link> Contact</Link>
<span> Home</span>
<span> About</span>
<span>Products</span>
<span> Contact us</span>
</div>
<div className=" d-flex gap-2">
<button className=" btn btn-outline-success ">login</button>
<button className=" btn btn-success"> Register</button>
</div>

    </div>
}
export default Header