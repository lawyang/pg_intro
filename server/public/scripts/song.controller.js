songApp.controller('songCollection', function(SongService) {
    vm = this;
    vm.test = 'test';
    vm.arrayToDisplay = [];

    vm.displaySongs = function(){
        SongService.getSongs()
            .then( function(){
                vm.arrayToDisplay = SongService.sendToSongController
                console.log(vm.arrayToDisplay)
            })
    }

    vm.displaySongs();


})

