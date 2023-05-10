import Login from '../../images/login.png';
import { Link } from 'react-scroll';

const NAVELEMENTS = [
  { name: 'about us', linkId: 'about' },
  { name: 'price', linkId: 'price' },
  { name: 'services', linkId: 'services' },
  { name: 'guarantees', linkId: 'guarantees' },
  { name: 'how to', linkId: 'how' },
];

const Menu = () => {
  return (
    <div className="flex justify-between items-cente pt-20 pb-6">
      <nav>
        <ul className="flex">
          {NAVELEMENTS.map(el => (
            <li key={el.name} className="mr-7 last:mr-0">
              <Link
                activeClass="active"
                to={el.linkId}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-lg leading-5 uppercase cursor-pointer transition-colors ease-in-out delay-150 hover:text-accent-red focus:text-accent-red duration-300"
              >
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href="tel:080000000000"
        className="text-2xl ml-auto transition-colors ease-in-out delay-150 hover:text-accent-red focus:text-accent-red duration-300"
      >
        0 800 000 000 00
      </a>
      <button className="ml-[22px] mr-[134px]">
        <img src={Login} alt="login img" />
      </button>
    </div>
  );
};

export default Menu;
