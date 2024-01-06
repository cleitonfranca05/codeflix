import { Category } from "../category.entity"
import { Uuid } from "../shared/domain/value-objetct/uuid.vo";

describe('Category Unit Tests', () => {
    describe ('Constructor', () =>
    {   
        test('Constructor1', () => {
            const category = new Category({
                name: 'Movie'
            });
            expect(category.category_id).toBeInstanceOf(Uuid);
            expect(category.name).toBe('Movie');
            expect(category.description).toBeNull();
            expect(category.is_active).toBeTruthy();
            })
        test('Constructor2', () => {
            const category =new Category({
                name: 'Movie',
                description: 'Some description',
                is_active: false
            });
            expect(category.category_id).toBeInstanceOf(Uuid);
            expect(category.name).toBe('Movie');
            expect(category.description).toBe('Some description');
            expect(category.is_active).toBeFalsy();
        })
        test('should change name', () => {
            const category = new Category({
                name: 'Movie',
                description: 'Some description',
                is_active: false
            });
            category.changeName('New name');
            expect(category.name).toBe('New name');
        })
        test('should change description', () => {
            const category = new Category({
                name: 'Movie',
                description: 'Some description',
                is_active: false
            });
            category.changeDescription('New description');
            expect(category.description).toBe('New description');
        })
    })
    describe ("category_id", () => {
        
        const arrange = [{category_id : null }, {category_id : undefined }, {category_id : new Uuid() }];
        
        test.each(arrange)("id = %j", ({category_id}) => {
            const category = new Category({
                name: "Movie",
                category_id: category_id as any,
            });
        expect(category.category_id).toBeInstanceOf(Uuid);  
        })
        
    })
})
