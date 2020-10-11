import { compute } from './compute';

describe ('compute', ()=> { // suit

    it('should return 0 if input is negative', () => {
        //pattern AAA arrange,act,assert
        
        //arrange
        let result;
        //act
        result=compute(-1)
        //assert
        expect(result).toBe(0);
    })

    it('should increment if input is positive', () => {
        //arrange
        let result;
        //act
        result=compute(1)
        //assert
        expect(result).toBe(2);
    })

})