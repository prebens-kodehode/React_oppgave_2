import { useState, useEffect } from "react";
import style from "./Modal.module.css";
import cancel from "../../assets/SVG/cancel.svg";

export function Modal() {
  const [state, setState] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [formInputs, setFormInputs] = useState({
    fname: "",
    lname: "",
    email: "",
    ssn: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalVisible(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!modalVisible) {
    return null;
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formInputs);
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
            <div className={style.cookiesButtons}>
              <button
                className={style.cookieYes}
                onClick={handleCookieButtonClick}
              >
                YES
              </button>
              <button
                className={style.cookieNo}
                onClick={handleCookieButtonClick}
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
