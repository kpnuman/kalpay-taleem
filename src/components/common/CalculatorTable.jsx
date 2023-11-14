import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line react/prop-types
export default function PaymentTable({ data }) {
    const apiResponse = data;

    const rows = [
        {
            payment: 'Down payment',
            value: `Rs. ${Math.trunc(Number(apiResponse.data?.getInstallmentCalculationForTaleem?.downPayment)).toLocaleString('en-US')}`,
        },
        {
            payment: `Monthly instalments x ${apiResponse.data?.getInstallmentCalculationForTaleem?.months}`,
            value: `Rs. ${Math.trunc(Number(apiResponse.data?.getInstallmentCalculationForTaleem?.monthlyInstallment)).toLocaleString('en-US')}`,
        },
        {
            payment: 'Total payment',
            value: `Rs. ${Math.trunc(Number(apiResponse.data?.getInstallmentCalculationForTaleem?.totalPayment)).toLocaleString('en-US')}`,
        }
    ];

    return (
        <TableContainer component={Paper} style={{padding: "0 20px 0px 20px", boxShadow: "none"}}>
            <Table sx={{ minWidth: 150 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">
                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                PAYMENTS
                            </Typography>
                            </TableCell>
                        <TableCell align="left">
                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                            VALUES
                        </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell align="left">
                                {row.payment === 'Total payment' ? (
                                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                        {row.payment}
                                    </Typography>
                                ) : (
                                    row.payment
                                )}
                            </TableCell>
                            <TableCell align="left">
                                {row.payment === 'Total payment' ? (
                                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                        {row.value}
                                    </Typography>
                                ) : (
                                    row.value
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
