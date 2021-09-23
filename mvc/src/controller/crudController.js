const post = (model) => async(req, res) => {
    const item = await model.create(req.body);

    return res.status(201).send({item});
}

const get = (model) => async (req, res) => {
    const item = await model.find().lean().exec();

    return res.status(200).send({item});

}

const getOne = (model) => async (req, res) => {
    const item = await model.findById(req.params.id).lean().exec();

    return res.status(200).send({item});
}

const update = (model) => async (req, res) => {
    const item = await model.findByIdAndUpdate(req.params.id, req.body, {new: true});

    return res.status(200).send({item});
}

const remove = (model) => async (req, res) => {
    const item = await model.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send({item});
}

module.exports = {
    post,
    get,
    getOne,
    update,
    remove

}