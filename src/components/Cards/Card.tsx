interface ICardProps {
  backgroundColor: string;
  children?: React.ReactNode;
  text: string;
}
const Card = ({ backgroundColor, children, text }: ICardProps) => {
  return (
    <div>
      <div className={`card ${backgroundColor}`}>{children}</div>
      <div className="font-semibold mt-2 text-lg">{text}</div>
    </div>
  );
};

export default Card;
