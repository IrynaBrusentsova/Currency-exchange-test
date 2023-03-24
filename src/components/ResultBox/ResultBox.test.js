import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultBox from './ResultBox';

const testCases = [
    { amount: '100', from: 'PLN', to: 'USD' },
    { amount: '20', from: 'USD', to: 'PLN' },
    { amount: '200', from: 'PLN', to: 'USD' },
    { amount: '345', from: 'USD', to: 'PLN' },
];

for(const testObj of testCases){
  describe('Component ResultBox', () => {

    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={testObj} />);
    });

    it ('should render proper info about conversion when PLN -> USD', ()=>{
        render(<ResultBox from="PLN" to="USD" amount={testObj} />);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent('PLN 100.00 = $28.57');  
    });

    it ('should render proper info about conversion when USD -> PLN', () => {
        render(<ResultBox from="USD" to="PLN" amount={testObj} />);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent('USD 100.00 = $350');
    });
    
    it ('should render proper info about conversion when PLN 123.00 -> PLN 123.00', () =>{
        render(<ResultBox from="PLN" to="PLN" amount={123.0} />);
        const output = screen.getByTestId("output");
        expect(output).toHaveTextContent("PLN 123.00 = PLN 123.00");
    });

    it('should render "Wrong value..." when amount < 0', () => {
        render(<ResultBox from="USD" to="PLN" amount={-1} />);
        const output = screen.getByTestId("output");
        expect(output).toHaveTextContent("Wrong value");
      });
      // unmount component
    cleanup()   
});
}








