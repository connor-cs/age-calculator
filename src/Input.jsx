import { useState } from "react";

const Input = () => {
  const [isValid, setIsValid] = useState(true);
  const [values, setValues] = useState({
    day: "",
    month: "",
    year: "",
  });

  console.table(values);
  const validate = () => {};

  return (
    <div className="input-section">
      <div className="input">
        <label htmlFor="day">DAY</label>
        <input
          name="day"
          type="number"
          required
          placeholder="DD"
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className="input">
        <label htmlFor="month">MONTH</label>
        <input
          name="month"
          type="number"
          required
          placeholder="MM"
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className="input">
        <label htmlFor="year" required>
          YEAR
        </label>
        <input
          name="year"
          type="number"
          required
          placeholder="YYYY"
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default Input;
