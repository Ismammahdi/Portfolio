
import img from "../assets/ismam.jpg"

const Hero2 = () => {
    return (
       <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row sm:flex-col sm:space-y-10'>
        <div className='lg:w-1/3 sm:w-fit'>
            <p className='text-4xl mb-5'>I'm</p>
            <h1 className='text-6xl'>Ismam Mahdi</h1>
            <hr />
            <p className='mt-10 font-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus est consectetur facere 
                nesciunt eaque adipisci consequuntur ipsam officiis nam id?</p>
        </div>
        <div className='w-1/3 items-center sm:w-fit'>
            <img className='w-[250px] h-[250px] rounded-full w-full border-8 border-orange-600' src={img} alt="" />
        </div>
        <div>3</div>
       </section>
    );
};

export default Hero2;