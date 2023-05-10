import Button from '../Button';
import Services from '../Services';
import Slider from './Slider';

const Offers = () => {
  return (
    <div className="bg-offers bg-top bg-no-repeat bg-cover">
      <div className="max-w-[1220px] mx-auto py-20">
        <p className="text-6xl leading-none font-space mb-24 uppercase">
          special <br /> offers
        </p>
        <div className="flex justify-between">
          <div className="w-[500px]">
            <div className="mb-6 border border-prime px-20 py-10 text-center min-h-[400px] flex flex-col justify-between">
              <p className="text-2xl w-[236px] mx-auto">
                Book a flight{' '}
                <span className="text-accent-red">right now </span>
                and get a discount 1000$
              </p>
              <div>
                <p className="text-right text-sm mb-4 relative before:content-[''] before:absolute before:w-[68px] before:h-[2px] before:bg-accent-red before:top-[9px] before:right-0 before:rotate-12">
                  250 000$
                </p>
                <p className="text-5xl">249 000$</p>
              </div>
            </div>
            <Button>book your flight</Button>
          </div>
          <div className="w-[500px]">
            <div className="mb-6 border border-prime px-20 py-10 text-center min-h-[400px] flex flex-col justify-between">
              <p className="text-2xl w-[236px] mx-auto">
                Refer a friend and{' '}
                <span className="text-accent-red">get 10% discount</span> next
                flight if you come back
              </p>
              <div>
                <p className="text-right text-sm mb-4 relative before:content-[''] before:absolute before:w-[68px] before:h-[2px] before:bg-accent-red before:top-[9px] before:right-0 before:rotate-12">
                  250 000$
                </p>
                <p className="text-5xl">225 000$</p>
              </div>
            </div>
            <Button>book your flight</Button>
          </div>
        </div>
        <Services />
        <div className="text-center">
          <div className="mb-14 border border-prime-color py-[50px]">
            <Slider />
          </div>
          <p className="text-2xl font-space">
            You know about the Cosmic Law - imagine what you want, and it will
            enter your life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
