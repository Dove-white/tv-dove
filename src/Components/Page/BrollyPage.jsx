import React from "react";
import Bg from "../../assets/img/hero_image.png";
import PlayIcon from "../../assets/img/play_icon.png";
import EditIcon from "../../assets/img/edit_icon.png";
import BrainIcon from "../../assets/img/brain_icon.png";
import MobileScreen from "../../assets/img/mobile_screen.png";
import GrayIcon from "../../assets/img/gray_icon.png";
import MockupPeople from "../../assets/img/mockup_people.png";
import CarProtect from "../../assets/img/car-protect.png";
import CharnelSales from "../../assets/img/charnel-sales.png";
import PolicySales from "../../assets/img/policy-sales.png";
import CircleIcon from "../../assets/img/circle-icon.png";

const Brolly = () => {
  const divStyle = {
    backgroundImage: `url(${Bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <main className="overflow-hidden">
      <section
        className="py-[6rem] text-black px-[1.4rem] md:py-[0rem] md:pb-40 md:flex items-center lg:px-20 h-[100vh]"
        style={divStyle}
      >
        <div>
          <h1 className="pt-[2rem] md:pt-[8rem] lg:mt-[5rem] lg:pt-0 font-semibold text-black text-[1.8rem] sm:font-bold  md:text-4xl lg:text-5xl lg:leading-[4rem]">
            Sell more on our flexible payment platform
          </h1>
          <p className="mt-[4rem] md:pr-3 md:mt-[3rem]">
            We have laid the rails to power flexible payments for your
            customers. sales.
          </p>
          <button
            type="button"
            className="bg-[#FBC02D] border-[#FBC02D] border hover:bg-white hover:border-black transition-all px-9 py-3 rounded-lg mt-[6rem] md:mt-5 md:px-14"
          >
            Learn more
          </button>
        </div>
        <div className="md:w-1/2"></div>
      </section>
      <section className="px-[1.4rem] mt-12 mb-9 md:flex lg:px-20">
        <div>
          <p className="text-[1.4rem] font-semibold lg:text-3xl">
            In 3 Steps you will be all set to offer flexible payments and grow
            your sales
          </p>
          <ul className="mt-[6rem] md:mt-10">
            <li className="flex items-center gap-9">
              <img src={PlayIcon} alt="" srcSet="" />
              <span>Book a demo</span>
            </li>
            <li className="flex items-center gap-11 my-14">
              <img src={EditIcon} alt="" srcSet="" />
              <span>Agreement and KYC</span>
            </li>
            <li className="flex items-center gap-11">
              <img src={BrainIcon} alt="" srcSet="" />
              <span>Onboarding and store set up</span>
            </li>
          </ul>
          <div className="flex justify-start">
            {" "}
            <button
              type="button"
              className="hover:bg-[#FBC02D] hover:border-[#FBC02D] transition-all bg-transparent border-[#0B0B0B] border px-9 py-2 rounded-lg mt-[5rem]"
            >
              Book a demo
            </button>
          </div>
        </div>
        <div className="md:w-1/2 "></div>
      </section>

      <section className="bg-[#FFFCF5] mt-12 py-[3rem] px-[1.4rem] md:grid grid-rows-4 grid-flow-col gap-4 lg:px-20">
        <h2 className="text-center font-semibold px-8 md:px-0 text-[1.4rem] col-span-full row-span-2 md:text-start md:flex items-end lg:text-3xl lg:w-2/3">
          Our platform delivers sales round the clock
        </h2>
        <div className="row-span-full col-span-2">
          <img src={MobileScreen} alt="mobile screen" className="m-auto" />
        </div>

        <p className="text-[0.9rem] text-center px-10 md:px-0 col-span-full md:text-start lg:w-2/3">
          Our AI-powered platform serves customers 24/7 so you can achieve more
          without working more.
        </p>
      </section>

      <section className="px-[1.4rem] mt-12 mb-9 md:grid grid-rows-3 grid-flow-col gap-4 md:mt-0 lg:px-20">
        <h2 className="text-[1.4rem] font-semibold text-center col-span-full row-span-1 md:text-start md:flex items-end md:pb-5 md:w-2/3 lg:text-3xl">
          Benefit from our partnerships and integrations
        </h2>
        <ul className="flex items-center gap-[5rem] py-[6rem] md:py-0 row-span-1 col-span-3 md:flex-row-reverse md:justify-around">
          <li className="flex items-center gap-8">
            <img src={GrayIcon} alt="" srcSet="" />
            <span>MTN</span>
          </li>
          <li className="hidden md:flex items-center gap-8">
            <img src={GrayIcon} alt="" srcSet="" />
            <span>GCB</span>
          </li>
          <li className="flex items-center gap-8">
            <img src={GrayIcon} alt="" srcSet="" />
            <span>Bolt</span>
          </li>
        </ul>
        <div className="col-span-full row-span-1 md:w-2/3">
          <p className="text-[0.9rem] text-center md:text-start">
            By joining our platform, you get access to our growing partnership
            network to achieve more sales
          </p>
          <div className="flex justify-center md:justify-start">
            {" "}
            <button
              type="button"
              className="hover:bg-[#FBC02D] hover:border-[#FBC02D] transition-all bg-transparent border-[#0B0B0B] border px-9 py-2 rounded-lg mt-[3rem]"
            >
              Interested
            </button>
          </div>
        </div>
      </section>

      <section className="px-[1.4rem] mt-12 mb-9 py-[5rem] bg-[#F1FFEE] md:grid grid-rows-4 grid-flow-col gap-4 md:gap-9 md:py-1 lg:px-20">
        <h2 className="text-[1.4rem] font-semibold text-center col-span-1 row-span-2 md:text-start md:flex items-end md:w-3/4 lg:text-3xl lg:w-2/1">
          You’re in full control of your underwriting and data
        </h2>
        <div className="flex justify-center py-10 row-span-full col-span-full">
          <img src={MockupPeople} alt="mock up" className="pt-12" />
        </div>
        <p className="text-[0.9rem] text-center col-span-1 md:text-start md:w-3/4">
          Set your underwriting parameters on your back-office and let our AI
          get to work for you
        </p>
      </section>
      <section className="px-[1.4rem] mt-12 mb-9 md:grid grid-rows-2 grid-flow-col gap-4 md:mb-16 lg:px-20">
        <h2 className="text-[1.4rem] font-semibold text-center col-span-full row-span-1 md:text-start md:flex items-end lg:text-3xl lg:w-2/3">
          Advanced fraud controls to keep your portfolio safe
        </h2>
        <div className="flex justify-center py-10 row-span-full col-span-2 md:pt-20 lg:w-full">
          <img
            src={CarProtect}
            alt=""
            srcSet=""
            className="md:h-fit lg:w-full"
          />
        </div>

        <div className=" col-span-full">
          <p className="text-[0.9rem] text-center px-8 md:text-start md:px-0 lg:w-2/3">
            Fraud control is central to the very design of our platform. We use
            machine learning and image recognition algorithms to detect and weed
            out fraudulent policies and claims.
          </p>
          <div className="flex justify-center md:justify-start">
            {" "}
            <button
              type="button"
              className="hover:bg-[#FBC02D] hover:border-[#FBC02D] transition-all bg-transparent border-[#0B0B0B] border px-9 py-2 rounded-lg mt-[3rem]"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>
      <section className="px-[1.4rem] mt-12 mb-9 md:grid grid-rows-4 grid-flow-col gap-4 md:mt-0 lg:px-20">
        <h2 className="text-[1.4rem] font-semibold text-center col-span-full row-span-1 md:text-start md:flex items-end md:pb-5 lg:text-3xl">
          All the data you need in real-time, APIs for direct integration
        </h2>
        <div className="flex justify-center flex-col py-10 md:py-0 row-span-full col-span-2">
          <img src={PolicySales} alt="" srcSet="" className="" />
          <img src={CharnelSales} alt="" srcSet="" className="" />
        </div>

        <div className="col-span-full">
          <p className="text-[0.9rem] md:text-start lg:w-2/3">
            With almost 2 decades of industry experience ourselves, we
            understand your data requirements and we deliver expertly to you.
          </p>
          <ul className="list-disc px-7">
            <li>Multiple data export options</li>
            <li>APIs for direct integration</li>
          </ul>
        </div>
      </section>
      <section className="px-[1.4rem] mt-12 mb-9 bg-[#FFFCF5] py-[5rem] md:grid grid-rows-4 grid-flow-col gap-4 md:py-1">
        <h2 className="text-[1.4rem] font-semibold text-center col-span-1 row-span-2 md:text-start md:flex items-end md:w-3/4 lg:text-3xl">
          24/7 support for your customers
        </h2>
        <div className="flex justify-center py-20 row-span-full col-span-full md:px-10">
          <img src={CircleIcon} alt="" srcSet="" />
        </div>

        <p className="text-[0.9rem] text-center px-8 md:px-0 col-span-1 md:text-start md:w-3/4">
          Set your underwriting parameters on your back-office and let our AI
          get to work for you
        </p>
      </section>
      <section className="px-[1.4rem] mt-12 mb-9 flex flex-col  md:grid grid-rows-2 grid-flow-col gap-4 md:mt-0 lg:px-20">
        <h2 className="text-[1.4rem] font-semibold text-center col-span-full row-span-1 md:text-start md:flex items-end md:pb-5 lg:text-3xl">
          You’re in good company
        </h2>
        <div className="flex justify-center flex-col py-16 w-[400px] self-center px-6 gap-4 md:gap-0 md:py-0 row-span-full col-span-2 group">
          <img
            src={GrayIcon}
            alt=""
            srcSet=""
            className="w-1/6 self-center group-hover:self-start"
          />
          <img
            src={GrayIcon}
            alt=""
            srcSet=""
            className="w-1/6 group-hover:self-end"
          />
          <img
            src={GrayIcon}
            alt=""
            srcSet=""
            className="md:hidden w-1/6 self-end"
          />
          <img
            src={GrayIcon}
            alt=""
            srcSet=""
            className="md:hidden w-1/6 self-center"
          />
          <img src={GrayIcon} alt="" srcSet="" className="md:hidden w-1/6" />
          <img
            src={GrayIcon}
            alt=""
            srcSet=""
            className="w-1/6 self-end group-hover:self-start"
          />
          <img
            src={GrayIcon}
            alt=""
            srcSet=""
            className="w-1/6 self-center group-hover:self-end"
          />
        </div>

        <div className="col-span-full">
          <p className="text-[0.9rem] text-center px-8 md:px-0 md:text-start">
            Joining our growing network of insurance providers and sell more
          </p>
          <div className="flex justify-center md:justify-start">
            {" "}
            <button
              type="button"
              className="hover:bg-[#FBC02D] hover:border-[#FBC02D] transition-all bg-transparent border-[#0B0B0B] border px-9 py-2 rounded-lg mt-[3rem] my-20"
            >
              book a demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Brolly;
