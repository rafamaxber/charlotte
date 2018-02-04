import RestClient from './RestClient';

describe('RestClient', () => {
  const hotelParameters = {
    clientHttpInstance: 'mockHttp',
  };

  describe('Instance', () => {
    test('Should is instanciable', () => {
      expect(new RestClient(hotelParameters)).toBeInstanceOf(RestClient);
    });

    test('Should throw error if parameter not informed', () => {
      expect(() => new RestClient()).toThrowError();
    });

    test('Should throw error if some parameter not informed', () => {
      expect(() => new RestClient({})).toThrowError();
    });
  });

  describe('fetchHotels', () => {
    const restClient = new RestClient(hotelParameters);

    test('Should be a function', () => {
      expect(typeof restClient.fetchHotels).toBe('function');
    });

    test('Should return a resolved promise', () => {
      const mockHttp = {
        get() {
          return new Promise(resolve => resolve({ data: true }));
        },
      };
      const hotelParametersInside = {
        clientHttpInstance: mockHttp,
      };
      const restClient = new RestClient(hotelParametersInside);
      expect(restClient.fetchHotels({ minPrice: 300 })).resolves.toEqual({ data: true });
    });
/*
    test('Should return a reject promise', () => {
      const mockHttp = {
        get() {
          return new Promise((resolve, rejects) => rejects());
        },
      };
      const hotelParametersInside = {
        clientHttpInstance: mockHttp,
      };
      const restClientInside = new RestClient(hotelParametersInside);
      expect(restClientInside.fetchHotels().catch).toThrowError();
    });
*/
  });

});
