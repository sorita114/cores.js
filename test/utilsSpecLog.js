describe( '2.Utils.log', function() {
  it( 'utils.log 가 Utils 클래스의 method 이다.', function() {
    let utils = new Utils();

    expect( utils.log ).not.toBe( undefined );
  });

  it( 'window.console 을 지원한다', function() {
    expect( window.console ).not.toBe( undefined );

    describe( 'utils.config( "useLog" ) === true 이다.', function() {

      let utils = new Utils();

      it( 'Test 문구를 출력한다.', function() {
        expect( utils.log( 'Test' ) ).toBe( 'Test' );
      });
    });

    describe( 'utils.config( "useLog" ) === false 이다.', function() {

      let utils = new Utils({
        useLog : false
      });

      it( 'Test 문구를 출력하지 않는다.', function() {
        let message = utils.log( 'Test' );

        expect( message ).toBe( 'Test' );
      });
    });
  });
});
