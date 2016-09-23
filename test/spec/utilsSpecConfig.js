describe("1.Utils", function () {
  it('utils.config( "useLog" ) === true', function () {
    let utils = new Utils ();
    expect( utils.config( 'useLog') ).toBe( true );
  });

  it( 'utils.config( "isMobile", true ) === utils.config( "isMobile" )', function() {
    let utils = new Utils();

    utils.config( 'isMobile', true );

    let isMobile = utils.config( 'isMobile' );

    expect( isMobile ).toBe( true );
  });

  it( 'editable = false not update value', function () {
    let utils = new Utils();

    utils.config( 'useLog', false );

    let useLog = utils.config( 'useLog' );

    expect( useLog ).toBe( true );
  });

  it( 'enable update object', function() {
    let utils = new Utils();

    utils.config({
      isMobile : true,
      isApp : false
    });

    let isMobile = utils.config( 'isMobile' );
    let isApp = utils.config( 'isApp' );

    expect( isMobile ).toBe( true );
    expect( isApp ).toBe( false );
  });
});
