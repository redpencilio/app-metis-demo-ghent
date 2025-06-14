import EmberRouter from '@ember/routing/router';
import config from 'frontend-centrale-vindplaats/config/environment';
import { fallbackRoute, externalRoute } from 'ember-metis';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('sparql');
  this.route('view', function () {});

  externalRoute(this);
  fallbackRoute(this);

  this.route('legaal', function () {
    this.route('toegankelijkheidsverklaring');
    this.route('disclaimer');
    this.route('cookieverklaring');
  });
});
