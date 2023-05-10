import { Link } from 'react-scroll';
import * as Icons from '../icons';

const Navigate = () => {
  return (
    <ul className="fixed bottom-5 right-5">
      <li className="mb-2">
        <Link
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Icons.Up className="cursor-pointer fill-gray-400 hover:fill-white" />
        </Link>
      </li>
      <li className="">
        <Link
          activeClass="active"
          to="footer"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Icons.Down className="cursor-pointer fill-gray-400 hover:fill-white" />
        </Link>
      </li>
    </ul>
  );
};

export default Navigate;
