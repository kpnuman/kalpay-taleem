import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}

export default function DiscreteSlider({ data, step, min, max, defaultValue, instalment=false }) {
    const classType = !instalment ? 'breakpoint-labels' : 'instalment-breakpoint-labels';

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Instalments"
                defaultValue={defaultValue}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                className="calculator-spacing w-sm-50 range-slider mx-xs-0"
                step={step}
                marks
                min={min}
                max={max}
                color="secondary"
            />
            <div className={classType} style={{ width: '78%', marginLeft: '2.7rem' }}>
                {data?.map((value) => (
                    <span key={value}>{value}</span>
                ))}
            </div>
        </Box>
    );
}
