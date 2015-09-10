/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	sendemail : function(req,res,next){
			 var usrObj = {
				email : req.param('email'),
			 }
			 var transporter = nodemailer.createTransport({
							service:'Gmail',
							auth:{
								user:'official.toysisland@gmail.com',
								pass:'tanlieching@1994'
							}
				});
				var MailOptions = {
								from:usrObj.email,
								to : 'official.toysisland@gmail.com',
								subject : 'Subscriber Toys Island',
								html : '<p>Email Subscriber Toys Island : '+ usrObj.email +'</p>'
						};
				 var MailOptions2 = {
								from:'Toys Island <official.toysisland@gmail.com>',
								to : usrObj.email,
								subject : 'Subscriber Toys Island',
								html : '<p>Hai.. Terima kasih telah mengirimkan email kepada kami. Ikuti terus perkembangan kami di <a href="http://www.toysislandshop.com">www.toysislandshop.com</a> atau kunjungi langsung toko kami....</p>'
						};
				transporter.sendMail(MailOptions,function(error,info){
							if (error) {
								console.log(error);
							} else {
								console.log('Message sent: '+info.response);
							}
				});
				transporter.sendMail(MailOptions2,function(error,info){
							if (error) {
								console.log(error);
							} else {
								console.log('Message sent: '+info.response);
							}
				});
				return res.redirect('/');
}
};
