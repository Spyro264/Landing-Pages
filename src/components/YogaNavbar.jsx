import { HiMenuAlt3 } from 'react-icons/hi' 

const YogaNavbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-3 md:px-6 md:py-4 lg:px-8 bg-[#782a59] lg:bg-white rounded-b-lg'>
        {/* {name} */}
        <div className='flex flex-col justify-center items-center text-white lg:text-[#782a59]'>
            <h1 className='font-[Lobster_Two] text-2xl font-bold md:text-3xl lg:text-4xl md:font-extrabold m-0 leading-tight'>Yoga</h1>
            <h6 className='font-[Lobster_Two] m-0 text-xs md:text-sm'>For life</h6>
        </div>

        {/* {pages} */}
        <div className='hidden lg:block'>
            <ul className='flex space-x-6 text-white text-lg xl:text-xl font-poppins cursor-pointer lg:text-[#782a59]'>
                <li className='hover:underline underline-offset-4'>Home</li>
                <li className='hover:underline underline-offset-4'>About</li>
                <li className='hover:underline underline-offset-4'>Services</li>
                <li className='hover:underline underline-offset-4'>Contact</li>
            </ul>
        </div>

        {/* {hamburger icon} */}
        <div className='lg:hidden'>
            <HiMenuAlt3 className='text-2xl text-white md:text-3xl' />
        </div>
    </div>
  )
}

export default YogaNavbar