import { useState, useEffect } from "react";
import style from "./Modal.module.css";
import cancel from "../../assets/SVG/cancel.svg";

interface ModalProps {
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
}

export function Modal({ setFirstName }: ModalProps) {
  const [state, setState] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [formInputs, setFormInputs] = useState({
    fname: "",
    lname: "",
    email: "",
    ssn: "",
  });
  const [buttonRow, setRow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalVisible(true);
    }, 5000000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!modalVisible) {
    return null;
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formInputs);
    setFirstName(formInputs.fname);
    setState(2);
  };

  const handleCookieButtonClick = () => {
    setModalVisible(false);
  };

  if (!modalVisible) {
    return null;
  }

  return (
    <div className={style.modal}>
      <div className={style.modalCard}>
        <img className={style.cancel} src={cancel} alt="close symbol" />
        {state === 1 && (
          <div className={style.formWrapper}>
            <h3>
              We need your personal information if you want to use this page.
            </h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="fname">First name:</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={formInputs.fname}
                required
                onChange={handleInputChange}
              ></input>
              <label htmlFor="lname">Last name:</label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={formInputs.lname}
                required
                onChange={handleInputChange}
              ></input>
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formInputs.email}
                onChange={handleInputChange}
              ></input>
              <label htmlFor="ssn">Social Security Number:</label>
              <input
                type="password"
                id="ssn"
                name="ssn"
                required
                value={formInputs.ssn}
                onChange={handleInputChange}
              ></input>

              <button type="submit">Submit</button>
            </form>
          </div>
        )}
        {state === 2 && (
          <div className={style.cookiesWrapper}>
            <h3>Accept all our cookies forever?</h3>
            <div
              className={
                buttonRow ? style.cookiesButtons : style.cookiesButtonsReverse
              }
            >
              <button
                className={style.cookieYes}
                onClick={handleCookieButtonClick}
              >
                YES
              </button>
              <button
                className={style.cookieNo}
                onClick={handleCookieButtonClick}
                onMouseEnter={() => setRow((prevState) => !prevState)}
              >
                NO
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
