import { Form } from 'react-bootstrap';
import '../../App.css'; // Import your CSS file

// eslint-disable-next-line react/prop-types
function MySlider({ data, step, min, max }) {
    const handleChange = () => {
        // const value = e.target.value;
        // You can define a threshold value to determine when the color changes
        // const threshold = 50; // Adjust as needed

        // Change the background color based on the threshold
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
                style={{
                    '--slider-thumb-color': 'green', // Change this to the desired color
                }}
            />
            <div className="breakpoint-labels" style={{ width: '78%', marginLeft: '2.7rem' }}>
                {/* eslint-disable-next-line react/prop-types */}
                {data?.map((value) => (
                    <span key={value}>{value}</span>
                ))}
            </div>
        </div>
    );
}

export default MySlider;
