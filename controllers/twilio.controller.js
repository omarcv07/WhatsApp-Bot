const CONFIG = require('../config/config');
const client = require('twilio')(CONFIG.TWILIO_ACCOUNT_SID, CONFIG.TWILIO_AUTH_TOKEN);

const sendWsMsg = async (req, res, next) => {
    try {
        const { body, to } = req.body; 
        const msg = await client.messages.create({
            from: 'whatsapp:' + CONFIG.FROM,
            to: 'whatsapp:' + to,
            body: body
        });
        res.status(200).json({ success:true, message: msg});
    } catch(error) {
        res.status(404)
        res.json({success:false, error: error.message});
    }
}

module.exports.sendWsMsg = sendWsMsg;