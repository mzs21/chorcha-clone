import ChorchaLogo from "../../assets/chorcha-logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar ">
        <div className="chorcha-logo ">
          <a href="https://chorcha.net/">
            <img className="h-12" src={ChorchaLogo} alt="চর্চা" />
          </a>
        </div>
        <span className="middleOptions ">
          <div className="">
            <a href="https://teachers.chorcha.net/">Teachers</a>
          </div>
          <div className="">
            <a href="https://forum.chorcha.net/">Forum</a>
          </div>
          <div className="">
            <a href="https://chorcha.net/leaderboard">Leaderboard</a>
          </div>
        </span>
        <span className="auths ">
          <div>
            <a href="https://chorcha.net/auth/login">Log in</a>
          </div>
          <button className="signUp">
            <a href="https://chorcha.net/auth/register">Sign up</a>
          </button>
        </span>
      </nav>
    </>
  );
};

export default Navbar;
