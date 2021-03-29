const axios = require('axios')
const { getStarships, getVehicles } = require('../src/swapi_api')
jest.mock('axios')
const base_uri = 'https://swapi.dev/api/'
describe('Testing SWAPI', () => {

    it('should return result for vehicles', async () => {
        const data = {name: 'Test'}
        const page = 1

        axios.get.mockImplementationOnce(() => Promise.resolve(data));

        await expect(getVehicles(1)).resolves.toEqual(data);

        expect(axios.get).toHaveBeenCalledWith(
            `${base_uri}vehicles/?page=${page}`,
        );
    })

    it('should return result for starship', async () => {
        const data = {name: 'Test'}
        const page = 1

        axios.get.mockImplementationOnce(() => Promise.resolve(data));

        await expect(getStarships(1)).resolves.toEqual(data);

        expect(axios.get).toHaveBeenCalledWith(
            `${base_uri}starships/?page=${page}`,
        );
    })

})
