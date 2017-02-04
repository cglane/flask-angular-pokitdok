describe('angularjs homepage todo list', function() {
  beforeAll(function(next){
    browser.get('/').then(x =>{
      return browser.getTitle()
    }).then(function(title){
      next()
    });
  })
  it('Display Json on Page',function(){
    var title = browser.getTitle();
    expect(title).toEqual('Flask-Angular')
  })
  it('Should click for Partners',function(){
    var myButton = element(by.id('get-partners'));
    myButton.click()
    var json = element.all(by.repeater('item in vm.myJson')).get(0);
    expect(json).not.toEqual(0)
  })
  it('Should create Graph',function(){
    var graphButton = element(by.id('get-graph'))
    graphButton.click()
    expect(element(by.id('graph-image')).isPresent()).toBe(true);
  })
});
