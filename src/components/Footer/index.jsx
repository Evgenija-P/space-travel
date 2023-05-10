import { Link } from 'react-scroll';

const NAVELEMENTS = [
  { name: 'about us', linkId: 'about' },
  { name: 'price', linkId: 'price' },
  { name: 'services', linkId: 'services' },
  { name: 'guarantees', linkId: 'guarantees' },
  { name: 'how to', linkId: 'how' },
];

const CONTACTS = [
  { name: 'spacex.com', link: 'https://www.spacex.com/' },
  { name: 'blueorigin.com', link: 'https://www.blueorigin.com/' },
  { name: 'virgingalactic.com', link: 'https://www.virgingalactic.com/' },
  {
    name: 'ISS',
    link: 'https://www.nasa.gov/mission_pages/station/main/index.html',
  },
  { name: '0 800 000 000 00', link: '#' },
];

const Footer = () => {
  return (
    <div className="bg-footer bg-top bg-no-repeat bg-cover">
      <div className="max-w-[1220px] mx-auto py-20">
        <div className="pt-[100px] pb-[150px]" id="footer">
          <ul className="grid grid-cols-3 w-[600px] text-base ml-auto">
            <li className="flex flex-col justify-between">
              <p>Helpdesk operates intergalactically and suborbitally</p>
              <p>Visitor hours strictly by appointment</p>
            </li>
            <li>
              <ul>
                {NAVELEMENTS.map(el => (
                  <li key={el.name} className="mb-5 last:mb-0">
                    <Link
                      activeClass="active"
                      to={el.linkId}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="uppercase cursor-pointer transition-colors ease-in-out delay-150 hover:text-accent-red focus:text-accent-red duration-300"
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <ul>
                {CONTACTS.map(el => (
                  <li key={el.name} className="mb-5 last:mb-0">
                    <a
                      href={el.link}
                      className="uppercase transition-colors ease-in-out delay-150 hover:text-accent-red focus:text-accent-red duration-300"
                    >
                      {el.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
