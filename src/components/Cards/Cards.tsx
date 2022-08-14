import Card from "./Card";
import CardOne from "./SubCards/CardOne";
import CardThree from "./SubCards/CardThree";
import CardTwo from "./SubCards/CardTwo";
const Cards = () => {
  return (
    <div className="cards">
      <Card
        backgroundColor="bg-gradient-to-r from-violet-500 to-blue-800"
        text="Questions"
      >
        <CardOne />
      </Card>
      <Card
        backgroundColor="bg-gradient-to-r from-green-600 to-cyan-500"
        text="Leaderboard"
      >
        <CardTwo />
      </Card>
      <Card
        backgroundColor="bg-gradient-to-r from-sky-600 to-blue-500"
        text="Mocktest"
      >
        <CardThree />
      </Card>
      <Card
        backgroundColor="bg-gradient-to-r from-indigo-700 to-blue-700"
        text="Performance Analysis"
      />
      <Card
        backgroundColor="bg-gradient-to-r from-pink-600 to-rose-500"
        text="Review"
      />
      <Card
        backgroundColor="bg-gradient-to-r from-cyan-500 to-sky-600"
        text="Live Exam"
      />
    </div>
  );
};

export default Cards;
