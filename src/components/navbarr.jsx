
import { Menu, X } from "@mui/icons-material";
import { useState } from "react";



export default function Navbar1(){
  // mobile open 
  const nav = [
    {
        listNma :'Home',
        label:"home"
    },
    {
        listNma :'Services',
        label:"#services"
    },
    {
        listNma :'About',
        label : '#about'
    },
    {
        listNma :'Contact',
        label : '#contact'
    },
];
const [mobileOpen, setMobileOpen] = useState(false);
const toogleNav = ()=>{
    setMobileOpen(!mobileOpen);

}
    return(
      <nav className=" fixed z-50 left-16   top-0   py-3 bg-teal-700 rounded-lg w-3/4 border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm ">
                <div className=" flex  justify-between items-center ">
                    <div className=" flex items-center flex-shrink-0">
                      <h1 className="text-center text-zinc-200 font-title text-xl lg:text-3xl">Royal </h1>
                      <button onClick={toogleNav} className=" hover:bg-white ml-3  lg:hidden bg-gradient-to-r from-slate-900 to-slate-400">
                        {mobileOpen ?  <X color='primary'/> : <Menu color="primary"/> }
                    </button>
                        {/* <img className="h-16 w-16 lg:h-24 lg:w-32 mr-2 " src={ ecasLogo} alt="logo"/> */}
                    </div>
                    <ul className=" hidden lg:flex ml-14 space-x-12">
                        {nav.map((items, index) =>(
                            <li className=" hover:bg-gradient-to-r from-rose-900 to-rose-400" key={index}>
                                    <a  key={items.label} className="text-white text-2xl"
                                     href={items.label} >{items.listNma}</a>
                            </li>
                        ))}
                    </ul>  
                </div>
    
                    {/* <button onClick={toogleNav} className=" hover:bg-white  lg:hidden bg-gradient-to-r from-slate-900 to-slate-400">
                        {mobileOpen ?  <X color='primary'/> : <Menu color="primary"/> }
                    </button> */}

                
                {mobileOpen && (
                    <div className="fixed right-0 z-20 bg-gradient-to-r from-amber-900 to-zinc-700 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {nav.map((item, index) => (
                                <li key={index} className="py-4 ">
                                    <a className=" text-white hover:bg-zinc-800 text-2xl" href={item.label} > {item.listNma}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
              
            

            </div>
        </nav>
    )
}