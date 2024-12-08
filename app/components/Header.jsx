'use client'
import Image from "next/image";
import Menu from "./Menu";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import DeleteTask from "./DeleteTask";
import { AlignRight } from "lucide-react";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const pathName = usePathname()
  console.log(pathName)

  return (
   
    <main className="">
      <div className={`m-4 absolute right-0`}  onClick={toggleMenu}>
     {pathName!="/login" && <Image 
      src = {pathName!="/date"?  "/menu.svg":
      "/menu_white.svg"}
      width={28.19}
      height={20.5}
      alt="menu icon"
      />}
      </div>

      
    
      {isMenuOpen && <Menu toggleMenu={toggleMenu} />}
     
  
      
   
    </main>
    
    
  );
}