var Inbox = Backbone.Model.extend({
	defaults : {
		username : "James",
		msg : [
			new Message()
		]
	},	//if you wanna add more method, use comma to seperate it
	
	initialize : function (myJsonData) {
		this.set('username', 'Felix'),
		this.set('msg', [new Message({
			subject : "Mahalo",
			sender : "Oz",
			content : "bla bla bla"
		})])
	}
});