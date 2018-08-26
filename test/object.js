/* globals describe it */

const should = require('chai').should();
const currencies = require('../dist/');

describe('Locales', () => {
  currencies.forEach((currency) => {
    it(`${currency.text} - It has a correct format`, () => {
      currency.should.be.an('object');
    });
  });
});
