var Inbox = Backbone.Model.extend({
	defaults : {
		username : "James",
		msg : [
			new Message()
		]
	},	//if you wanna add more method, use comma to seperate it
	
	initialize : function (myJsonData) {
		this.set('username', myJsonData.username);
		//this.set('msg', [new Message({
			//subject : "hi there",
			//sender : "Oz",
			//content : "bla bla bla"
		//})])
		
		//var msgArray = [];
		
		//for (var i = 0; i < myJsonData.msg.length; i++) {
			//msgArray.push(new Message(myJsonData.msg[i]));	//works like append
		//}
		
		this.set('msg', new MsgCollection(myJsonData.msg));
	}
});