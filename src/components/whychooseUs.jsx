import React from "react";
import { useNavigate } from "react-router-dom";

const WhyChooseUS = () => {
  const navigate = useNavigate()
  return (
    <>
      <div id='academic' className=" w-full">
        <div className="flex flex-col justify-center items-center p-6 lg:p-20 md:p-20 sm:p-20 ">
          <h1 className="sm:text-4xl  text-white mb-8">
            Why choose us
          </h1>
          <h1 className="sm:text-4xl  text-white mb-8">Get a 30%  <span className="text-teal-500">Discount  opportunity</span> with our services</h1>
          <p className="text-whiteColor text-sm sm:text-2xl text-center lg:text-sm md:text-sm lg:w-[26rem] text-[#6C8593] mb-28">
          We are creative digital company aiming to change our continent Africa with stunning and creative content by promoting and boosting business to the global is our main goal
          </p>
          <div className="flex flex-col justify-center ms-8 lg:ms-0 md:ms-0 sm:ms-0 items-center lg:flex-row md:flex-row gap-32">
            <div className="relative bg-TextColor2 lg:h-[30rem] lg:w-[20rem] md:h-[30rem] md:w-[20rem] h-[25rem] w-[15rem] rounded-xl">
            <div className='flex justify-center items-center'>
            <p className="absolute bottom-5 text-center text-white text-xl">First clients</p>
            <p className="absolute bottom-0 text-white text-center text-sm">We get 20% upfront payment</p>
            </div>
              <div className="absolute p-10 bg-white lg:h-[30rem] lg:w-[20rem] md:h-[30rem] md:w-[20rem] h-[25rem] w-[15rem] top-[-3rem] right-10 rounded-xl">
                <p className="font-bold lg:text-2xl">First clients</p>
                <h1 className="font-bold lg:text-4xl mb-5">We get 20% upfront payment</h1>
                <p className="text-[#6C8593] text-sm mb-5">FREE for 3 days, then $139 per every
                  3 months (Best Deal, 33% Off)</p>
                <div className="pt-[1px] bg-slate-300 lg:w-64 md:w-64 sm:w-56 w-40"></div>

                <ul className="p-3">
                  <li className="leading-9 text-[10px] lg:text-lg md:text-lg">work will be done and accomplish</li>
                  <li className="leading-9 text-[10px] lg:text-lg md:text-lg">with only 20%</li>
                  <li className="leading-9 text-[10px] lg:text-lg md:text-lg">the another cover money be given after work
                    tricks from every teacher</li>
                </ul>
              </div>
            </div>
            <div className="relative bg-TextColor2 lg:h-[30rem] lg:w-[20rem] md:h-[30rem] md:w-[20rem] h-[25rem] w-[15rem] rounded-xl">
            <div className='flex justify-center items-center'>
            <p className="absolute bottom-5 text-center text-white text-xl">we believes</p>
              <p className="absolute bottom-0 text-white text-center text-sm">customer satisfication</p>
            </div>
              <div className="absolute p-10 bg-white lg:h-[30rem] lg:w-[20rem] md:h-[30rem] md:w-[20rem] h-[25rem] w-[15rem]  top-[-3rem] right-10 rounded-xl">
                <p className="font-bold lg:text-2xl">we believe</p>
                <h1 className="font-bold lg:text-4xl mb-5">customer satisfication </h1>
                <p className="text-[#6C8593] text-sm mb-5">we believe</p>
                <div className="pt-[1px] bg-slate-300 lg:w-64 md:w-64 sm:w-56 w-40"></div>

                <ul className="p-3">
                  <li className="leading-9">we believe in communication </li>
                  <li className="leading-9">we give any updates of the production</li>
                  <li className="leading-9">as we follow prototyping
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
     
     
    </>
  );
};

export default WhyChooseUS;
