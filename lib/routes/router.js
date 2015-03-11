Router.configure({
	homeTemplate: '/',
 	roomsTemplate: 'rooms',
 	chooseTemplate: 'choose',
 	gameTemplate: 'game'
});

Router.route('/', {
	name: 'homePage'
});

Router.route('/rooms', {
	name: 'roomPage'
});

Router.route('/choose', {
	name: 'choosePage'
});

Router.route('/game/:_id', function(){
	var game = games.findOne(this.params._id);
	this.render('gamePage', {
		data: game
	});
});