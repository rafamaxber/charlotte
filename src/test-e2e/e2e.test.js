const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

describe('Integration test to Charlotte', () => {
  it('Select Calendar', () => {
    nightmare
      .goto('http://charlotteapp.herokuapp.com/')
      .click('.DayPicker-Day[tabindex="-1"]')
      .wait(5000)
      .end()
      .then(console.log)
      .catch((error) => {
        console.error('Search failed:', error);
      });
  });
});
