import React from 'react'

const Services = () =>{
    const services = [
        {id: 1, title: "Membership Organization", desc: "Streamline member management and foster engagement with powerful, intuitive tools.", image: "/src/assets/icons/card1.png"},
        {id: 2, title: "National Associations", desc: "Empowering national associations to connect, collaborate, and drive impactful initiatives.", image: "/src/assets/icons/card2.png"},
        {id: 3, title: "Groups", desc: "Facilitate group collaboration and achieve goals effectively with our seamless solutions.", image: "/src/assets/icons/card3.png"},
    ]
  return (
      <div className='md:px-14 px-14 py-16 max-w-screen-2x1 mx-auto' id='services'>
        <div className='text-center my-8'>
            <h2 className='text-4xl text-neutralGrey font-semibold mb-2'>
                Our Clients
            </h2>
            <p className='text-neutralGrey'>
            Partnering with diverse businesses, we deliver innovative solutions tailored to their unique needs and goals
            </p>

            {/* company logo */}

            <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                <img className='w-14 h-auto' src="/src/assets/logo1.png" alt="" />
                <img className='w-14 h-auto' src="/src/assets/logo2.png" alt="" />
                <img className='w-14 h-auto' src="/src/assets/logo3.png" alt="" />
                <img className='w-14 h-auto' src="/src/assets/logo4.png" alt="" />
                <img className='w-14 h-auto' src="/src/assets/logo5.png" alt="" />
                <img className='w-14 h-auto' src="/src/assets/logo6.png" alt="" />
                <img className='w-14 h-auto' src="/src/assets/logo7.png" alt="" />
            </div>

            {/* servuce card */}
            <div className='mt-20 md:w-1/2 mx-auto text-center'> 
                <h2 className='text-4xl text-neutralGrey font-semibold mb-2'>
                Manage your entire business seamlessly in a single system
                </h2>
                <p className='text-neutralGrey'>
                Simplify operations and enhance efficiency with an all-in-one solution tailored to your business needs
                </p>
            </div>

            {/* card */}
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1w-11/12 mx-auto gap-8'>
                {
                    services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-x-5 hover:border-b-4 hover:border-yellow-500 transition-all duration-300 flex items-center justify-center h-full'> 
                        <div>
                            <div className='bg-[#f5f4e8] mb-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} alt="" className='-ml-5'/></div>
                            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                            <p className='text-sm text-neutralGrey'>{service.desc}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
      </div>
  )
}

export default Services;