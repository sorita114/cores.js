class Utils extends mix( Defaults ).with( Config, Log, Cookie ) {
  constructor( obj ) {
    super();

    if( obj !== undefined && typeof obj === 'object' && obj.length === undefined ) {
      for( let i in obj ) {
        this._defaults[ i ] = {
          value : obj[ i ],
          editable : false
        };
      }
    }
  }
}
