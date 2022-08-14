import StatisticsCard from "./StatisticsCard";
const StatisticsCards = () => {
  return (
    <div className="statistics-cards ">
      <StatisticsCard
        text="Students"
        quantity={30000}
        fontColor="text-lime-500"
      />
      <StatisticsCard
        text="Questions"
        quantity={20000}
        fontColor="text-cyan-500"
      />
      <StatisticsCard
        text="Exams Taken"
        quantity={100000}
        fontColor="text-yellow-500"
      />
      <StatisticsCard
        text="Minutes Practiced"
        quantity={1000000}
        fontColor="text-red-500"
      />
    </div>
  );
};

export default StatisticsCards;
