const {Router} = require('express')
const router = Router()

const webPush = require('../webpush')

let pushSubscription;

router.post('/subs', async (req,res) =>{
    pushSubscription = req.body;
    res.status(200).json()
});

// Ruta para lanzar la Notificacion
router.post('/message', async (req,res)=>{
    const payload =JSON.stringify({
        title: 'Se requiere administracion',
        message: 'Nuevo pedido'
    })
    
    try {
        await webPush.sendNotification(pushSubscription, payload);
    } catch (error) {
        console.log(error);
    }
})
module.exports = router