$(function() {
    // Definir playlist
    var playlist = [{
        artist: 'Sertanejo',
        title: 'Batom de cereja',
        mp3: 'songs/batom-de-cereja.mp3'
    }, {
        artist: 'Sertanejo',
        title: 'Bebi Liguei',
        mp3: 'songs/bebi-liguei.mp3'
    },
	{
        artist: 'Funk',
        title: 'Coração Gelado 2',
        mp3: 'songs/coracao-gelado-2.mp3'
    },
	{
        artist: 'Funk',
        title: 'De lado de quatro',
        mp3: 'songs/de-lado-de-quatro.mp3'
    },
	{
        artist: 'Funk',
        title: 'De mochila e de radin',
        mp3: 'songs/de-mochila-e-de-radin.mp3'
    },
	{
        artist: 'Funk',
        title: 'Disco arranhado',
        mp3: 'songs/dico-arranhado.mp3'
    },
	{
        artist: 'Funk',
        title: 'Espirra o lança',
        mp3: 'songs/espirra-o-lanca.mp3'
    },
	{
        artist: 'Funk',
        title: 'Eu catuquei',
        mp3: 'songs/eu-catuquei.mp3'
    },
	{
        artist: 'Funk',
        title: 'Redes sociais',
        mp3: 'songs/redes-sociais.mp3'
    },
]; 
	var currentTrack = 0;
	var numTracks = playlist.length;

	var player = $(".player").jPlayer({
		ready: function () {
			// configura a faixa inicial do jPlayer
			player.jPlayer("setMedia", playlist[currentTrack])
			 
			// reproduzir a faixa atual. Se não quiser que o player comece a tocar automaticamente, retir esta linha
			player.playCurrent();
		},
		ended: function() {
			// quando terminar de tocar uma música, ir para a próxima
			$(this).playNext();
		},
		play: function(){
			// quando começar a tocar, escrever o nome da faixa sendo executada
			$('.player-current-track').text(playlist[currentTrack].artist+' - '+playlist[currentTrack].title);
		},
		swfPath: 'js/plugins/jplayer/',
		supplied: "mp3",
		cssSelectorAncestor: "",
		cssSelector: {
			play: '.player-play',
			pause: ".player-pause",
			stop: ".player-stop",
			seekBar: ".player-timeline",
			playBar: ".player-timeline-control"
		},
		size: {
			width: "1px",
			height: "1px"
		}
	});
	
	 player.playCurrent = function() {
		player.jPlayer("setMedia", playlist[currentTrack]).jPlayer("play");
	 }

	 player.playNext = function() {
	   currentTrack = (currentTrack == (numTracks -1)) ? 0 : ++currentTrack;
	   player.playCurrent();
	 };

	 player.playPrevious = function() {
		 currentTrack = (currentTrack == 0) ? numTracks - 1 : --currentTrack;
		 player.playCurrent();
	 };
	 
	  $('.player-next').click(function() {
		 player.playNext();
	 });
	  
	 $('.player-prev').click(function() {
		player.playPrevious();
	 });

});
