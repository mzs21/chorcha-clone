const CardTwo = () => {
  return (
    <table className="table-auto bg-white text-black rounded-lg pb-10">
      <thead>
        <tr>
          <th className="pl-6">Rank</th>
          <th className="pl-6">Name</th>
          <th className="pl-6">Point</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b text-left ">
          <td className="py-4 md:py-6 lg:py-5 text-sm pl-6">1</td>
          <td className="pl-3 md:pl-5 text-sm ">Ashraful Islam Ashiq</td>
          <td className="text-sm pl-6">879.2K</td>
        </tr>
        <tr className="border-b text-left ">
          <td className="py-4 md:py-6 lg:py-5 text-sm pl-6">2</td>
          <td className="pl-3 md:pl-5 text-sm ">M Tanvir Uddin Khan </td>
          <td className=" text-sm pl-6">767.3K</td>
        </tr>
        <tr className="text-left">
          <td className="py-4 md:py-7 lg:py-6 text-sm pl-6">3</td>
          <td className=" md:pl-5 text-sm pl-2">ｉｔ'ｓ ＳＡＫＩＢ</td>
          <td className=" text-sm pl-6 pr-6">203.7K</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTwo;
