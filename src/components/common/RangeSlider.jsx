import { Form } from 'react-bootstrap';
import '../../App.css'; // Import your CSS file

function MySlider({ data, step, min, max }) {
    const handleChange = (e) => {
        const value = e.target.value;
        // You can define a threshold value to determine when the color changes
        const threshold = 50; // Adjust as needed

        // Change the background color based on the threshold
        const backgroundColor = value >= threshold ? 'green' : 'red';

        // Apply the background color to the slider track
        // e.target.style.backgroundColor = backgroundColor;
    };

    return (
        <div>
            <Form.Range
                step={step}
                min={min}
                max={max}
                className="calculator-spacing w-75 w-sm-50 range-slider mx-xs-0"
                onChange={handleChange} // Handle slider value change
                variant={"danger"}
            />
            <div className="breakpoint-labels" style={{ width: '78%', marginLeft: '2.7rem' }}>
                {data?.map((value) => (
                    <span key={value}>{value}</span>
                ))}
            </div>
        </div>
    );
}

export default MySlider;
