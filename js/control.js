control = {
	
	latestAPIUrl: '',

	init: function() {
		
		//	This is where we set up all our events and stuff
		//	in this case we don't have any yet so yay!

		//	Load in the latest headline
		this.getLatestHeadline();

		//	Now set an interval timer to do it automatically every
		//	minute

		
	},

	getLatestHeadline: function() {
		
		$.jsonp({
		    url: 'http://content.guardianapis.com/search?page-size=1&format=json&callback=?',
		    success: function(json) {

		    	//	If we have a response and an array or results with just one item in it
		    	//	then we have gotten back a valid result we may want to work with
		    	if ('response' in json && 'results' in json.response && json.response.results.length == 1) {
		    		control.parse(json.response.results[0]);
		    	} else {
		    		//	Something odd happened but I'm not quite sure what, possibly an over rate message
		    		//	we'll do something super clever with it here
		    	}
		    },
		    error: function() {
		    	alert('need to catch this error');
		    }
		});		

	},

	parse: function(json) {

		//	Make sure it has an apiUrl and that it's different
		//	(and therefor in theory, newer) that the current
		if ('apiUrl' in json && json.apiUrl != control.latestAPIUrl) {
			console.log(json);
		}
		
	}



}