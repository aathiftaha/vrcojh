import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Candidate Details</h1>
      <p>
        Name: <span>Aathif Taha</span>
      </p>
      <p>
        Highest Degree Passout Year: <span>MCA - Apr 2024</span>
      </p>
      <p>
        Technologies/Languages:{' '}
        <span>Python, SQL, Javascript, React, HTML, CSS, Tableau</span>
      </p>
      <p>
        <a href="/path-to-resume.pdf" download style={{ margin: '30px 0' }}>
          Download Resume
        </a>
      </p>
      <br />
      <Link to="/bmi-calculator">Go to BMI Calculator</Link>
    </div>
  );
}