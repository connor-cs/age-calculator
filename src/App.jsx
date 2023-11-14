import { useState, useEffect } from "react";
import moment from "moment";
import Input from "./Input";

import "./App.css";

function App() {
  const [isValid, setIsValid] = useState(true);
  const [input, setInput] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [results, setResults] = useState({
    days: "",
    months: "",
    years: "",
  });
  const [currentDate, setCurrentDate] = useState({
    day: "",
    month: "",
    year: "",
  })
  const [errors, setErrors] = useState({
    dayError: true,
    monthError: false,
    yearError: false
  })

  // console.table(values);

  // console.log(today);
  // console.log(month);
  // console.log(currentYear);
  // console.log(todaysDate);

  useEffect(() => {
    const todaysDate = moment().format();
    const currentYear = todaysDate.slice(0, 4);
    const today = todaysDate.slice(8, 10);
    const currentMonth = todaysDate.slice(5, 7);
    setCurrentDate({
      day: today,
      month: currentMonth,
      year: currentYear
    })
  },[]);

  const validate = () => {
    if (parseInt(currentDate.year) < parseInt(input.year)) {
      setIsValid(false)
      setErrors({...errors, yearError: true})
    }
    if (parseInt(currentDate.month) > 12 && parseInt(currentDate.month) < 1) {
      setIsValid(false)
      setErrors({...errors, monthError: true})
    }
  };

  return (
    <>
      <div className="main">
        <Input isValid={isValid} setInput={setInput} input={input} errors={errors}/>
        <hr></hr>
        <div className="display-section">
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
