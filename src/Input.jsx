const Input = () => {
  return (
    <div className="input-section">
      <div className="input">
        <label htmlFor="day">Day</label>
        <input name="day" type="number" required placeholder="DD"/>
      </div>
      <div className="input">
        <label htmlFor="month">Month</label>
        <input name="month" type="number" required placeholder="MM"/>
      </div>
      <div className="input">
        <label htmlFor="year" required>
          Year
        </label>
        <input name="year" type="number" required  placeholder="YYYY"/>
      </div>
    </div>
  );
};

export default Input;
