var MsgCollection = Backbone.Collection.extend({
	model: Message,	//the elements in MsgCollention are Message Models
	
	getUnreadMessageCount : function() {	//define collection function
		this.at(0);	//1. use for loop
					//2. use filter function in UnderScore
	}
});