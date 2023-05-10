import Elon from '../../images/ElonMusk.png';
import Button from '../Button';

const Contacts = () => {
  return (
    <div className="bg-[#010203]">
      <div className="max-w-[1220px] mx-auto py-24" id="guarantees">
        <div className="grid gap-x-24 grid-cols-2">
          <div>
            <p className="text-6xl leading-none font-space mb-11 uppercase">
              contacts
            </p>
            <p className="mb-24 text-2xl">
              Leave your contacts and we will call you back in the next 100
              years!
            </p>
            <form className="flex flex-col gap-y-12">
              <input
                type="text"
                className="bg-[#010203] border-b border-prime-color pr-6 pl-1 pt-3 pb-5 text-sm ursor-pointer"
                placeholder="Full name"
              />
              <input
                type="text"
                className="bg-[#010203] border-b border-prime-color pr-6 pl-1 pt-3 pb-5 text-sm ursor-pointer"
                placeholder="The name of the child (or grandchild), just in case"
              />
              <input
                type="tel"
                className="bg-[#010203] border-b border-prime-color pr-6 pl-1 pt-3 pb-5 text-sm cursor-pointer"
                placeholder="Telephone"
              />
              <Button>book your flight</Button>
            </form>
          </div>
          <div>
            <p className="text-6xl leading-none font-space mb-11 uppercase">
              guarantiees
            </p>
            <p className="mb-10 text-2xl">
              None of my rockets have yet made a successful attempt, because you
              were not in it! Be first! Colonize Mars! Elon Musk
            </p>
            <img
              className="w-[396px] h-[396px] ml-auto"
              src={Elon}
              alt="Elon Musk"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
