import Link from "next/link";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import {useTheme} from 'next-themes';

const Navbar = () => {
  const{theme, setTheme} = useTheme();
  
  return (
    <div className=" flex justify-between mb-2 lg:mb-4 px-5">
      <Link href="/">
        <h1 className=" font-light text-3xl text-slate-400 cursor-pointer lg:text-4xl">
          <span className=" font-normal text-slate-700 dark:text-slate-50">YOU</span>nique
        </h1>
      </Link>
      <div onClick={()=>setTheme( theme === 'light' ? 'dark':'light')} className=" bg-slate-50 dark:bg-slate-800 drop-shadow-xl p-3 rounded-full scale-100 hover:drop-shadow-2xl">

       {theme === 'light' ? <BsMoonFill className=" text-xl" /> :  <BsFillSunFill className=" text-xl" />}
      </div>
    </div>
  );
};

export default Navbar;
