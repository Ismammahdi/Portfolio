
import dev1 from "../assets/Location.jpg"
import dev2 from "../assets/phone.jpg"
import dev3 from "../assets/Email.jpg"
import dev4 from "../assets/Earth.webp"
const Testimonial = () => {
    return (
        <div className="flex bg-indigo-800 m-20 sm:flex-col lg:flex-row">
            <div className=" rounded-xl overflow-auto p-8 hover:animate-pulse">
                <div className="overflow-hidden relative max-w-md mx-auto bg-white 
                shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6
                dark:bg-slate-800 dark:highlight-white/5">
                    <img src={dev1} className="absolute -left-6 w-28 h-28 rounded-full " alt="" />
                <div className="min-w-0 py-5 pl-28 pr-5">
                    <div className="text-slate-900 font-medium text-sm sm:text-base truncate 
                    dark:text-slate-200">Address</div>
                    <div className="text-slate-500 font-medium text-sm sm:text-base
                    leading-tight dark:text-slate-400 ">
                       Uttara Dhaka, Post office 1230
                    </div>
                </div>
            
            </div>
            </div>
            <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
                <div className="overflow-hidden relative max-w-md mx-auto bg-white 
                shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6
                dark:bg-slate-800 dark:highlight-white/5">
                    <img src={dev2} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" alt="" />
                <div className="min-w-0 py-5 pl-28 pr-5">
                    <div className="text-slate-900 font-medium text-sm sm:text-base truncate 
                    dark:text-slate-200">Phone Number</div>
                    <div className="text-slate-500 font-medium text-sm sm:text-base
                    leading-tight dark:text-slate-400 ">
                       Robi: 01851684744,
                        <br />
                        Grammin: 01726015764
                    </div>
                </div>
            
            </div>
            </div>
            <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
                <div className="overflow-hidden relative max-w-md mx-auto bg-white 
                shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6
                dark:bg-slate-800 dark:highlight-white/5">
                    <img src={dev3} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" alt="" />
                <div className="min-w-0 py-5 pl-28 pr-5">
                    <div className="text-slate-900 font-medium text-sm sm:text-base truncate 
                    dark:text-slate-200">Email</div>
                    <div className="text-slate-500 font-medium text-sm sm:text-base
                    leading-tight dark:text-slate-400 ">
                        ismammahdi47@gmail.com
                    </div>
                </div>
            
            </div>
            </div>
            <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
                <div className="overflow-hidden relative max-w-md mx-auto bg-white 
                shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6
                dark:bg-slate-800 dark:highlight-white/5">
                    <img src={dev4} className="absolute -left-6 w-28 h-28 rounded-full shadow-lg" alt="" />
                <div className="min-w-0 py-5 pl-28 pr-5">
                    <div className="text-slate-900 font-medium text-sm sm:text-base truncate 
                    dark:text-slate-200">GitHub</div>
                    <div className="text-slate-500 font-medium text-sm sm:text-base
                    leading-tight dark:text-slate-400 ">
                        https://github.com /ismam-mahdi 
                    </div>
                </div>
            
            </div>
            </div>
            </div>
        
    );
};

export default Testimonial;