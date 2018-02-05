
export default class RestClient {
  constructor({
    clientHttpInstance,
  }) {
    if (!clientHttpInstance) {
      throw new Error('Is necessary send all parameters!');
    }
    this.clientHttpInstance = clientHttpInstance;
  }

  fetchHotels(params) {
    return this.clientHttpInstance.get('/hotels', { params })
      .then(response => response)
      .catch((error) => {
        throw {
          error
        };
      });
  }
}
