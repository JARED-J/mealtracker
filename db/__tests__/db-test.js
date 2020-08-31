import initTables from '../models'
import {addFood, numFoodItems, getFood} from '../queries'

jest.mock('../index');

describe('Database', () => {
    beforeEach(async () => {
        // Init a fresh DB before each test.
        await initTables();
        console.log('post init');
    });

    it('adds food', async ()=>{
        await addFood('za slice', 200);
        const num_items = await numFoodItems();
        expect(num_items).toEqual(1);
    });

    it('adds more food', async () => {
        await addFood('chicken', 200);
        const numItems = await numFoodItems();
        expect(numItems).toEqual(2);
    });

    it('gets Food', async ()=>{
        const allFood = await getFood();
        console.log(allFood);
        expect.anything();
    })
});
