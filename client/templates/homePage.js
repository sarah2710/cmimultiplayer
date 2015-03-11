Template.homePage.helpers({
	rooms: function() {
		return games.find().fetch();
	}
});