var Message = Backbone.Model.extend({
	defaults : {
		subject : "Mahalo",
		sender : "Oz",
		content : "bla bla bla",
		unread : true
	}	//if you wanna add more method, use comma to seperate it
});