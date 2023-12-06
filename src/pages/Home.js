import {useState} from 'react';
import TextField from "@mui/material/TextField"
import * as React from 'react';

import MultiSelect from '../components/MultiSelect';
import Resume from '../components/Resume';
import CustomDatePicker from '../components/CustomDatePicker';

 


export default function Home() {
    const [name, setName] = useState('');
    const [techName, setTechName] = React.useState([]);
    const [date, setDate] = useState(null)
    
    const onNameChange = (evt) => {
        console.log(evt.target)
        setName(evt.target.value)
        }
        console.log(new Date(date))
    return (

        <div>
            <TextField
                error
                id="standard-error"
                label="Firstname"
                defaultValue="Hello World"
                variant="standard"
                value={name}
                onChange={onNameChange}
            />
            <div id="date-picker" style={{width:'200px'}}>
                <CustomDatePicker date={date} onDateChange={setDate} />
            </div>
            <MultiSelect onChange={setTechName} techName={techName}/>
            <Resume name={name} tech={techName} graduationYear={date} />
        </div>
    )
}

