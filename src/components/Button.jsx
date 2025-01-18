const Button = ({ label, iconURL, bgColor }) => {
  return (
    <button
      className={`flex flex-row justify-center items-center text-white font-semibold gap-2 px-7 py-4 text-lg leading-none font-montserrat  rounded-full border-none hover:opacity-80 transition-all duration-300 ease-in-out hover:scale-[1.05] hover:rotate-[-1deg] ${bgColor}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="the button icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
