const mongoose = require('mongoose');
const Deal = mongoose.model('Deal');

exports.createDeal = async data => {
    const deal = new Deal(data);
    await deal.save();
};

exports.listDeal = async () => {
    const res = await Deal.find({},'deal');
    return res;
};

exports.updateDeal = async (id, data) => {
    await Deal.findByIdAndUpdate(id, {
        $set: data
    });
};

exports.deleteDeal = async id => {
    await Deal.findByIdAndDelete(id);
};