import { Carousel } from "flowbite-react";
import React from "react";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src="/banner1.png" alt="" className="w-full max-w-md h-auto" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-bold text-[#263238] md:w-3/4 leading-snug">
                Empowering Your Business with Innovative{" "}
                <span className="text-brandPrimary leading-snug">Digital Solutions</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Transforming ideas into exceptional digital solutions. From tailored applications to
                cutting-edge software, we bring your vision to life
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src="/banner1.png" alt="" className="w-full max-w-md h-auto" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-bold text-[#263238] md:w-3/4 leading-snug">
                Empowering Your Business with Innovative{" "}
                <span className="text-brandPrimary leading-snug">Digital Solutions</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Transforming ideas into exceptional digital solutions. From tailored applications to
                cutting-edge software, we bring your vision to life
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src="/banner1.png" alt="" className="w-full max-w-md h-auto" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-bold text-[#263238] md:w-3/4 leading-snug">
                Empowering Your Business with Innovative{" "}
                <span className="text-brandPrimary leading-snug">Digital Solutions</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Transforming ideas into exceptional digital solutions. From tailored applications to
                cutting-edge software, we bring your vision to life
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
