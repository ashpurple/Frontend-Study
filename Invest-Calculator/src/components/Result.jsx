import { calculateInvestmentResults, formatter } from "../util/investment";

const Result = ({ resultInput }) => {
    const resultData = calculateInvestmentResults(resultInput);
    const initalInvestment =
        resultData[0].valueEndOfYear -
        resultData[0].interest -
        resultData[0].annualInvestment;

    console.log(resultData);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map(data => {
                    const totalInterest =
                        data.valueEndOfYear -
                        data.annualInvestment * data.year
                        - initalInvestment;
                    const totalAmountInvested = data.valueEndOfYear - totalInterest;

                    return <tr key = {data.year}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
};

export default Result;