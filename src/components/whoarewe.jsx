
import { Button, Card } from "flowbite-react";
import tech from "../assets/assest";
import Lottie from "lottie-react";

export default function WhoAreWe(){
    
    return(
        <div className="flex flex-col items-center  gap-7 mt-16">
            <div className="max-w-2xl ">
                    <h1 className="text-center font-title text-7xl text-white ">
                        Who are we
                    </h1> 
                    <p className="text-center  text-xl mt-4 text-white  ">
                        We are creative digital company
                         aiming to change our continent  
                         Africa with stunning and creative content 
                        by promoting and boosting business 
                        to the global is our main goal
                    </p>

            </div>
           

            <div className="grid place-content-center  grid-cols-3  gap-5">
            <Lottie animationData={tech} loop={true} className=' w-screen h-96' />;

            </div>
            

        </div>
    )
}