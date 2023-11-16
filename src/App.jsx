import { useState, useEffect } from "react";
import moment from "moment";
import dayjs from "dayjs";
import Input from "./Input";


import "./App.css";

function App() {
  const [isValid, setIsValid] = useState(true);
  //user input
  const [input, setInput] = useState({
    year: "1992",
    month: "6",
    day: "50",
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
    const userBirthDateUTCString = moment([input.year, (+input.month - 1), input.day]).utc()['_d'].toString()
    const now = moment().utc()['_d'].toString()
    const diff = moment.duration(now.diff(userBirthDateUTCString))
   const birthDate = new Date(userBirthDateUTCString).toUTCString()
   
   console.log('diff',diff)
   console.log(birthDate)
   
    // const userBirthDate = dayjs({year :+input.year, month :+input.month, day :+input.day})
    // console.log(userBirthDateUTCString.toString())
    // const now = dayjs()
    // console.log(now)
    // console.log(userBirthDate.isValid())
    // console.log(moment.duration().days())
    // console.log(now.diff(userBirthDate))
    // console.log(userBirthDate.duration('d'))
    // console.log(now.duration(3,'days'))
    // console.log(userBirthDate.duration(now, 'years', 'months', 'days'))
    
    if (errors.dayError === false && errors.yearError=== false && errors.monthError===false) {
      console.log('')
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
