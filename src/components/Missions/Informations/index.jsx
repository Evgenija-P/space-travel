import Button from '../../Button';
import Table from '../Table';

const Info = ({ info }) => {
  const { title, photo, subtitle, text, table } = info;

  return (
    <div className="flex pb-[120px] justify-between odd:flex-row-reverse">
      <img alt={title} src={photo} />
      <div className="w-[600px] flex flex-col justify-between">
        <div>
          <h3 className="text-3xl leading-9 font-bold mb-1">{title}</h3>
          <h5 className="text-xs leading-4 text-accent-blue mb-8 uppercase">
            {subtitle}
          </h5>
        </div>
        <div>
          <ul className="grid gap-4 grid-cols-3 mb-8 text-base">
            <li className="">{text.first}</li>
            <li className="">{text.second}</li>
            <li className="">{text.third}</li>
          </ul>
          <Table data={table} />
        </div>
        <Button>book a flight</Button>
      </div>
    </div>
  );
};

export default Info;
