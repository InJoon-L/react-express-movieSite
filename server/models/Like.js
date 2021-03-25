const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = mongoose.Schema({
    
    
})


const Like = mongoose.model('Like', likeSchema);

module.exports = { Like }
