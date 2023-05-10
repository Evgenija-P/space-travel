const Table = ({ data }) => {
  return (
    <div className="mb-[50px] border border-prime border-x-transparent flex justify-between flex-auto m-0">
      {data.map((el, index) => (
        <ul className="text-center" key={index + el.value}>
          <li className="text-base border-b border-prime p-[10px]">
            {el.position}
          </li>
          <li className="text-[36px] leading-10 font-bold pt-[10px]">
            {el.value}
          </li>
          <li className="text-base leading-10 font-bold pb-[10px]">
            {el.units}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Table;
