import { Button } from "@/components/ui/button"
import { CiSearch } from "react-icons/ci";
 
 // eslint-disable-next-line react/prop-types
 function Btn({className,type,value}) {
   return (
     <div>
        <Button className={className} type={type}>{value ==='search' ?<CiSearch /> : value }</Button>
     </div>
   )
 }
 

 
 export default Btn