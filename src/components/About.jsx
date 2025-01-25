import React from "react";

const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <img src="/banner2.png" alt="" className="w-full max-w-md h-auto" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralGrey font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at Kantijaya
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Discover the untold stories and transformative experiences that shaped three remarkable years at Kantijaya.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralGrey font-semibold mb-4 md:w-2/3">
              Helping a local <span className="text-brandPrimary">business reinvent itself</span>
            </h2>
            <p className="text-neutralGrey">
              Empowering local businesses to adapt, grow, and thrive with innovative solutions that drive success.
            </p>
          </div>
          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-30">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/icons/member.png" alt="" className="w-14 h-auto" />
                <div>
                  <h4 className="text-2xl text-neutralGrey font-semibold">50++</h4>
                  <p>Members</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/icons/groups.png" alt="" className="w-14 h-auto" />
                <div>
                  <h4 className="text-2xl text-neutralGrey font-semibold">20++</h4>
                  <p>Groups</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/icons/eventbooking.png" alt="" className="w-14 h-auto" />
                <div>
                  <h4 className="text-2xl text-neutralGrey font-semibold">10++</h4>
                  <p>Event Booking</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/icons/payment.png" alt="" className="w-14 h-auto" />
                <div>
                  <h4 className="text-2xl text-neutralGrey font-semibold">40++</h4>
                  <p>Payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
