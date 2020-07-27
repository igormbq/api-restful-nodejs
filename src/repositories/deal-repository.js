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

exports.aggregateDeal = async () => {
    const res = await Deal.aggregate([
       // { $match: { date: { $gte: ISODate('2020-07-20')} } },
        { $group : {
            //_id : { date : "$date" },
            _id : { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
            amount: { $sum: "$value" }
        }},         { $sort: { value: -1 } }
    ]);
    return res;
};