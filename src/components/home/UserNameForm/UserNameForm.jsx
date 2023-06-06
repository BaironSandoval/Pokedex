import { useRef, useState } from "react";
import "./UserNameForm.css";
import logoBusqueda from '../../../images/busqueda.png'

const UserNameForm = ({ onSendName }) => {
  const [userNameValue, setUserNameValue] = useState("");
  const [nameError, setNameError] = useState("");
  const hasInputAlreadyTouched = useRef(false);

  const handleChange = (e) => {
    const nameValue = e.target.value;
    if (!hasInputAlreadyTouched.current) hasInputAlreadyTouched.current = true;

    if (!nameValue) setNameError("The name is empty!");
    else if (/[^a-z ]/i.test(nameValue))
      setNameError("Only letters and spaces are permitted.");
    else if (!/^[a-z ]{2,} ?$/i.test(nameValue))
      setNameError("The name must have a minimum of two letters");
    else setNameError("");

    setUserNameValue(nameValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameError && hasInputAlreadyTouched.current) onSendName(userNameValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Boolean(nameError) && <p>{nameError}</p>}
     <div className="container-input">
      <input className="input-username"
        type="text"
        placeholder="Your name... "
        value={userNameValue}
        onChange={handleChange}
      />
      <div className="container-button-start">
        <button type="submit"><img src={logoBusqueda} alt="busqueda" className="fa-solid fa-magnifying-glass" /></button>
      </div>
      
     </div>
    </form>
  );
};

export default UserNameForm;
