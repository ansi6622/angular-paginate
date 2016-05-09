'use strict';
angular.module('AppExample')
  .factory('pb', function () {
    var fn, ln, ph, fakeListings;

    fakeListings = _.range(1, 31).map( function (id) {
      fn = faker.name.firstName();
      ln = faker.name.lastName();
      ph = faker.phone.phoneNumber();
      return { id: id, name: `${fn} ${ln}`, number: ph }
    });

    var factory = {

      findNumberByName: function (name) {
        return factory.listings.filter( function (listing) {
          var re = new RegExp(name, 'gi');
          return re.test(listing.name);
        });
      },

      listings: fakeListings

    };

    return factory;

  });
