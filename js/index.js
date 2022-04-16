//index.js  
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "himanshujoshibalaji@gmail.com",
	Password : "aezakmipdnejoh52444661212555",
	To : "himanshujoshi.4466@gmail.com",
	From : "himanshujoshibalaji@gmail.com",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}