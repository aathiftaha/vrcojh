import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function CustomDatePicker({date, onDateChange}) {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker 
            label={'"month" and "year"'} 
            views={['month', 'year']}
            value={date}
            onChange={(newValue) => onDateChange(newValue)}
        />
      </LocalizationProvider>
    );
  }

export default CustomDatePicker