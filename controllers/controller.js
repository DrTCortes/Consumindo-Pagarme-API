const instanceAxios = require("../services/pagarme")

async function createOrder(req, res){

    try{
        const pedido = await instanceAxios.post("transactions", req.body);
        return res.json(pedido.data)
    }catch(error){
        res.json(error)
    }
}

async function consultOrder(req, res){
    const {id} = req.params;

    try{
        const pedido = await instanceAxios.get(`transactions/${id}`);
        return res.json(pedido.data)
    }catch(error){
        res.json(error)
    }
}

module.exports = {createOrder, consultOrder}