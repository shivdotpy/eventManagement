const otpGenerator = require('otp-generator');
const userModel = require('./models/user.model');

module.exports.login = () => {
    const mobile = req.body.mobile;
    
    userModel.findOne({mobile}, (err, userFound) => {
        if (err) {
            return res.status(500).send({
                error: true,
                message: 'Error while finding user',
                data: err
            })
        }

        if (!userFound) {
            return res.status(400).send({
                error: true,
                message: 'No user registered with this mobile number'
            })
        }

        return res.status(200).send({
            error: false,
            message: 'An OTP has been sent to your mobile number'
        })
    })
};
