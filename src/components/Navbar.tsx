import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex w-full justify-between px-10 py-5 text-2xl border-b-2 border-slate-900 shadow-md ">
        <div>Purse</div>
        <div className="flex gap-10 ">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/cart">
              <BsCart3 />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
