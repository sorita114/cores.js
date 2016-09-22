let Log = ( superclass ) => class extends superclass {
  constructor() {
    super();
    this.log = ( obj ) => {
      let isLog = this.config( 'useLog' );

      if( isLog && window.console ) {
        if( typeof obj == "object" && console.dir ) {
            console.dir && console.dir(obj);
        } else {
            console.log && console.log(obj);
        }
      }
    }
  }
};
