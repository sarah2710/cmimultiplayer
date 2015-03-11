if(games.find().count() === 0) {
	games.insert({
		board:  ["N", "N", "B", "N", "B", "N", "F", "F", "B", "N", "N", "N", "F", "N", "N"],
		pawns: [],
		activePawn: '',
		title: 'Gameroom 1'
	});
}

if(pawns.find().count() === 0) {
	pawns.insert({
		player: 'player one'
	});
	pawns.insert({
		player: 'player two'
	});
	pawns.insert({
		player: 'player three'
	});	
}
