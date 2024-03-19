import { useState, useEffect } from "react";
import moment from "moment";
import Input from "./Input";

import "./App.css";

function App() {
  const [isValid, setIsValid] = useState(true);
  //user input
  const [input, setInput] = useState({
    year: "",
    month: "",
    day: "",
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
  const isValidNumber = (value) => !isNaN(parseInt(value, 10));

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

  useEffect(() => {
    if (isValidNumber(input.year)) {
      validate();
    }
  }, [input.year]);
  
  useEffect(() => {
    if (isValidNumber(input.month)) {
      validate();
    }
  }, [input.month]);

  useEffect(() => {
    if (isValidNumber(input.day)) {
      validate();
    }
  }, [input.day]);

  //is user input valid?
  const validate = () => {
    const daysInMonth = moment(currentDate.month).daysInMonth();

    if (parseInt(currentDate.year) < parseInt(input.year)) {
      setIsValid(false);
      setErrors((prevErrors) => ({ ...prevErrors, yearError: true }));
      console.log("invalid year");
    }

    else if (
      isNaN(parseInt(input.month, 10)) ||
      parseInt(input.month, 10) > 12 ||
      parseInt(input.month, 10) < 1
    ) {
      setIsValid(false);
      setErrors((prevErrors) => ({ ...prevErrors, monthError: true }));
      console.log("invalid month");
    }

    else if (!(+input.day >= 1) || !(+input.day <= daysInMonth)) {
      setIsValid(false);
      setErrors((prevErrors) => ({ ...prevErrors, dayError: true }));
      console.log("invalid day");
    } else {
      setIsValid(true);
      setErrors({ dayError: false, monthError: false, yearError: false });
    }
  };

  const submit = () => {
    validate();
    if (errors.dayError || errors.yearError || errors.monthError) {
      return;
    }
    const userBirthDate = moment([input.year, +input.month - 1, input.day]);
    const now = moment();
    const diff = moment.duration(now.diff(userBirthDate));

    const years = diff.years();
    const months = diff.months();
    const days = diff.days();

    setResults({
      years: years.toString(),
      months: months.toString(),
      days: days.toString(),
    });
  };

  console.log("Errors:", errors);
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
              <span>{results.years.length > 0 ? results.years : "--"}</span>{" "}
              years
            </li>
            <li>
              <span>{results.months.length > 0 ? results.months : "--"}</span>{" "}
              months
            </li>
            <li>
              <span>{results.days.length > 0 ? results.days : "--"}</span> days
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
