describe( 'utils.cookie', function() {
  it( 'utils 에 cookie method 가 존재한다', function() {
    let utils = new Utils();

    expect( utils.cookie ).not.toBe( undefined );
  });
});
