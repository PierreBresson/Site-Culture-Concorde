(function(){
	if(window.jQuery){
		$ = window.jQuery;
	}
	$(document).ready(function(){

		var songsArray = [
			{
				name: "chill",
				url: "music/darius.mp3",
			},
      		{
				name: "house",
				url: "music/feel.mp3",
			},
			{
				name: "deep",
				url: "music/feel.mp3",
			},
		];


		var options = {
			random: false,
			loop: false,
		};

		//console.log(peakPlayer);
		var myPeakPlayer = new peakPlayer(options);
		window.myPeakPlayer = myPeakPlayer;
		myPeakPlayer.addSongs(songsArray);
		var currentSongPlaying = 10;
		var musicIsPlaying = false;
		var currentPlaylist = "none"; //à coder


		$("#Chill").on({
			click : function(e){
				e.preventDefault();
				if (currentSongPlaying == 10) {
					console.log("init");
					currentSongPlaying = 0;
					musicIsPlaying = true;
					myPeakPlayer.playSong(currentSongPlaying);
					$("#Chill").removeClass('icon-play');
					$("#Chill").addClass('icon-pause');
				} else {
					if (currentSongPlaying == 0) {
						if (!musicIsPlaying) {
							musicIsPlaying = true;
							myPeakPlayer.playSong(currentSongPlaying);
							$("#Chill").removeClass('icon-play');
							$("#Chill").addClass('icon-pause');
						}
						else {
							musicIsPlaying = false;
							myPeakPlayer.stopThatSong();
							$("#Chill").removeClass('icon-pause');
							$("#Chill").addClass('icon-play');
						}
					} else {
						currentSongPlaying = 0;
						if (musicIsPlaying) {
							musicIsPlaying = true;
							myPeakPlayer.playSong(currentSongPlaying);
							$("#Chill").removeClass('icon-play');
							$("#Chill").addClass('icon-pause');
						}
						else {
							musicIsPlaying = false;
							myPeakPlayer.stopThatSong();
							$("#Chill").removeClass('icon-pause');
							$("#Chill").addClass('icon-play');
						}
					}
				}
			}
		});


		$("#House").on({
			click : function(e){
				e.preventDefault();
				if (currentSongPlaying == 10) {
					console.log("init");
					currentSongPlaying = 1;
					musicIsPlaying = true;
					myPeakPlayer.playSong(currentSongPlaying);
					$("#House").removeClass('icon-play');
					$("#House").addClass('icon-pause');
				} else {
					if (currentSongPlaying == 1) {
						if (!musicIsPlaying) {
							musicIsPlaying = true;
							myPeakPlayer.playSong(currentSongPlaying);
							$("#House").removeClass('icon-play');
							$("#House").addClass('icon-pause');
						}
						else {
							musicIsPlaying = false;
							myPeakPlayer.stopThatSong();
							$("#House").removeClass('icon-pause');
							$("#House").addClass('icon-play');
						}
					} else {
						currentSongPlaying = 1;
						if (musicIsPlaying) {
							musicIsPlaying = true;
							myPeakPlayer.playSong(currentSongPlaying);
							$("#House").removeClass('icon-play');
							$("#House").addClass('icon-pause');
						}
						else {
							musicIsPlaying = false;
							myPeakPlayer.stopThatSong();
							$("#House").removeClass('icon-pause');
							$("#House").addClass('icon-play');
						}
					}
				}
			}
		});


		$("#Deep").on({
			click : function(e){
				e.preventDefault();
				myPeakPlayer.playSong(2);
				$("#Deep").removeClass('icon-play');
				$("#Deep").addClass('icon-pause');
			}
		});



		myPeakPlayer.onPlay = function(currentSong){
			$("#playSongButton span").addClass('glyphicon-pause');
      $("#playSongButton").addClass('active');
		};

		myPeakPlayer.onPause = function(currentSong){
			$("#playSongButton span").removeClass('glyphicon-pause');
      $("#playSongButton").removeClass('active');
		};

		
	});
})();