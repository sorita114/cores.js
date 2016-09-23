describe( '3. utils.cookie', function() {
  let utils = new Utils();

  beforeEach( function() {
    utils.cookie.set( 'UID', 'TestUser' );
    utils.cookie.set( 'UserName', 'Test' );
    utils.cookie.set( 'BID', '12345' );
  });

  afterEach( function() {
    utils.cookie.remove( 'UID' );
    utils.cookie.remove( 'UserName' );
    utils.cookie.remove( 'BID' );
  });

  it( 'utils 에 cookie method 가 존재한다.', function() {
    expect( utils.cookie ).not.toBeUndefined();
  });

  describe( '새로운 쿠키를 추가할 수 있다.', function() {
    it( 'Add Cookie -> UID = TestUser', function() {
      expect( utils.cookie.set ).not.toBeUndefined();
    });
  });

  describe( '쿠키값을 조회할 수 있다.', function() {
    it( 'Get Cookie -> UserName === Test', function() {
      expect( utils.cookie.get ).not.toBeUndefined();

      let value = utils.cookie.get( 'UserName' );

      expect( value ).toBe( 'Test' );
    });
  });

  describe( '쿠리를 삭제할 수 있다.', function() {
    it( 'Remove Cookie -> UID', function() {
      expect( utils.cookie.remove ).not.toBeUndefined();

      utils.cookie.remove( 'UID' );

      let value = utils.cookie.get( 'UID' );

      expect( value ).toBeNull();
    });
  });

  describe( '현재 어떤 쿠기가 저장되어있는지 알 수 있다.', function() {
    it( 'Search Key -> UID', function() {
      let isKey = utils.cookie.has( 'BID' );

      expect( utils.cookie.has ).not.toBeUndefined();
    });
  });
});
