const mongoose = require('mongoose');
const Deal = mongoose.model('Deal');


exports.createDeals = async data => {
    const deal = new Deal(data);
    await deal.save();
};

exports.listDeals = async () => {
    const res = await Deal.find({}, 'friend mention -_id');
    return res;
};

exports.updateMention = async (id, data) => {
    await Deal.findByIdAndUpdate(id, {
        $set: data
    });
};

exports.deleteDeal = async id => {
    await Deal.findByIdAndDelete(id);
};