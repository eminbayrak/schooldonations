const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/connection");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// Getting list of donors.
recordRoutes.route("/donors").get(function (req, res) {
    let db_connect = dbo.getDb();
    db_connect
        .collection("donors")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// Getting list of donations
recordRoutes.route("/donations").get(function (req, res) {
    let db_connect = dbo.getDb();
    db_connect
        .collection("donations")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// Getting list of teachers
recordRoutes.route("/teachers").get(function (req, res) {
    let db_connect = dbo.getDb();
    db_connect
        .collection("teachers")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// Getting list of schools
recordRoutes.route("/schools").get(function (req, res) {
    let db_connect = dbo.getDb();
    db_connect
        .collection("schools")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// Get single record of donors
recordRoutes.route("/donors/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection("donors")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// Get single record of donors
recordRoutes.route("/donors/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection("donors")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// Get single record of donations
recordRoutes.route("/donations/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection("donations")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// Get single record of teachers
recordRoutes.route("/teachers/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection("teachers")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// Get single record of schools
recordRoutes.route("/schools/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection("schools")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// Add a single record of donors.
recordRoutes.route("/donors/add").post(function (req, response) {
    
    let db_connect = dbo.getDb();
    let myobj = {
        person_name: req.body.person_name,
        person_position: req.body.person_position,
        person_level: req.body.person_level,
    };
    db_connect.collection("donors").insertOne(myobj, function (err, res) {
        console.log(req.body);
        if (err) throw err;
        response.json(res);
    });
});

// Update single of donors by id.
recordRoutes.route("/donors/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newValues = {
        $set: {
            donor_city: req.body.donor_city,
            donor_state: req.body.donor_state,
            donor_is_teacher: req.body.donor_is_teacher,
            donor_zip: req.body.donor_zip,
        },
    };
    db_connect
        .collection("donors")
        .updateOne(myquery, newValues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            response.json(res);
        });
});

// Delete a record of donors
recordRoutes.route("donors/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("donors").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.status(obj);
    });
});

module.exports = recordRoutes;