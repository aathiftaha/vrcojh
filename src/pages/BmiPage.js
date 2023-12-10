import { useState } from 'react';
import { calculateBMI } from '../utils/utils';

function BmiPage() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const onSubmit = (evt) => {
    evt.preventDefault();
    const calculatedBMI = calculateBMI(weight, height);
    setBmi(calculatedBMI);
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight in kilograms"
          min="1"
          max="300"
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height in meters"
          step="0.01"
          min="0.1"
          max="3.0"
        />
        <button type="submit">Calculate</button>
      </form>
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
}

export default BmiPage;