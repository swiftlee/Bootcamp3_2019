//You can replace this entire file with your Bootcamp Assignment #2 - ListingSchema.js File

/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
    /* your code here from Bootcamp Assignment #2 - ListingSchema.js File*/
    code: {type: String, required: true},
    name: {type: String, required: true},
    coordinates: {
        latitude: mongoose.Decimal128,
        longitude: mongoose.Decimal128
    },
    address: String
});

/* create a 'pre' function that adds the updated_at and created_at if not already there property */
listingSchema.pre('save', function (next) {
    /* your code here from Bootcamp Assignment #2 - ListingSchema.js File */
    let date = new Date();
    this.updated_at = date;

    if (!this.created_at)
        this.created_at = date;
    next();
});

/* Use your schema to instantiate a Mongoose model */
// consolidated exports for the eyes
module.exports = Listing = mongoose.model('Listing', listingSchema);
