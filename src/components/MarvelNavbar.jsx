import { HiMenuAlt3 } from 'react-icons/hi' 
const MarvelNavbar = () => {
  return (
    <div className="flex justify-between items-center px-1 py-2 md:px-5 md:py-5 bg-red-600 md:bg-transparent">
        <h1 className='font-bold text-2xl font-mono text-white '>MARVEL</h1>
         <HiMenuAlt3 className='text-2xl text-white md:hidden ' />
         <ul className='hidden md:flex text-2xl text-white  space-x-3.5'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
         </ul>
    </div>
  )
}

export default MarvelNavbar