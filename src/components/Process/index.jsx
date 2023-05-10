import Galaxy from './Galaxy/Galaxy';

const Process = () => {
  return (
    <div className="bg-process bg-top bg-no-repeat bg-cover">
      <div className="max-w-[1220px] mx-auto py-20">
        <p
          className="text-6xl leading-none font-space mb-24 uppercase"
          id="how"
        >
          how it <br /> all goes
        </p>

        <Galaxy />
      </div>
    </div>
  );
};

export default Process;
