import { Category } from "../category.entity"

describe('Category Unit Tests', () => {
    describe ('Constructor', () =>
    {   
        test('Constructor1', () => {
            const category = new Category({
                name: 'Movie'
            });
            expect(category.category_id).toBeUndefined();
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
            expect(category.category_id).toBeUndefined();
            expect(category.name).toBe('Movie');
            expect(category.description).toBe('Some description');
            expect(category.is_active).toBeFalsy();
        })
    })
})
