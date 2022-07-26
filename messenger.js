require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
	.create({
		body: "Nike's got some amazing stuff",
		from: '+12566809236',
		to: '+2349033661958',
	})
	.then((message) => console.log(message.sid));
