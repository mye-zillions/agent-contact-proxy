// Make sure to "npm install faker" first.
const faker = require('faker');

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const payload = {
    street: escape(faker.address.streetAddress()),
    city: escape(faker.address.city()),
    state: faker.address.stateAbbr(),
    zip: faker.address.zipCode('#####'),
    listing_agent: Math.ceil(Math.pow(Math.random(), 2) * 1000000),
  };
  // add variables to virtual user's context:
  userContext.vars.payload = payload;
  // continue with executing the scenario:
  return done();
}

module.exports = {
  generateRandomData
};
