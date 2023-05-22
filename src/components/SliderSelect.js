import SliderComponent from './common/SliderComponent';

function SliderSelect({ data, setData }) {
  const bank_limit = 10000;

  return (
    <>
      <SliderComponent
        defaultValue={data.homeValue}
        maxValue={bank_limit}
        minValue={1000}
        value={data.homeValue}
        stepValue={100}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
            homeValue: value,
          })
        }
        label="Home Value"
        unit="EUR"
        amount={data.homeValue}
      />
      <SliderComponent
        defaultValue={data.downPayment}
        maxValue={data.homeValue}
        minValue={0}
        stepValue={100}
        value={data.downPayment}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: data.homeValue - value,
            downPayment: value,
          })
        }
        label="Down Payment"
        unit="EUR"
        amount={data.downPayment}
      />
      <SliderComponent
        defaultValue={data.loanAmount}
        maxValue={data.homeValue}
        minValue={0}
        stepValue={100}
        value={data.loanAmount}
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: data.homeValue - value,
            loanAmount: value,
          })
        }
        label="Loan Amount"
        unit="EUR"
        amount={data.loanAmount}
      />
      <SliderComponent
        defaultValue={data.interestRate}
        maxValue={18}
        minValue={2}
        stepValue={1}
        value={data.interestRate}
        onChange={(e, value) => setData({ ...data, interestRate: value })}
        label="Interest Rate"
        unit="%"
        amount={data.interestRate}
      />
    </>
  );
}

export default SliderSelect;
