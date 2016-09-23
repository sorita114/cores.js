var express = require( 'express' ),
    app = express(),
    bodyParser = require( 'body-parser' ),
    port = process.env.PROT || 8085;

app.use( bodyParser.urlencoded({ extended : true }) );
app.use( bodyParser.json() );

app.use( '/lib', express.static( __dirname + '/test/lib' ) );
app.use( '/spec', express.static( __dirname + '/test/spec') );
app.use( '/dist', express.static( __dirname + '/dist') );

app.all( '/', function( req, res ) {
  res.sendFile( 'SpecRunner.html', { root : __dirname + '/test' });
});
app.listen( port );

console.log( 'Server Start!!! : http://localhost:' + port );
