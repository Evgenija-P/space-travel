import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const images = [
  {
    url: 'https://media.cnn.com/api/v1/images/stellar/prod/220727110543-06-space-perspective.jpg?c=original&q=w_1280,c_fill',
    legend: 'future of space tourism',
  },
  {
    url: 'https://ychef.files.bbci.co.uk/976x549/p01x0jgd.jpg',
    legend: 'future of space tourism',
  },
  {
    url: 'https://www.gozerog.com/wp-content/uploads/2022/09/Brief-History-of-Space-Tourism-scaled-1-1536x866.jpg',
    legend: 'future of space tourism',
  },
  {
    url: 'https://southjets.com/wp-content/uploads/2019/02/Space-Tourism-SAJ.jpg',
    legend: 'South American Jets',
  },
  {
    url: 'https://nats.aero/blog/wp-content/uploads/2021/07/RB-Space.jpg',
    legend: 'future of space tourism',
  },
  {
    url: 'https://industryeurope.com/downloads/9107/download/Stratoflight.jpg?cb=fcc00c0de7d0f203c5bf0711e639f059',
    legend: 'future of space tourism',
  },
  {
    url: 'https://sm.mashable.com/mashable_in/seo/7/7895/7895_duwq.jpg',
    legend: 'future of space tourism',
  },
];

const Slider = () => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.url} alt={image.legend} />
          <p className="legend">{image.legend}</p>
        </div>
      ))}
    </Carousel>
  );
};
export default Slider;
