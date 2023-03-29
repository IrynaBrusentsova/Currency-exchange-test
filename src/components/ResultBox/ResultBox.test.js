import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultBox from './ResultBox';

const testCases = [
    { amount: '100', from: 'PLN', to: 'USD' },
    { amount: '20', from: 'USD', to: 'PLN' },
    { amount: '200', from: 'PLN', to: 'USD' },
    { amount: '345', from: 'USD', to: 'PLN' },
];



  describe('Component ResultBox', () => {

    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });

    // it ('should render proper info about conversion when PLN -> USD', ()=>{
    //     render(<ResultBox from="PLN" to="USD" amount={Number(testObj.amount)} />);
    //     const output = screen.getByTestId('output');
    //     expect(output).toHaveTextContent('PLN 100.00 = $28.57');  
    // });
    

    it ('should render proper info about conversion when PLN -> USD', ()=>{
      for (testObj of testCases){
          
        render(<ResultBox from="PLN" to="USD" amount= {Number(testObj.amount)} />);
        const output = screen.getByTestId('output');

        expect(output).toHaveTextContent(`$${Number(testObj.amount)}.00 = PLN ${Number(testObj.amount)*3.5}.00`);

        cleanup();
      }
    });


    it ('should render proper info about conversion when USD -> PLN', () => {
       for (testObj of testCases){
          
        render(<ResultBox from="USD" to="PLN" amount= {Number(testObj.amount)} />);
        const output = screen.getByTestId('output');

        expect(output).toHaveTextContent(`PLN ${ Number(testObj.amount)}.00 = $${
          Math.round((Number(testObj.amount) / 3.5) * 100)/100
        }`
        );
        
        cleanup();
      }
    });   

    
    it ('should render proper info about conversion when PLN 123.00 -> PLN 123.00', () =>{
        render(<ResultBox from="PLN" to="PLN" amount={123.0} />);
        const output = screen.getByTestId("output");
        expect(output).toHaveTextContent("PLN 123.00 = PLN 123.00");
    });

    it('should render "Wrong value" when amount < 0', () => {
        render(<ResultBox from="USD" to="PLN" amount={-1} />);
        const output = screen.getByTestId("output");
        expect(output).toHaveTextContent("Wrong value");
      });
      // unmount component
    cleanup()   
});














