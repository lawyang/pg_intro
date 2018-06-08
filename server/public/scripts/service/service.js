songApp.service( 'SongService', function( $http ) {
    let sv = this;

    sv.sendToSongController = {};

    sv.getSongs = function( needparameter ){
        console.log( `in service` );

        return $http({
            method: 'GET',
            url: '/song'  // IS THIS THE CORRECT URL?
        })
        .then( function( response ) {
            console.log(`back with a response data: ${response.data}`)

        })
        .catch( function( error ) {
            console.log(`ERROR in SERVICE FROM DB: ${error}`);
            
        })
    }
})