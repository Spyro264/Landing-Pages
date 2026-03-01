import React from 'react'
import MarvelNavbar from '../components/MarvelNavbar'
import marvelBg from '../assets/marvel.png'

const MarvelHeroPage = () => {
  return (
    <div
      className='min-h-screen bg-cover bg-center bg-no-repeat '
      style={{ backgroundImage: `url(${marvelBg})` }}
    >
        {/* {navbar} */}
        <MarvelNavbar />

        {/* {hero section} */}
        <div className='p-4 flex flex-col space-y-20 md:mt-20'>

            {/* {heading} */}
            <div className=' flex flex-col justify-between items-start'>
                <h1 className='font-extrabold text-8xl text-white md:text-9xl'>BLACK</h1>
                <h4 className='font-medium text-white text-2xl ml-0.5 md:text-3xl md:font-bold'>Panther</h4>

                  {/* {desc} */}
            <p className='text-white mt-10 font-extralight ml-0.5 md:max-w-150 md:font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quas deserunt laboriosam ab, perspiciatis, eligendi impedit neque dolore iusto quae molestiae recusandae rem facere et dignissimos. Quod perferendis vitae est?</p>
            </div>

            {/* {buttons} */}
            <div>
                <button className='bg-red-600 text-white text-2xl p-4 rounded-sm md:p-8 md:text-4xl'>BUY TICKET</button>

            </div>


          

        </div>
    </div>
  )
}

export default MarvelHeroPage