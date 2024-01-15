import img from "../assets/ismam.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaVanShuttle } from "react-icons/fa6";
import project_1 from "../assets/project_1.avif"
import project2 from "../assets/project2.avif"
import project3 from "../assets/project3.avif"
import project4 from "../assets/project4.avif"
import Testimonial from "./Testimonial";

const Hero = () => {
    return (
        <>
        <div className="py-10 bg-indigo-500 ">
        <div className="container mx-auto flex item-center p-10 justify-around lg:flex-row sm:flex-col space-x-10 sm:space-y-10">
            <div className="lg:w-1/3 sm:w-fit text-white">
                <p className="text-4xl text-white mb-5">I am</p>
                <h1 className="text-4xl ">Ismam Mahdi</h1>
                <hr />
                <p className=" sm:w-full mt-10 text-xl text-slate-300 font-roboto">To secure a challenging Front-End Web Developer position where
                 I can leverage my strong foundation in HTML, CSS, react.js and JavaScript, along with my passion for creating visually appealing and intuitive user interfaces. My goal is to contribute innovative solutions to enhance the user experience and collaborate with a dynamic team in a growth-oriented organization</p>

            </div>
            <div className="w-1/3 items-center sm:w-fit ">
                <div className="flex items-center">
                <img className="rounded-full w-[350px] h-[350px] object-cover border-4 border-orange-500" src={img} alt="" />
                </div>
            </div> 
            <div className="w-1/3 items-center sm:w-fit text-white">
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
        {/* hero ends */}
        {/* projects starts */}
        <div className="py-10 bg-indigo-500">
        <div className="bg-indigo-800 m-20 max-w-full">
          <div className="grid justify-items-center m-10">
           <h1 className="text-4xl text-white mt-10">Services</h1>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4 p-5">
             <div className="max-w-md mx-auto bg-white rounded-xl 
             shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
             <div className="md:flex">
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 
                    font-semibold" >
                        Web-Design
                    </div>
                    <a href="#">Subheading</a>
                    <p className="mt-2 text-slate-500">
                    Web design involves creating the visual layout and aesthetics of a website, focusing on user experience, graphics, and overall look. Front-end development, on the other hand, involves implementing the design into a functional 
                    website using coding languages like HTML, CSS, and javascript
                    </p>

                </div>
                <div className="md:shrink-0 p-5 ">
                    <img className="w-[150px] h-[150px]" src={project2} alt="" />
                </div>
             </div>
             </div>
             <div className="max-w-md mx-auto bg-white rounded-xl 
             shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
             <div className="md:flex">
             <div className="md:shrink-0 p-5 ">
                    <img className="w-[150px] h-[150px]" src={project3} alt="" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 
                    font-semibold" >
                        Frontend
                    </div>
                    <a href="#">Subheading</a>
                    <p className="mt-2 text-slate-500">
                    A Front-End Developer is someone who creates websites and web applications. The difference between Front-End and Back-End is that Front-End refers to how a web page looks, while back-end refers to how it works. You can 
                    think of Front-End as client-side and Back-End as server-side.
                    </p>

                </div>
                
             </div>
             </div>
            </div>
            <hr />
            <div className="grid grid-cols-2 gap-4 p-5">
             <div className="max-w-md mx-auto bg-white rounded-xl 
             shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
             <div className="md:flex">
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 
                    font-semibold" >
                        React Js
                    </div>
                    <a href="#">Subheading</a>
                    <p className="mt-2 text-slate-500">
                    A React developer is responsible for the design and implementation of user interfaces (UIs) and UI components using React, a front-end JavaScript
                     library. They develop and maintain UIs for web and mobile apps.
                    </p>

                </div>
                <div className="md:shrink-0 p-5 ">
                    <img className="w-[150px] h-[150px]" src={project4} alt="" />
                </div>
             </div>
             </div>
             <div className="max-w-md mx-auto bg-white rounded-xl 
             shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
             <div className="md:flex">
             <div className="md:shrink-0 p-5 ">
                    <img className="w-[150px] h-[150px]" src={project_1} alt="" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 
                    font-semibold" >
                        Tailwind CSS
                    </div>
                    <a href="#">Subheading</a>
                    <p className="mt-2 text-slate-500">
                    Tailwind CSS is best used to speed up the development process by writing less code. It comes with a design system that helps maintain consistency across various design requirements like padding, spacing, and so forth; with this, you do not have to worry about creating your design systems
                    </p>

                </div>
                
             </div>
             </div>
            </div>
          </div>
        </div>
        <Testimonial></Testimonial>
        </div>
        </>
        
    );
};

export default Hero;