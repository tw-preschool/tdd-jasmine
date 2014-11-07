describe('HelloWorld', function() {

  it('demo test', function() {
    expect('Hello World').toEqual('Hello World');
  });

  it('should be mock', function() {
    var helloWorld = new HelloWorld();

    spyOn(helloWorld, 'beenCalled').and.returnValue('Hello World');

    expect(helloWorld.beenCalled()).toEqual('Hello World');
  });
});
