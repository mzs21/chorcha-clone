import Cards from "./components/Cards/Cards";
import Intro from "./components/IntroInfo/Intro";
import Navbar from "./components/Navbar/Navbar";
import StatisticsCards from "./components/Statistics/StatisticsCards";
function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <StatisticsCards />
      <Cards />
    </div>
  );
}

export default App;
