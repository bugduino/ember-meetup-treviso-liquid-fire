export default function() {
  this.transition(
    // compare them by id and only run this animation if we're moving to
    // a value with a higher id.
    this.toValue(function(toValue, fromValue) {
      return toValue && fromValue && toValue.get('id') > fromValue.get('id');
    }),

    this.use('toLeft')
  );
}