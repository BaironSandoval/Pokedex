import { useContext } from "react";
import { UserNameContext } from "../../context/UserNameContext";
import { useLocation, useNavigate } from "react-router-dom";
import pokeball from "../../images/giphy.gif";
import logo from "../../images/logo.png"
import UserNameForm from "../../components/home/UserNameForm/UserNameForm";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from ?? "/pokedex";
  const { saveUserName } = useContext(UserNameContext);

  const handleSendName = (userNameValue) => {
    saveUserName(userNameValue);
    navigate(from);
  };
  return (
    <section className="container_home">
      <div className="container_home-username">
        <div className="container-giphy-embed">
          <img src={pokeball} alt="pokeball" />
        </div>
        <div className="container-info">
          <div className="logo-container">
            <img
              src={logo}
              alt="Pokedex"
            />
          </div>
          <h1 className="home__title">¡Hello Trainer!</h1>
          <p className="home__description">To start, give me your name</p>
        </div>
        <div className="home__form-container">
          <UserNameForm onSendName={handleSendName} />
        </div>
      </div>
    </section>
  );
};

export default Home;
