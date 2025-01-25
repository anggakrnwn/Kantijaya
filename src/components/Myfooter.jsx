import React from "react";
import { Footer } from "flowbite-react";
import { BsGithub, BsInstagram, BsLinkedin, BsTiktok } from "react-icons/bs";

const Myfooter = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="space-y-4 mb-8">
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Kantijaya</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/anggakrnwn">Github</Footer.Link>
                <Footer.Link href="https://github.com/anggakrnwn">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Kantijaya™" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.tiktok.com/@kantijayadev?is_from_webapp=1&sender_device=pc" icon={BsTiktok} />
            <Footer.Icon href="https://www.instagram.com/kantijayadev/" icon={BsInstagram} />
            <Footer.Icon href="https://www.linkedin.com/in/angga-krnwn13" icon={BsLinkedin} />
            <Footer.Icon href="https://github.com/anggakrnwn" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Myfooter;
