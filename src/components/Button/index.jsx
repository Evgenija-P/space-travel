const Button = ({ children }) => {
  return (
    <button
      className="header__btn text-2xl uppercase text-center w-full border border-solid border-prime-color py-4 transition-colors ease-in-out delay-150 hover:text-accent-red focus:text-accent-red duration-300"
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
