import Button from '../Button';
import Menu from '../Menu';

const Header = () => {
  return (
    <div className="bg-header bg-center bg-no-repeat bg-cover">
      <div className="max-w-[1220px] mx-auto">
        <ul className="flex flex-col justify-between min-h-screen" id="header">
          <li>
            <Menu />
          </li>
          <li className="max-w-[550px]">
            <h1 className="text-9xl font-space uppercase mb-5 leading-[5rem]">
              space
              <p className="text-[98px]">tourism</p>
            </h1>
            <div className="text-2xl flex justify-between flex-wrap mb-12">
              <p>The future is here!</p>
              <p>Fulfill the dream of childhood!</p>
            </div>
            <Button>I want to be an astronaut!</Button>
          </li>

          <li className="flex justify-end mt-10 mb-[5%]">
            <p className="w-[165px] text-sm mr-12 leading-4">
              In 2021, a new era in space exploration has begun - the era of
              space tourism. Private companies have gained access to outer
              space.
            </p>
            <p className="w-[165px] text-sm leading-4">
              Competition between them has intensified, and the price of a
              ticket for flights into outer space has decreased a hundred times.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
