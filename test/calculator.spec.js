describe("calculator", function() {
    it("should add", function() {
        expect(calculator.add(3, 2)).toEqual(5);
    });
    it("should subtract", function() {
        expect(calculator.subtract(2, 4)).toEqual(-2);
    });
    it("should multiply", function() {
        expect(calculator.multiply(3, 6)).toEqual(18);
    });
    it("should divide", function() {
        expect(calculator.divide(5, 2)).toEqual(2.5);
    });
    it("should perform modulo division", function() {
        expect(calculator.modulo(6, 3)).toEqual(0);
    });
    it("should perform a power operation", function() {
        expect(calculator.exponent(3, 3)).toEqual(27);
    });
    it("should perform a root operation", function() {
        expect(calculator.root(27, 3)).toEqual(3);
    });
});
