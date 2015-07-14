export default function() {
  this.transition(
    this.fromRoute(routeName => routeName === 'bar'),
    this.toRoute('foo'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromValue(false),
    this.toValue(true),
    this.use('toDown', {duration: 500}),
    this.reverse('toLeft', {duration: 500})
  )

this.transition(
  this.toRoute('toUp'),
  this.use('toUp'));

this.transition(
  this.toRoute('toDown'),
  this.use('toDown'));

this.transition(
  this.toRoute('toLeft'),
  this.use('toLeft'));

this.transition(
  this.toRoute('toRight'),
  this.use('toRight'));

this.transition(
  this.toRoute('explode'),
  this.use('explode', {
    pickNew: '#lorem',
    use: ['toLeft', {duration: 1000}]
  }, {
    pickNew: '#ipsum',
    use: ['toRight', {duration: 1000}]
  }));

this.transition(
  this.toRoute('crossFade'),
  this.use('crossFade'));

this.transition(
  this.toRoute('fade'),
  this.use('fade'));

this.transition(
  this.toRoute('rotateBelow'),
  this.use('rotateBelow'));

}