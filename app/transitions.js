export default function(){
  this.transition(
    this.fromRoute('posts.index'),
    this.toRoute('posts.post'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('posts'),
    this.toRoute('contact'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('posts'),
    this.toRoute('about'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('about'),
    this.toRoute('contact'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}