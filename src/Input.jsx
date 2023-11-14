const Input = ({ isValid, setInput, input, errors }) => {
  return (
    <div className="input-section">
      <div className="input">
        <label htmlFor="day" className={errors.dayError ? "invalid" : null}>
          DAY
        </label>
        <input
          name="day"
          type="number"
          required
          placeholder="DD"
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          className={errors.dayError ? "invalid" : null}
        />
        {errors.dayError ? <p>Must be a valid day</p> : null}
      </div>
      <div className="input">
        <label htmlFor="month" className={errors.monthError ? "invalid" : null}>
          MONTH
        </label>
        <input
          name="month"
          type="number"
          required
          placeholder="MM"
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          className={errors.monthError ? "invalid" : null}
        />
        {errors.monthError ? <p>Must be a valid month</p> : null}
      </div>
      <div className="input">
        <label
          htmlFor="year"
          className={errors.yearError ? "invalid" : null}
          required
        >
          YEAR
        </label>
        <input
          name="year"
          type="number"
          required
          placeholder="YYYY"
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          className={errors.yearError ? "invalid" : null}
        />
        {errors.yearError && <p>Must be in the past</p>}
      </div>
    </div>
  );
};

export default Input;
