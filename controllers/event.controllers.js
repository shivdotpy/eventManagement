const eventModel = require('../models/event.model');

module.exports.addEvent = (req, res) => {
	const Event = new eventModel({
		type: req.body.type,
		image: req.body.image,
		location: req.body.location,
		date: req.body.date,
		genderAllowed: req.body.genderAllowed
	});

	Event.save((err, eventSaved) => {
		if (err) {
			return res.status(500).send({
				error: true,
				message: 'Error while saving event',
				data: err
			});
		}

		return res.status(200).send({
			error: false,
			message: 'Event saved successfully'
		});
	});
};
