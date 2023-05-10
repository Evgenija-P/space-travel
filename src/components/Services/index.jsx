import Photographer from '../../images/photographer.png';
import Button from '../Button';

const Services = () => {
  return (
    <div className="pb-[200px] mt-[100px]" id="services">
      <p className="text-6xl leading-none font-space mb-24 uppercase">
        Additional <br />
        services
      </p>
      <div className="flex justify-between">
        <div className="w-[650px] mr-14 text-2xl">
          <p className="mb-[25px]">
            A professional photographer will fly with you
          </p>
          <ul className="mb-[25px]">
            <li className="pl-12 relative before:content-[''] before:absolute before:w-5 before:h-5 before:rounded-full before:bg-prime-color before:top-2 before:left-0">
              20 professionally edited photos
            </li>
            <li className="pl-12 relative before:content-[''] before:absolute before:w-5 before:h-5 before:rounded-full before:bg-prime-color before:top-2 before:left-0">
              photo book
            </li>
            <li className="pl-12 relative bbefore:content-[''] before:absolute before:w-5 before:h-5 before:rounded-full before:bg-prime-color before:top-2 before:left-0">
              fridge magnet as a gift
            </li>
          </ul>
          <p className="text-xs">
            The cost of a photo session in zero gravity is 100 000$. Pay extra
            50 000$ and get all the photos with processing and on a disk
          </p>
        </div>
        <div className="w-[400px] flex flex-col justify-between relative">
          <img
            className="absolute w-[192px] h-[150px] top-[-130px] right-0"
            src={Photographer}
            alt="Photographer"
          />
          <Button>buy photography services</Button>
          <Button>I want a photo disc</Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
