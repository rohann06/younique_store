import Link from 'next/link';
import {BsBag} from 'react-icons/bs';

const Navbar = () => {
    return ( 
        <div className=" flex justify-between mb-2 lg:mb-4">
            <Link href="/">
            <h1 className=" font-light text-4xl text-slate-400 cursor-pointer "><span className=" font-normal text-slate-700">YOU</span>nique</h1></Link>
            <div className=' p-2 cursor-pointer'>
                <BsBag className=' text-2xl'/>
            </div>
        </div>
     );
}
 
export default Navbar;