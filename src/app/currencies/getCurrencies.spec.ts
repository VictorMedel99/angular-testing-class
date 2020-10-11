import { getCurrencies } from './getCurrencies';

describe ('currencies', ()=> { // suit

    it('should return the supported currencies', () => {
        //pattern AAA arrange,act,assert
        
        //arrange
        let result;
        //act
        result= getCurrencies();
        //assert
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    })

})