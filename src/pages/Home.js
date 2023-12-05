import {useState} from 'react';
import TextField from "@mui/material/TextField"
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MultiSelect from '../components/MultiSelect';

 function DatePickerViews() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
      
        <DatePicker label={'"month" and "year"'} views={['month', 'year']} />
      </DemoContainer>
    </LocalizationProvider>
  );
}


export default function Home() {
    const [name, setName] = useState('');

    const onNameChange = (evt) => {
        console.log(evt.target)
        setName(evt.target.value)
        }

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
                <DatePickerViews />
            </div>
            <MultiSelect />
            
        </div>
    )
}

