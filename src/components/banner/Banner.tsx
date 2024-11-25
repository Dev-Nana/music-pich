import ImageBanner from "../../assets/images/image-bg-banner.webp";

export const Banner = () => {
  return (
    <div className="overflow-hidden py-24 sm:py-8 md:h-[120vh] h-screen flex justify-center">
      <img
        src={ImageBanner}
        loading="eager"
        className="absolute -z-10 size-full object-cover top-0 object-bottom h-[130vh]"
      />
      <div className="w-[36rem] lg:px-8">
        <div className="text-center flex flex-col flex-wrap items-center">
          <p className="sm:text-[7rem] text-[4rem] flex flex-col flex-wrap items-center bg-gradient-to-b text-center from-gray-450 via-white to-gray-450 bg-clip-text text-transparent font-anton uppercase">
            Experiência
            <p className="flex sm:-mt-12 -mt-[1.6rem]">épica</p>
          </p>
          <p className="sm:w-[29rem] w-[22rem] sm:text-[1.1rem] text-[.8rem] text-gray-400">
            Temos a música perfeita com licença gratuita para sua criatividade.
            Descubra as possibilidades agora!
          </p>
          <a className="text-white bg-purple-150 px-6 py-3 mt-6 text-lg font-semibold rounded-lg cursor-pointer">
            Comece Grátis
          </a>
        </div>
      </div>
    </div>
  );
};