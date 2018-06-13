songApp.service('SongService', function( $http ) {
    let sv = this;

    sv.sendToSongController = {};

    sv.getSongs = function( needparameter ){
        console.log( `in service` );
        return $http({
            method: 'GET',
            url: '/song'
        })
        .then( function( response ) {
            sv.sendToSongController = response.data;
        })
        .catch( function( error ) {
            console.log(`ERROR in SERVICE FROM DB: ${error}`);
            res.sendStatus(500);  
        })
    }





})