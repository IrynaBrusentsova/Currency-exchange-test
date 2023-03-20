import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';


  describe('Component ResultBox', () => {

    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });

    it ('should render proper info about conversion when PLN -> USD', ()=>{
        render(<ResultBox from="PLN" to="USD" amount={100} />);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent('PLN 100.00 = $28.57');
    });


    it ('should render proper info about conversion when USD -> PLN', () => {
        render(<ResultBox from="USD" to="PLN" amount={100} />);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent('USD 100.00 = $350');

    });
    
    it ('should render proper info about conversion when PLN 123.00 -> PLN 123.00', () =>{

    });
    



});