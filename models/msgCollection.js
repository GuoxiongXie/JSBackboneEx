var MsgCollection = Backbone.Collection.extend({
	model: Message,
	
	getUnreadMessageCount : function() {
		this.at(0);	//1. use for loop
					//2. use filter function in UnderScore
	}
});