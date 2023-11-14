/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import BasicTable from './CalculatorTable.jsx';
const loader = '/images/loader-gif.gif';

const data = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70]
const secondSliderData = [1, 2, 3, 4, 5, 6, 7, 8, 9]
export default function DiscreteSlider() {
    const [downPayment, setDownPayment] = useState(25);
    const [instalmentPlan, setInstalmentPlan] = useState(1);
    const [price, setPrice] = useState(0);
    const [apiData, setApiData] = useState(null);
    const [showTable, setShowTable] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    function getDownPayment(val){
        setDownPayment(val);
    }
    function getInstalmentPlan(val){
        setInstalmentPlan(Number(val));
    }

    function calculateTaleem(){
        if (price === 0)
            return;

        setShowLoader(true);
        setShowTable(false);

        const baseUrl = 'https://admin.staging.kalpayfinancials.com/graphql';

        // Define your GraphQL query and variables
        const query = `
                  query getInstallmentCalculationForTaleem($price: Float!, $downPayment: Float!, $months: Float!) {
                    getInstallmentCalculationForTaleem(
                      price: $price
                      downPayment: $downPayment
                      months: $months
                    )
                  }
                `;

        const variables = {
            downPayment,
            months: instalmentPlan,
            price
        };

        // Create the request options
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                operationName: 'getInstallmentCalculationForTaleem',
                query: query,
                variables: variables,
            }),
        };

        // Make the fetch request
        fetch(baseUrl, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setApiData(data);
                setShowLoader(false);
                setShowTable(true);
            })
            .catch((error) => {
                console.error('Error:', error);
                setShowLoader(false);
            });
    }

    return (
        <div>
            <div>
                <p className="pt-5 step-description text-start px-5"> Add your fee amount to know your tentative installment plan</p>
                <input onChange={(e)=>setPrice(Number(e?.target?.value))} className="text-start price-input" type="number" placeholder="Price *" required={true} />
            </div>

            <p style={{paddingLeft:'3rem'}} className="pt-3 mt-3"> Downpayment %</p>
        <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Instalments"
                valueLabelDisplay="auto"
                className="calculator-spacing w-sm-50 range-slider mx-xs-0"
                marks
                step={5}
                min={25}
                max={70}
                defaultValue={25}
                color="secondary"
                getAriaValueText={getDownPayment}
                // onChange={(val)=>getDownPayment(val)}

            />
            <div className={'breakpoint-labels'} style={{ width: '78%', marginLeft: '2.7rem' }}>
                {data?.map((value) => (
                    <span key={value}>{value}</span>
                ))}
            </div>
        </Box>

            <p style={{paddingLeft:'3rem'}} className="pt-3 mt-3"> Total number of Instalments</p>
        <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Instalments"
                defaultValue={1}
                valueLabelDisplay="auto"
                className="calculator-spacing w-sm-50 range-slider mx-xs-0"
                step={1}
                marks
                min={1}
                max={9}
                color="secondary"
                getAriaValueText={(val)=>getInstalmentPlan(val)}
            />
            <div className={'instalment-breakpoint-labels'} style={{ width: '78%', marginLeft: '3rem' }}>
                {secondSliderData?.map((value) => (
                    <span key={value}>{value}</span>
                ))}
            </div>
        </Box>

            <div className="d-flex justify-content-center align-items-center mt-4 mb-2 flex-column">
                <button disabled={!price} onClick={calculateTaleem} className="calculate-btn calculate-btn-text w-50" style={{borderRadius:"10px", height:"50px"}}>
                    Calculate
                </button>
            { showLoader && <img src={window.location.origin + loader} alt={'logo'} />}
            </div>
            { showTable && <BasicTable data={apiData} />  }
            { showTable && <p className={'text-center mt-5 px-3'}> The prices of our products/services are subject to change without prior notice due to fluctuating market conditions.* </p>  }
        </div>
    );
}
