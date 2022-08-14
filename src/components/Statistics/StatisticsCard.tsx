interface IStatisticsCardProps {
  text: string;
  quantity: number;
  fontColor: string;
}

const StatisticsCard = ({
  text,
  quantity,
  fontColor,
}: IStatisticsCardProps) => {
  return (
    <div className="statistics-card ">
      <div className={`quantity-size ${fontColor}`}>{quantity}+</div>
      <div className="text-size">{text}</div>
    </div>
  );
};

export default StatisticsCard;
