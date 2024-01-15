import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

const MainMenu = () => {
  const menuItems = [
    // {
    //   id: 1,
    //   title: "Home",
    //   link: "/home",
    // },
    // {
    //   id: 2,
    //   title: "About Us",
    //   link: "/about",
    // },
    {
      id: 3,
      title: "Hero",
      link: "/hero",
    },
    {
      id: 4,
      title: "Hero2",
      link: '/hero2',
    },
    {
      id: 5,
      title: "Banner",
      link: "/banner",
    },
    // {
    //   id: 6,
    //   title: "Blog",
    //   link: "/blog",
    // },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#1D2B53] md:py-2 sm:py-2 lg:py-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-[20%]">
          <NavLink to={'/'} className="text-4xl font-roboto font-bold text-white" onClick={() => setIsMobileMenuOpen(false)}>
            DevMotion
          </NavLink>
        </div>
        <div className="w-[80%]">
          {/* Mobile Menu Toggle Button */}
          <div
            className=" lg:hidden md:hidden  cursor-pointer flex justify-end"
            onClick={toggleMobileMenu}
          >
            <IoIosMenu className="font-bold text-white text-4xl" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden  lg:flex md:flex justify-end gap-5">
            {menuItems.map((item) => (
              <li key={item.id} className="text-white text-lg font-semibold font-roboto hover:text-black">
                <NavLink to={item.link} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <ul className="lg:hidden flex flex-col justify-end items-end absolute bg-[#1D2B53] top-16 w-60 p-5 right-0">
              {menuItems.map((item) => (
                <li className="mx-auto" key={item.id}>
                  <NavLink
                    to={item.link}
                    className="text-white font-semibold text-lg"
                    onClick={toggleMobileMenu}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
