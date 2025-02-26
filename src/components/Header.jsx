

import { Input } from "@/components/ui/input"
import Btn from './Btn'
import { AiOutlineGlobal } from "react-icons/ai";
import { DropdownMenuDemo } from "./DropDown";




function Header() {
  

  return (
     <nav className="p-5 flex lg:flex-col-1   justify-around items-center">
        <div className="block lg:hidden sm:items-start">
        <DropdownMenuDemo/>
        </div>
        <div className="sm:hidden md:hidden lg:block">
            <img src="/logo.png" alt="logo" />
        </div>
        {/* <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div> */}
     <div className="flex gap-4 border items-center justify-between px-20 py-1 rounded-full">
     <Input
            className="rounded-lg lg:w-72 p-5 shadow-none border-none"
            type="text"
            placeholder="restaurant, hotel, service...."
            />
       <Btn className="bg-blue-500 rounded-full " type="submit" value="search" />
     </div>

    
    <div className="flex gap-4 items-center">
        <span className="text-2xl"><AiOutlineGlobal /></span>
        <Btn type="" value="MyFeedback for business"/>
    </div>
     

     </nav>
  )
}

export default Header

