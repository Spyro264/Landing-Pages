import yoga from "../assets/header.png"

const Sample = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 min-h-screen '>
      

      {/* {text} */}
      <div className="order-2 md:order-1 px-2 flex flex-col justify-center">

        <div className="text-center md:flex md:flex-col md:items-start md:text-start">
         <h1 className="text-2xl md:text-6xl xl:text-7xl font-bold">Single Platform</h1>
         <h1 className="text-2xl md:text-6xl xl:text-7xl font-bold">For All Your</h1>
         <h1 className="text-2xl md:text-6xl xl:text-7xl font-bold ">Learning Platform</h1>
        </div>

        <p className="font-light text-center mt-2 md:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolorum? Ut quam nesciunt voluptatem? Nulla omnis autem officiis dolores totam amet ut voluptatem illum doloribus, obcaecati veniam! Nemo, labore! Odit?</p>
     

      </div>

      {/* {image} */}
      <div className="order-1 md:order-2 flex items-center justify-center">
        <img src={yoga} alt="Yoga" className="w-full h-auto max-w-sm md:max-w-sm lg:max-w-md"/>
      </div>
    </div>
  )
}

export default Sample