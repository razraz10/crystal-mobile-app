// 'use client'
// import Image from "next/image";
// import Menu from "./componnts/Menu";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import DeleteTask from "./componnts/DeleteTask";

// export default function Home() {
//   const router = useRouter()
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="relative h-screen">
//     <main className="h-full">
//       <div className=" m-4 absolute right-0" onClick={toggleMenu}>
//       <Image 
//       src="/menu.svg"
//       width={28.19}
//       height={20.5}
//       alt=""
//       />
//       </div>

      
    
//       {isMenuOpen && <Menu toggleMenu={toggleMenu} />}
//       {isMenuOpen && <DeleteTask toggleMenu={toggleMenu} />}
  
      
   
//     </main>
//     <footer className=" absolute inset-x-0 bottom-0 h-6">
//     <p className="text-center">פותח ע”י מסגרת אמ”ת ומדור תו”פ נס”א</p> 

//     </footer>
//     </div>
    
//   );
// }
