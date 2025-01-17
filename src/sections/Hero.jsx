import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, changeBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full p-2 flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
    >
      {/* left content */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[80px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 ">Nike</span> Shoes
        </h1>

        <p className="font-montserra text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arivals, quality comfort, and innovation for
          your active life
        </p>

        <Button label="Shop now" iconURL={arrowRight} bgColor="bg-coral-red" />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <p className="text-4xl font-palanquin font-bold">
                {statistic.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* right side imgery */}
      <div
        role="imagery"
        arial-label="display images"
        className="flex flex-1 justify-center relative items-center xl:min-h-screen max-xl:py-40 bg-primary bg-opacity-30 backdrop-blur-sm bg-hero bg-cover bg-center"
      >
        <img
          src={bigShoeImg}
          alt="shoe image"
          width={610}
          height={500}
          className="object-contain z-10 relative"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                imgURL={shoe}
                bigShoeImg={bigShoeImg}
                changeBigShoeImg={changeBigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
