import {useState} from 'react';

export default function BmiPage() {
    const [weight, setWeight] = useState('');
    const [weightErr, setWeightErr] = useState('');
    const [height, setHeight] = useState('');
    const [heightErr, setHeightErr] = useState('');
  
    const onWeightChange = (evt) => {
      const weightVal = evt.target.value;
      if (weightVal < 1 || weightVal > 300) {
        setWeightErr('Weight must be between 1 to 300')
      } else {
        setWeightErr('')
        setWeight(weightVal)
      }
    }
  
    const onHeightChange = (evt) => {
      const heightVal = evt.target.value;
      if (heightVal < 1 || heightVal > 3) {
        setHeightErr('Height must be between 0.1 to 3.0')
      } else {
        setHeightErr('')
        setHeight(heightVal)
      }
    }
  
    const calcBmi = () => {
        if (weight && height) {
          return (weight/height).toFixed(1)
        }
        return ''
      }
      
    return (
      <div>
        <input 
            type="number" 
            value={weight} 
            placeholder="Enter weight in Kgs" 
            onChange={onWeightChange}
        />
        <p style={{marginBottom: '30px', fontSize:'8px'}}>{weightErr}</p>
        <input 
            type="number" 
            value={height} 
            placeholder="Enter height in meters" 
            onChange={onHeightChange}
        />
        <p style={{marginBottom: '30px', fontSize:'8px'}}>{heightErr}</p>
        <p>BMI of the user is: {calcBmi()}</p>

      </div> 
    )
  }