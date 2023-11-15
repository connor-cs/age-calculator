import { useState, useEffect } from "react";
import moment from "moment";
import Input from "./Input";

import "./App.css";

function App() {
  const [isValid, setIsValid] = useState(true);
  //user input
  const [input, setInput] = useState({
    day: "16",
    month: "6",
    year: "1992",
  });
  //results to be displayed after calculation
  const [results, setResults] = useState({
    days: "",
    months: "",
    years: "",
  });
  //current date for comparison
  const [currentDate, setCurrentDate] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [errors, setErrors] = useState({
    dayError: false,
    monthError: false,
    yearError: false,
  });

  //get today's info on load
  useEffect(() => {
    const todaysDate = moment().format();
    const currentYear = todaysDate.slice(0, 4);
    const today = todaysDate.slice(8, 10);
    const currentMonth = todaysDate.slice(5, 7);
    setCurrentDate({
      day: today,
      month: currentMonth,
      year: currentYear,
    });
    // console.log('test',moment(currentMonth).daysInMonth())
  }, []);

  //is user input valid?
  const validate = () => {
    const daysInMonth = moment(currentDate.month).daysInMonth();
    if (parseInt(currentDate.year) < parseInt(input.year)) {
      setIsValid(false);
      setErrors({ ...errors, yearError: true });
      console.log('bad year')
    }
    if (+input.month > 12 || +input.month < 1) {
      setIsValid(false);
      setErrors({ ...errors, monthError: true });
      console.log('bad month')
    }
    if (!(+input.day >= 1) || !(+input.day <= daysInMonth)) {
      setIsValid(false)
      setErrors({...errors, dayError: true})
    } else console.log('okay');
  };

 
  
  const submit = () => {
    validate()
    const userBirthDate = moment([input.year, (+input.month - 1), input.day])
    const now = moment()

    console.log(userBirthDate.duration(now, 'years', 'months', 'days'))
    
    if (errors.dayError === false && errors.yearError=== false && errors.monthError===false) {
      console.log('klkjlk')
    }
  };

  return (
    <>
      <div className="main">
        <Input
          isValid={isValid}
          setInput={setInput}
          input={input}
          errors={errors}
        />
        <hr></hr>

        <div className="display-section">
          <img
            onClick={() => submit()}
            className="arrow"
            src="/assets/images/icon-arrow.svg"
            alt="arrow"
          />
          <ul>
            <li>
              <span>--</span> years
            </li>
            <li>
              <span>--</span> months
            </li>
            <li>
              <span>--</span> days
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
