import { ValueObject } from "../value.object"

class StringValueObject extends ValueObject {
    constructor(readonly value: string) {
        super();
    }
}

class ComplexValueObject extends ValueObject {
    constructor(readonly prop1: string, readonly prop2: number) {
        super();
    }
}

describe('Value Object Unit Tests', () => {
    test('should be equals', () => {
        const ValueObject = new StringValueObject('test');
        const ValueObject2 = new StringValueObject('test');
        expect(ValueObject.equals(ValueObject2)).toBe(true);
    
        const ValueObject3 = new ComplexValueObject('test', 1);
        const ValueObject4 = new ComplexValueObject('test', 1);
        expect(ValueObject3.equals(ValueObject4)).toBe(true);
    }) 

    test('should not be equals', () => {
        const ValueObject = new StringValueObject('test');
        const ValueObject2 = new StringValueObject('test2');
        expect(ValueObject.equals(ValueObject2)).toBe(false);
        
        const ValueObject3 = new ComplexValueObject('test', 1);
        const ValueObject4 = new ComplexValueObject('test', 2);
        expect(ValueObject3.equals(ValueObject4)).toBe(false);    
    })

})