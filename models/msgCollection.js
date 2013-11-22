var MsgCollection = Backbone.Collection.extend({
	model: Message,	//the elements in MsgCollention are Message Models
	
	getUnreadMessageCount : function() {	//define collection function
		/*Two ways to count the unread msg:
		 * 1. use for loop: this.at(0);
		 * 2. use filter function in UnderScore.js, in this example I'll use filter function
		*/
		
		//var unreadMsgArray = _.filter(this, function(aMsgModel) { return aMsgModel.get('unRead') === true; }); //this one doesn't work, get function not defined. 
		
		var unreadMsgCollection = new Backbone.Collection(this.filter(function(aMsgModel) {		//this.filter returns an array; I wrap the array with collection
    		return aMsgModel.get('unread') === true;
		}));
		
		return unreadMsgCollection.size();
	}
});