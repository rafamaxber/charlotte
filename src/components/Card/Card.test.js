import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const mock = [{ "name": "Facilities of SpringHill Suites by Marriott Charlotte Uptown", "description": "Located 201 m from Mint Museum of Craft Design in Charlotte, SpringHill Suites by Marriott Charlotte Uptown features free WiFi access and private parking.", "image": "https://www.raphaelfabeni.com.br/rv/test-resources/hotels/spring-hill-marriot.jpg", "rate": 5, "price": 400, "price_history": [{ "month": "Jan", "value": 438 }, { "month": "Feb", "value": 400.1 }, { "month": "Mar", "value": 425 }, { "month": "Apr", "value": 433.6 }, { "month": "May", "value": 428.4 }, { "month": "Jun", "value": 415 }, { "month": "Jul", "value": 412 }] }];
describe('Card', () => {
  it('Should match with snapshot', () => {
    const component = shallow(
      <Card
        image={mock[0].image}
        title={mock[0].name}
        description={mock[0].description}
        price={mock[0].price}
        price_history={mock[0].price_history}
        rate={mock[0].rate}
      ></Card>
    );
    expect(component).toMatchSnapshot();
  });
});
