Template.gamePage.helpers({
	fields: function() {
		var fields = [];
		var board = this.board;
		if(board) {
			board.forEach(function(field){
				if(field === 'N') {
					fields.push('neutral');
				} else if(field === 'F') {
					fields.push('forward');
				} else if(field === 'B') {
					fields.push('back');
				}
			});
			return fields;
		}
	}
})
Template.gamePage.events({
	'click #dice': function() {
		element.classList.remove('rotatein');
	    element.parentElement.classList.remove('slidein');

	    setTimeout(function (){
	        element.classList.add('rotatein');
	        element.parentElement.classList.add('slidein');
	    }, 1);

	    this.sound.pause();
	    this.sound.currentTime = 0;
	    this.sound.play();

	    game.pawns[game.activePawn].move(dice.eyes);
	}
});