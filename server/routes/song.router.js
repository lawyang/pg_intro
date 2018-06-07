const express = require('express');
const router = express.Router();

//REQUIRE pool.js into the ROUTER
const pool = require('../modules/pool');

router.get('/', ( req, res ) => {
    console.log(`in song router-GET`);
    // build a query
    // use pool for the query
    // when query gets back send the data
    const queryText = 'SELECT * FROM songs';
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) =>{
            console.log(`Error getting all songs: ${err}`);
            res.sendStatus(500);
        })
})

router.post('/', ( req, res ) => {
    console.log(`in song router-POST`);
    // uses req.body
    //INSERT INTO "songs"("id", "rank", "artist", "track", "published") VALUES(160, 412, 'Gordon Jenkins & The Weavers', 'Goodnight, Irene', '1/1/1950')
    let queryPost = `INSERT INTO "songs"("rank", "artist", "track", "published") VALUES(412, 'Curtis  Law Band', 'Goodnight Sweet Princes', '1/1/1950');`; 
    pool.query(queryPost)
        .then((result) => {
            res.send(result.rows);
            console.log(`success POST of song ${result}`);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(`Error POSTING: ${err}`);
            res.sendStatus(500);
        })
})

router.put('/:id', (req, res) => {
    console.log('In song-router PUT to update', req.body);
 
    const update = req.body;
    const id = req.params.id;
    let queryText = `UPDATE songs SET rank = $2, artist = $3 WHERE id=$1`;
 
    pool.query(queryText, [id, update.rank, update.artist])
        .then( (result) => {
            console.log('back from DB with', result);
            res.sendStatus(200);
        }).catch( (err) => {
            console.log('Error', err);
            res.sendStatus(500);
        });
 });

router.delete('/:id', ( req, res ) => {
    console.log(`in song router-DELETE`);
    const id = req.params.id;
    const queryText = 'DELETE FROM songs WHERE id=$1';
    // Passing two things to the query. 1) the query text
    // 2) the calues to substitute into the query for the $1, $2, $3
    // when subbin in multiple things, the order is important
    pool.query(queryText, [id])
        .then((result) => {
            console.log(`successful delete of song ${result}`);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(`ERROR deleting song ${err}`);
            res.sendStatus(500);
            
        })
})

module.exports = router;