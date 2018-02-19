// Remember to keep req/request and res/response all the same.

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET ALL THE TASKS
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM tasks ORDER BY category_id';
    pool.query(queryText)
        // Talk to me on the server if successful
        .then((result) => {
            console.log(result.rows)
            res.send(result.rows);
        })
        // Talk to me on the server if I'm a failboat
        .catch((err) => {
            res.sendStatus(500);
        });
});

// GET ALL THE CATEGORIES
router.get('/categories', (req, res) => {
    const queryText = 'SELECT * FROM categories ORDER BY id';
    pool.query(queryText)
        // Talk to me on the server if successful
        .then((result) => {
            console.log(result.rows)
            res.send(result.rows);
        })
        // Talk to me on the server if I'm a failboat
        .catch((err) => {
            res.sendStatus(500);
        });
});

// Now we post the task to your new home!
router.post('/', (req, res) => {
    const queryText = 'INSERT INTO tasks (description, category_id, due_date) VALUES($1, $2, $3)';
    pool.query(queryText,[req.body.description, req.body.categoryId, req.body.due_date])
        // Talk to me on the server if successful
        .then((result) => {
            console.log(result.rows)
            res.sendStatus(201);
        })
        // Talk to me on the server if I'm a failboat
        .catch((err) => {
            res.sendStatus(500);
        });
});

// Did you complete the task? This handles that!
router.put('/complete/:id', (req, res) => {
    const queryText = `UPDATE tasks SET complete='TRUE' WHERE id=$1`;
    pool.query(queryText, [req.params.id])
        // Talk to me on the server if successful
        .then((result) => {
            console.log(result.rows)        
            res.sendStatus(200);
        })
        // Talk to me on the server if I'm a failboat
        .catch((err) => {
            res.sendStatus(500);
        });
});

// Did you not complete the status yet? WHY NOT????
router.put('/:id', (req, res) => {
    const queryText = `UPDATE tasks SET complete='FALSE' WHERE id=$1`;
    pool.query(queryText, [req.params.id])
        // Talk to me on the server if successful
        .then((result) => {
            console.log(result.rows)        
            res.sendStatus(200);
        })
        // Talk to me on the server if I'm a failboat
        .catch((err) => {
            res.sendStatus(500);
        });
});

// BALEETED! If you know this meme, we can be friends!
// If you don't, we can still be friends I guess.
router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM tasks WHERE id=$1`;
    pool.query(queryText, [req.params.id])
        // Talk to me on the server if successful
        .then((result) => {
            console.log(result.rows)        
            res.sendStatus(200);
        })
        // Talk to me on the server if I'm a failboat
        .catch((err) => {
            res.sendStatus(500);
        });
});

module.exports = router;