import Login from '../../images/login.png';

const NAVELEMENTS = [
  { name: 'about us', link: '#' },
  { name: 'price', link: '#' },
  { name: 'services', link: '#' },
  { name: 'guarantees', link: '#' },
  { name: 'news', link: '#' },
];

const Menu = () => {
  return (
    <div className="flex justify-between items-cente pt-20 pb-6">
      <nav>
        <ul className="flex">
          {NAVELEMENTS.map(el => (
            <li key={el.name} className="mr-7 last:mr-0">
              <a
                href={el.link}
                className="text-lg leading-5 uppercase transition-colors ease-in-out delay-150 hover:text-accent-red focus:text-accent-red duration-300"
              >
                {el.name}
              </a>
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
