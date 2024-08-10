import './components.css';
import tech from "../assets/assest";
import Lottie from "lottie-react";

export default function Header(){
    return(
        <div className='header flex   lg:p-2 w-screen h-screen'>
            <div className=" relative   flex flex-col lg:flex-row   items-center ">
                <div className='mt-60 lg:mt-1 lg:ml-8'>
                    <h2 className="text-center text-white text-sm lg:text-2xl">
                        we are
                    </h2>
                    <h1 className="text-center text-teal-500 text-5xl lg:text-9xl font-bigfont">
                        CREATIVE DIGITAL COMPANY
                    </h1>
                    <h1 className="text-center text-white text-5xl lg:text-9xl font-bigfont">
                        ROYALTY IS OUR
                    </h1>
                    <h2 className="text-center font-title text-teal-500 text-2xl lg:text-5xl">
                        CAMPAIGN
                    </h2>
                    
                </div>
                <Lottie animationData={tech} loop={true} className=' w-96 h-96' />;
                

            </div>

        </div>
    )
}