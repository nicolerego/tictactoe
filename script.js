$( document ).ready(function() {

	function GamePlay() {
		var player = 1
		$('span').text("Player One")
		$('td').on("click", function(){
			var self = $(this);
			if (player === 1) {
				$('span').text("Player Two")
				self.text("X");
				self.addClass("X");
				self.off();
				player -= 1;
				checkWinner();
			} else {
				$('span').text("Player One")
				self.text("O");
				self.addClass("O");
				self.off();
				player += 1;
				checkWinner();
			}
		});
	}

	GamePlay();

	function checkWinner() {
		if (
			$('#1').hasClass('X') && $('#2').hasClass('X') && $('#3').hasClass('X') ||
			$('#4').hasClass('X') && $('#5').hasClass('X') && $('#6').hasClass('X') ||
			$('#7').hasClass('X') && $('#8').hasClass('X') && $('#9').hasClass('X') ||
			$('#1').hasClass('X') && $('#4').hasClass('X') && $('#7').hasClass('X') ||
			$('#2').hasClass('X') && $('#5').hasClass('X') && $('#8').hasClass('X') ||
			$('#3').hasClass('X') && $('#6').hasClass('X') && $('#9').hasClass('X') ||
			$('#1').hasClass('X') && $('#5').hasClass('X') && $('#9').hasClass('X') ||
			$('#3').hasClass('X') && $('#5').hasClass('X') && $('#7').hasClass('X') 
			) {
			alert("X is the Winner!");
			newGame();
		} else if (
			$('#1').hasClass('O') && $('#2').hasClass('O') && $('#3').hasClass('O') ||
			$('#4').hasClass('O') && $('#5').hasClass('O') && $('#6').hasClass('O') ||
			$('#7').hasClass('O') && $('#8').hasClass('O') && $('#9').hasClass('O') ||
			$('#1').hasClass('O') && $('#4').hasClass('O') && $('#7').hasClass('O') ||
			$('#2').hasClass('O') && $('#5').hasClass('O') && $('#8').hasClass('O') ||
			$('#3').hasClass('O') && $('#6').hasClass('O') && $('#9').hasClass('O') ||
			$('#1').hasClass('O') && $('#5').hasClass('O') && $('#9').hasClass('O') ||
			$('#3').hasClass('O') && $('#5').hasClass('O') && $('#7').hasClass('O') 
			) {
			alert("O is the Winner!");
			newGame();
		} 
	}

	function newGame() {
		$('td').removeClass();
		$('td').empty();
		GamePlay();
	};

	$('.newGame').click(function(){
		newGame();
	});
});

