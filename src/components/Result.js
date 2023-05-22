import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Result({ data }) {
  const { homeValue, loanAmount, loanTerm, interestRate } = data;
  const totalLoanMonths = loanTerm * 12; // 60 months = 5 years
  const monthlyInterestRate = interestRate / 100 / 12;

  const monthlyPayment =
    (loanAmount *
      monthlyInterestRate *
      (1 + monthlyInterestRate) ** totalLoanMonths) /
    ((1 + monthlyInterestRate) ** totalLoanMonths - 1);

  const totalPayment = monthlyPayment * totalLoanMonths - loanAmount;

  const pieChartData = {
    labels: ['Principle', 'Interest'],
    datasets: [
      {
        label: 'Interest vs Principle',
        data: [homeValue, totalPayment],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack>
      <Typography textAlign="center" variant="h5">
        Monthly Payment: EUR {monthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction="row" justifyContent="center">
        <div>
          <Pie data={pieChartData} />
        </div>
      </Stack>
    </Stack>
  );
}

export default Result;
