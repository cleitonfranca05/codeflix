import { InvalidUuidError, Uuid } from "../uuid.vo"

describe('Uuid Unit test', () => {

    
    const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');
    // saber se realmente foi chamado o validate do construtor

    test('should create a valid uuid', () => {
        const uuid = new Uuid();
        expect(uuid).toBeDefined();
        expect(uuid.id).toBeDefined();
    });

    test('should accept a valid uuid', () => {
        const uuid = new Uuid('123e4567-e89b-12d3-a456-426655440000');
        expect(uuid).toBeDefined();
        expect(uuid.id).toBe('123e4567-e89b-12d3-a456-426655440000');
    });
    });