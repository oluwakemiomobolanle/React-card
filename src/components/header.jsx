import images from "./images/images.png";
const Header = ({ section }) => {
  return (
    <header className="header ">
      <nav className="nav h-20 flex bg-blue-600 justify-between items-center pr-2">
        <img className="images h-10 rounded-2xl ml-2" src={images} alt="image" />
        <div className="desktop-navigation  hidden lg:flex">
          <ul className="flex justify-between px-8 gap-5">
            <li className="">Home</li>
            <li className="md:text-amber-800 lg:text-blue-900">About</li>
            <li className="">Faq</li>
          </ul>
          <div className="login gap-">
            <span> Log in {section}</span>{" "}
            <button className="bg-amber-800  hover:bg-blue-900 ">Click</button>
          </div>
        </div>
        <div className="mobile-navigation md:hidden mb:block">
          <div className="hambuger h-5 w-5   flex gap-2 flex-col mr-2">
            <div className="bars h-2 w-5 bg-black"></div>
            <div className="bars h-2 w-5 bg-black"></div>
            <div className="bars h-2 w-5 bg-black "></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
