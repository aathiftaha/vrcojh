import { usePDF } from 'react-to-pdf';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Button from '@mui/material/Button';

const getMonthYear = date => {
   if (!date) return ''
   date = new Date(date)
   return `${date.getMonth()+1}-${date.getFullYear()}`
}

const Resume = (props) => {
   console.log(props)
   const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
   return (
      <div>
         <Button onClick={() => toPDF()} variant="contained" endIcon={<CloudDownloadIcon />}>
        Download Resume
      </Button>
         <div style={{fontSize: '20px'}} ref={targetRef}>
            Name: `{props.name}`
            Tech Stack: `{props.tech.join(',')}`
            Graduation Year & Month: `{getMonthYear(props.graduationYear)}`
         </div>
      </div>
   )
}

export default Resume