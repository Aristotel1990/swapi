const mongoose = require('mongoose')
const Vehicles = require('../database/schemas/vehicle')


const getData = async(req,res)=>{
    try{
        const posts = await Vehicles.find();
        res.json(posts);
    } catch(err){
        res.json({message:err});
    }
}
const getById = async (req, res) => {
    try {
        const id = req.params.id
        console.log('id :', id)
        const response = await Vehicles.findById(id)
        console.log('response :', response)
        res.json({
            count: response.count,
            message: 'Total count for this specific starship is '+ response.count,
            name: response.name
        })
    } catch (e) {
        console.log('error :', e)
        res.status(500)
        res.json({error: e.message})
    }
}

const setCount = async (req, res) => {
    try {
        const id = req.params.id
        const { count } = req.body

        console.log('id :', id)
        console.log('count :', count)
        let response
        if (typeof count === 'number' && count >= 0 && ((count) % 1 === 0)) {
            response = await Vehicles.findOneAndUpdate( { _id: id },
                { $set : {'count' : count } },
                { new: true })
        } else  {
            throw new Error('Invalid count in body')
        }

        res.json({
            count: response.count,
            message: 'Total count for this specific vehicle is set to '+ response.count,
            name: response.name
        })

    } catch (e) {
        console.log('error :', e)
        res.status(500)
        res.json({error: e.message})
    }
}

const incDecCount = async (req, res, next) => {
    try {
        const operator = req.query.operator
        if (!['inc','dec'].includes(operator)) {
            throw new Error('Operator in query param should be inc or dec')
        }
        console.log('operator :', operator)
        let job
        const id = req.params.id
        let response
        if (operator === 'inc') {
            job = 'incremented'
            response = await Vehicles.findOneAndUpdate( { _id: id },
                { $inc : {'count' : 1 } },
                { new: true })
        } else {
            job = 'decremented'
            response = await Vehicles.findById(id)
            if (response.count > 0) {
                response = await Vehicles.findOneAndUpdate( { _id: id },
                    { $inc : {'count' : -1 } },
                    { new: true })
            }
        }
        // const response = await Starship.findById(id)

        res.json({
            count: response.count,
            message: 'Total count for this specific vehicle is '+ job +' to '+ response.count,
            name: response.name
        })

    } catch (err) {
        console.log('error :', err)
        res.status(500)
        res.json({error: err.message})
    }
}


module.exports.getById = getById
module.exports.setCount = setCount
module.exports.incDecCount = incDecCount
module.exports.getData = getData