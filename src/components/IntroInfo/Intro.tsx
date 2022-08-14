import BooksAnimationLogo from "../../assets/BooksAnimation.gif";
import IntroText from "./IntroText";
const Intro = () => {
  return (
    <div className="space-y-5 intro-resize md:mt-10">
      <img className="books-logo" src={BooksAnimationLogo} alt="" />
      <IntroText />
    </div>
  );
};

export default Intro;
