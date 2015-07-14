import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('foo', {path: '/'});
  this.route('bar');
  this.route('toUp');
  this.route('toDown');
  this.route('toLeft');
  this.route('toRight');
  this.route('explode');
  this.route('crossFade');
  this.route('fade');
  this.route('rotateBelow');
});
