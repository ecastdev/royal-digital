
import { Button, Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function WhoWeOffer(){
    const navigate = useNavigate();
    const whoData = [
        {
            cotent1: 'Development',
            Descript2: 'Transform your online presence with our  expert website Development services'
        },
        {
            cotent1: 'DIgital Marketing',
            Descript2: 'Get ready toi transform your business.'
        },
        {
            cotent1: 'Graphic design',
            Descript2: 'Visual story telling Briing yourb brand to life'
        },
        {
            cotent1: 'Stationery',
            Descript2: 'Get ready wow'
        },
        {
            cotent1: 'ICT equipments',
            Descript2: 'Get the best Ict equipments'
        },
        
        
        
    ]
    return(
        <div className="flex flex-col  items-center  gap-7 mt-16">
            <div className=" ">
                    <h1 className="text-center mt-16 font-title text-6xl text-white ">
                        What we <span className="text-7xl"> offer</span>
                    </h1> 
                    {/* <p className="text-center  text-xl mt-4 text-white  ">
                        The royal company
                        
                    </p> */}

            </div>
           
            <div className="grid place-content-center lg:mt-16 lg:grid-cols-3  gap-5">
                {whoData.map((wData, index) =>(
                    <div key={index} className="">
                        <Card className="max-w-72 lg:max-w-sm  hover:shadow-lg bg-teal-950 shadow-teal-700">
                        <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                        {wData.cotent1}
                        </h5>
                        <p className="font-normal text-gray-200 dark:text-gray-400">
                        {wData.Descript2}
                        </p>
                        <Button
                        onClick={() => navigate("/service/development")}
                        >
                            explore more
                            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                            </svg>
                        </Button>
                        </Card>


                    </div>
                ))}


            </div>
            

        </div>
    )
}