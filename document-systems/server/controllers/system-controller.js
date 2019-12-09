const System = require('../models/system-model');

insertSystem = (req, res) => {
    const body = req.body;
    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a system'
        });
    }

    const system = new System(body);
    if(!system){
        return res.status(400).json({
            success: false,
            error: error
        });
    }

    system
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: system._id,
                message: 'System create!'
            });
        })
        .catch(error => {
            return res.status(400).json({
                error: error,
                message: 'System not created!'
            });
        });
}

updateSystem = async(req, res) => {
    const body = req.body;
    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update'
        })
    }
    System.findOne({_id: req.params.id}, (error, system) => {
        if(error){
            return res.status(400).json({
                error: error,
                message: 'System not found!'
            });
        }
        system.name = body.name;
        system.description = body.description;

        system
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: system._id,
                    message: 'System updated!'
                });
            })
            .catch(error => {
                return res.status(404).json({
                    error: error,
                    message: 'System not updated!'
                });
            });
    });
}

deleteSytem = async (req, res) => {
    await System.findOneAndDelete({_id: req.params.id}, (error, system) => {
        if(error){
            return res.status(400).json({
                success: false,
                error: error
            });
        }
        if(!system){
            return res.status(404).json({
                success: false,
                error: 'Movie not found!'
            })
        }
        return res.status(200).json({
            success: true,
            data: system
        })
    })
    .catch(error => console.log(error));
}

getSystemById = async (req, res) => {
    await System.findOne({_id: req.params.id}, (error, system) => {
        if(error){
            return res.status(400).json({
                success: false,
                error: error
            });
        }
        if(!system){
            return res.status(404).json({
                success: false,
                error: 'System not found!'
            })
        }
        return res.status(200).json({
            success: true,
            data: system
        })
    })
    .catch(error => console.log(error));
}

getSystems = async (req, res) => {
    await System.find({}, (error, systems) => {
        if(error){
            return res.status(400).json({
                success: false,
                error: error
            });
        }
        if(!systems.length){
            return res.status(404).json({
                success: false,
                error: 'System not found!'
            });
        }
        return res.status(200).json({
            success: true,
            data: systems
        });
    })
    .catch(error => console.log(error));
}

module.exports = {
    insertSystem,
    updateSystem,
    deleteSytem,
    getSystems,
    getSystemById
}