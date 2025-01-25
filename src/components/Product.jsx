import React from "react";

const Product = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto my-8" id="product">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <img src="/assets/banner3.png" alt="" className="w-full max-w-md h-auto" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralGrey font-semibold mb-4 md:w-4/5">
              How to design your site footer like we did
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Discover the best practices for designing an effective and visually appealing footer that enhances user experience and functionality.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto bg-neutralSilver py-16" id="testimonial">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/3"></div>
          <img src="/assets/human1.png" alt="" className="w-full max-w-md h-auto" />
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
                Working with this organization has been a transformative experience. Their commitment to excellence and teamwork has driven remarkable results, and their focus on innovation continues to inspire us.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                The Innovators Team
              </h5>
              <p className="text-base text-neutralGrey mb-8">Onyx Studio</p>
              <div>
                <div className="flex items-center gap-8 flex-wrap">
                  <img
                    src="/assets/logo1.png"
                    alt=""
                    className="cursor-pointer w-8 h-auto"
                  />
                  <img
                    src="/assets/logo2.png"
                    alt=""
                    className="cursor-pointer w-8 h-auto"
                  />
                  <img
                    src="/assets/logo3.png"
                    alt=""
                    className="cursor-pointer w-8 h-auto"
                  />
                  <img
                    src="/assets/logo4.png"
                    alt=""
                    className="cursor-pointer w-8 h-auto"
                  />
                  <img
                    src="/assets/logo5.png"
                    alt=""
                    className="cursor-pointer w-8 h-auto"
                  />
                  <img
                    src="/assets/logo6.png"
                    alt=""
                    className="cursor-pointer w-8 h-auto"
                  />
                  <img
                    src="/assets/logo7.png"
                    alt=""
                    className="cursor-pointer w-8 h-auto"
                  />
                  <div className="flex items-center gap-8">
                    <a
                      href=""
                      className="font-bold text-brandPrimary hover:text-neutral-700"
                    >
                      Meet all customers
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                        className="inline-block ml-2"
                      >
                        <path
                          d="M12 9.39905l15.2929 6.10615c15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                          stroke="#4CAF4F"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
