import initTables from '../models'
import {addFood, numFoodItems} from '../queries'

jest.mock('../index');

describe('Database', ()=>{
    beforeEach(async ()=>{
        // Init a fresh DB before each test.
        await initTables();
        console.log('post init');
    });

    it('adds food', async ()=>{
        await addFood('za slice', 200);
        const num_items = await numFoodItems();
        expect(num_items).toEqual(1);
    });
})