import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

const MainMenu = () => {
  const menuItems = [
    {
      id: 1,
      title: "Home",
      link: "/home",
    },
    {
      id: 2,
      title: "About Us",
      link: "/about",
    },
    {
      id: 3,
      title: "Services",
      link: "/services",
    },
    {
      id: 4,
      title: "Contact",
      link: "/contact",
    },
    {
      id: 5,
      title: "Blog",
      link: "/blog",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (event) => {
    event.preventDefault(); // Prevent the default behavior of the link
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#1D2B53] py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-[20%]">
          <Link to={'/'} className="text-4xl font-roboto font-bold">
            DevMotion
          </Link>
        </div>
        <div className="w-[80%]">
            <div className=" lg:hidden cursor-pointer flex justify-end" 
            onClick={toggleMobileMenu}
            >
            <IoIosMenu className="font-bold text-white text-4xl" />
            </div>
            {/* dextop menu */}
            <ul className="hidden lg:flex  justify-end gap-5 "> 
                {
                   menuItems.map((item)=><li key={item.id} className="text-white text-lg font-semibold font-roboto hover:text-black" ><Link to={item.link}>{item.title}</Link></li>) 
                }
            </ul>
            {/* for mobile device */}
            {
                isMobileMenuOpen&&(
                    <ul className="lg:hidden flex flex-col justify-end items-end  absolute bg-[#1D2B53] top-16 w-60 p-5 right-0 bg-">
                        {
                          menuItems.map((item)=><li className=" mx-auto" key={item.id}>
                            <Link  onClick={toggleMobileMenu} to={item.link} className=" text-white font-semibold text-lg">{item.title}  </Link>
                          </li>) 
                        }
                    </ul>
                )
            }
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;




const Hero = () => {
  return (
      <div className="bg-indigo-700 flex justify-around items-center p-10
       pr-10 pl-10  pt-10 pb-10 text-white">
          <div className="w-[30%] ">
              <p className="text-4xl mb-5 text-slate-300">I'm</p>
              <h1 className="text-4xl "> Ismam mahdi</h1>
              <hr className="w-[30%]" />
              <p className="w-[30%] ">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
          </div>
          <div className="w-[30%]">2</div>
          <div className="w-[30%]">3</div>
      </div>
  );
};

export default Hero;

import img from "../assets/ismam.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaVanShuttle } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="py-10 bg-indigo-500 ">
        <div className="container mx-auto flex item-center justify-around  ">
            <div className="w-[31%] text-white">
                <p className="text-4xl text-white mb-5">I am</p>
                <h1 className="text-4xl ">Ismam Mahdi</h1>
                <hr />
                <p className=" mt-10 text-xl text-slate-300 font-roboto">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum 
                    may be used as a placeholder before final copy is available</p>

            </div>
            <div className="w-[31%] flex items-center justify-center">
                <img className="rounded-full w-[350px] h-[350px] object-cover border-4 border-orange-500" src={img} alt="" />
                
            </div> 
            <div className="w-[31%] flex items-center text-white">
                <div><p className=" text-4xl mb-4">About me</p>
                <p className="text-slate-300">
                    Lets build quality in programming and design
                    with our services
                </p>
                <button className="bg-white text-indigo-500 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white"> Show more....</button>
                <div className="flex gap-5 mt-5 cursor-pointer ">
                <FaFacebook className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                <FaInstagramSquare  className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                <FaTwitter  className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                <FaVanShuttle  className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                </div>
                </div>
                
            </div>
            
        </div>
        </div>
    );
};

export default Hero;
import img from "../assets/ismam.jpg";
import { FaFacebook, FaInstagramSquare, FaTwitter, FaVanShuttle } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="py-10 bg-indigo-500">
      <div className="container mx-auto flex flex-col items-center justify-around">
        <div className="w-full text-center text-white mb-5">
          <p className="text-4xl mb-2">I am</p>
          <h1 className="text-4xl">Ismam Mahdi</h1>
          <hr className="mt-3 mb-5" />
          <p className="text-xl text-slate-300 font-roboto">
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual
            form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a
            placeholder before final copy is available
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <img
            className="rounded-full w-2/3 md:w-[350px] h-[350px] object-cover border-4 border-orange-500"
            src={img}
            alt=""
          />
        </div>
        <div className="w-full flex flex-col items-center text-white mt-5">
          <div>
            <p className="text-4xl mb-4">About me</p>
            <p className="text-slate-300">
              Lets build quality in programming and design with our services
            </p>
            <button className="bg-white text-indigo-500 px-6 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white">
              Show more....
            </button>
          </div>
          <div className="flex gap-5 mt-5 cursor-pointer">
            <FaFacebook className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
            <FaInstagramSquare className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
            <FaTwitter className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
            <FaVanShuttle className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



import img from "../assets/ismam.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaVanShuttle } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="py-10 bg-indigo-500 ">
        <div className="container mx-auto flex item-center justify-around lg:flex-row sm:flex-col md:flex-row">
            <div className="w-[31%] text-white">
                <p className="text-4xl text-white mb-5">I am</p>
                <h1 className="text-4xl ">Ismam Mahdi</h1>
                <hr />
                <p className=" mt-10 text-xl text-slate-300 font-roboto">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum 
                    may be used as a placeholder before final copy is available</p>

            </div>
            <div className="w-[31%] flex items-center justify-center">
                <img className="rounded-full w-[350px] h-[350px] object-cover border-4 border-orange-500" src={img} alt="" />
                
            </div> 
            <div className="w-[31%] flex items-center text-white">
                <div><p className=" text-4xl mb-4">About me</p>
                <p className="text-slate-300">
                    Lets build quality in programming and design
                    with our services
                </p>
                <button className="bg-white text-indigo-500 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white"> Show more....</button>
                <div className="flex gap-5 mt-5 cursor-pointer ">
                <FaFacebook className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                <FaInstagramSquare  className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                <FaTwitter  className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                <FaVanShuttle  className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                </div>
                </div>
                
            </div>
            
        </div>
        </div>
    );
};

export default Hero;


import img from "../assets/ismam.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaVanShuttle } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="py-10 bg-indigo-500 ">
        <div className="container mx-auto flex item-center justify-around lg:flex-row sm:flex-col md:flex-row">
            <div className="w-[31%] text-white">
                <p className="text-4xl text-white mb-5">I am</p>
                <h1 className="text-4xl ">Ismam Mahdi</h1>
                <hr />
                <p className=" sm:w-full mt-10 text-xl text-slate-300 font-roboto">In publishing and graphic design,
                 Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum 
                    may be used as a placeholder before final copy is available</p>

            </div>
            <div className="w-[31%] flex items-center justify-center">
                <img className="rounded-full w-[350px] h-[350px] object-cover border-4 border-orange-500" src={img} alt="" />
                
            </div> 
            <div className="w-[31%] flex items-center text-white">
                <div><p className=" text-4xl mb-4">About me</p>
                <p className="text-slate-300">
                    Lets build quality in programming and design
                    with our services
                </p>
                <button className="bg-white text-indigo-500 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white"> Show more....</button>
                <div className="flex gap-5 mt-5 cursor-pointer ">
                <FaFacebook className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                <FaInstagramSquare  className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                <FaTwitter  className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                <FaVanShuttle  className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                </div>
                </div>
                
            </div>
            
        </div>
        </div>
    );
};

export default Hero;


import img from "../assets/ismam.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaVanShuttle } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="py-10 bg-indigo-500 ">
        <div className="container mx-auto flex item-center justify-around lg:flex-row sm:flex-col md:flex-row">
            <div className="w-[31%] text-white">
                <p className="text-4xl text-white mb-5">I am</p>
                <h1 className="text-4xl ">Ismam Mahdi</h1>
                <hr />
                <p className=" sm:w-full mt-10 text-xl text-slate-300 font-roboto">In publishing and graphic design,
                 Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum 
                    may be used as a placeholder before final copy is available</p>

            </div>
            <div className="w-[31%] flex items-center justify-center">
                <img className="rounded-full w-[350px] h-[350px] object-cover border-4 border-orange-500" src={img} alt="" />
                
            </div> 
            <div className="w-[31%] flex items-center text-white">
                <div><p className=" text-4xl mb-4">About me</p>
                <p className="text-slate-300">
                    Lets build quality in programming and design
                    with our services
                </p>
                <button className="bg-white text-indigo-500 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white"> Show more....</button>
                <div className="flex gap-5 mt-5 cursor-pointer ">
                <FaFacebook className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                <FaInstagramSquare  className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                <FaTwitter  className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                <FaVanShuttle  className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                </div>
                </div>
                
            </div>
            
        </div>
        </div>
    );
};

export default Hero;

import img from "../assets/ismam.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaVanShuttle } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="py-10 bg-indigo-500 ">
        <div className="container mx-auto flex item-center justify-around lg:flex-row sm:flex-col md:flex-row">
            <div className="w-[31%] text-white">
                <p className="text-4xl text-white mb-5">I am</p>
                <h1 className="text-4xl ">Ismam Mahdi</h1>
                <hr />
                <p className=" sm:w-full mt-10 text-xl text-slate-300 font-roboto">In publishing and graphic design,
                 Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum 
                    may be used as a placeholder before final copy is available</p>

            </div>
            <div className="w-[31%] flex items-center justify-center">
                <img className="rounded-full w-[350px] h-[350px] object-cover border-4 border-orange-500" src={img} alt="" />
                
            </div> 
            <div className="w-[31%] flex items-center text-white">
                <div><p className=" text-4xl mb-4">About me</p>
                <p className="text-slate-300">
                    Lets build quality in programming and design
                    with our services
                </p>
                <button className="bg-white text-indigo-500 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white"> Show more....</button>
                <div className="flex gap-5 mt-5 cursor-pointer ">
                <FaFacebook className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                <FaInstagramSquare  className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                <FaTwitter  className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                <FaVanShuttle  className="text-4xl border-4 hover:border-indigo-800 rounded-full" />
                </div>
                </div>
                
            </div>
            
        </div>
        </div>
    );
};

export default Hero;