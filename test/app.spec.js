describe('A getUnsuccessPercent tesztje', () => {
    it('Input 10, 2, elvárt 20', () => {    
        let actual = getUnsuccessPercent(10,2);
        expect(actual).toBe(20);
    });
    it('Input 33, 33, elvárt 100', () => {    
        let actual =getUnsuccessPercent(33, 33);
        expect(actual).toBe(100);
    });
    it('Input 55, 17, elvárt 30.909090909090907', () => {    
        let actual = getUnsuccessPercent(55, 17);
        expect(actual).toBe(30.909090909090907);
    });
    it('Input 1, a, elvárt NaN', () => {    
        let actual = getUnsuccessPercent(1, a);
        expect(actual).toBe(false);
    });
    

     
});
//az értékek 100-(a kapott eredmény)= a kimenet

