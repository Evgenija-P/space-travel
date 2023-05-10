import data from '../../data/missions.json';
import Info from '../Missions/Informations';

const About = () => {
  return (
    <div className="bg-info bg-center bg-no-repeat bg-cover">
      <div className="max-w-[1220px] mx-auto pt-20">
        <h1 className="text-6xl leading-none font-space mb-24">About us</h1>
        {data.map((el, index) => (
          <Info info={el} key={index} />
        ))}
      </div>
    </div>
  );
};

export default About;
