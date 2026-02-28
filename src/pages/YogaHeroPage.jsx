import header from '../assets/header.png'
import hi from "../assets/hi.jpeg"
import YogaNavbar from '../components/YogaNavbar'
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'


const YogaHeroPage = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full py-6 md:py-10 lg:py-20'>

     <div className='flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10 lg:gap-16 w-full '>
       {/* Text Content */}
       <div className='flex flex-col items-center justify-center lg:items-start lg:flex-1 px-2 md:px-4'>
        <h4 className='font-poppins text-base md:text-xl lg:text-2xl xl:text-4xl text-center lg:text-left tracking-wide'>JOIN OUR CLUB</h4>
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#782a59] mt-2'>YOGA FOR</h1>
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#782a59]'>HEALTHY LIFE</h1>
        <p className='text-center lg:text-start text-sm md:text-base lg:text-lg font-light mt-3 md:mt-4 max-w-md lg:max-w-lg leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio architecto praesentium voluptatum inventore animi facere veritatis beatae sunt debitis.</p>
        <button className='bg-[#782a59] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-2xl mt-5 md:mt-6 text-sm md:text-lg lg:text-xl hover:bg-[#5e1f45] transition-colors cursor-pointer'>Join Now</button>
        <div className='flex space-x-3 mt-5 lg:mt-10'>
          <button className='border-2 border-[#782a59] rounded-full p-2 md:p-2.5 text-[#782a59] hover:bg-[#782a59] hover:text-white transition cursor-pointer text-sm md:text-lg lg:text-xl'><FaTwitter /></button>
          <button className='border-2 border-[#782a59] rounded-full p-2 md:p-2.5 text-[#782a59] hover:bg-[#782a59] hover:text-white transition cursor-pointer text-sm md:text-lg lg:text-xl'><FaInstagram /></button>
          <button className='border-2 border-[#782a59] rounded-full p-2 md:p-2.5 text-[#782a59] hover:bg-[#782a59] hover:text-white transition cursor-pointer text-sm md:text-lg lg:text-xl'><FaFacebookF /></button>
        </div>
      </div>

      {/* Hero Image */}
      <div className='flex items-center justify-center  lg:flex-1 w-full md:px-10 lg:px-0'>
        <img src={hi} alt="Yoga hero" className='w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto object-cover rounded-2xl' />
      </div>
      </div>

    </div>
  )
}

export default YogaHeroPage