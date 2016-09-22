let Config = ( superclass ) => class extends superclass {
  constructor() {
    super();
    this.config = ( key = '', value = '' ) => {
      let isExist = ( prop ) => {
        return this._defaults.hasOwnProperty( prop );
      };

      let _get = ( k ) => {
        if( k === '' ) {
          return this._defaults;
        }
        return this._defaults[ k ].value;
      };

      let _set = ( k, v ) => {
        if( isExist( k ) ) {
          let obj = this._defaults[ k ];

          if( obj.editable ) {
            obj = {
              value : v,
              editable : false
            };
          }

        } else {
          this._defaults[ k ] = {
            editable : false,
            value : v
          };
        }
      };

      let _setObject = ( obj ) => {
        for( let i in obj ) {
          let isE = isExist( i ),
              value = obj[ i ],
              editable = false;

          if( ( isE && this._defaults[ i ].editable ) || !isE ) {
            this._defaults[ i ] = {
              value,
              editable
            };
          }
        }
      };

      if( value === '' ) {
        if( typeof key === 'object' ) {
          _setObject( key );
        } else {
          return _get( key );
        }
      } else {
        _set( key, value );
      }
    };
  }
};
