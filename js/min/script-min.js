!function(){window.jQuery&&($=window.jQuery),$(document).ready(function(){var a=[{name:"chill",url:"music/darius.mp3"},{name:"house",url:"music/feel.mp3"},{name:"deep",url:"music/feel.mp3"}],o={random:!1,loop:!1},l=new peakPlayer(o);window.myPeakPlayer=l,l.addSongs(a);var s=10,e=!1,n="none";$("#Chill").on({click:function(a){a.preventDefault(),10==s?(console.log("init"),s=0,e=!0,l.playSong(s),$("#Chill").removeClass("icon-play"),$("#Chill").addClass("icon-pause")):0==s?e?(e=!1,l.stopThatSong(),$("#Chill").removeClass("icon-pause"),$("#Chill").addClass("icon-play")):(e=!0,l.playSong(s),$("#Chill").removeClass("icon-play"),$("#Chill").addClass("icon-pause")):(s=0,e?(e=!0,l.playSong(s),$("#Chill").removeClass("icon-play"),$("#Chill").addClass("icon-pause")):(e=!1,l.stopThatSong(),$("#Chill").removeClass("icon-pause"),$("#Chill").addClass("icon-play")))}}),$("#House").on({click:function(a){a.preventDefault(),10==s?(console.log("init"),s=1,e=!0,l.playSong(s),$("#House").removeClass("icon-play"),$("#House").addClass("icon-pause")):1==s?e?(e=!1,l.stopThatSong(),$("#House").removeClass("icon-pause"),$("#House").addClass("icon-play")):(e=!0,l.playSong(s),$("#House").removeClass("icon-play"),$("#House").addClass("icon-pause")):(s=1,e?(e=!0,l.playSong(s),$("#House").removeClass("icon-play"),$("#House").addClass("icon-pause")):(e=!1,l.stopThatSong(),$("#House").removeClass("icon-pause"),$("#House").addClass("icon-play")))}}),$("#Deep").on({click:function(a){a.preventDefault(),l.playSong(2),$("#Deep").removeClass("icon-play"),$("#Deep").addClass("icon-pause")}}),l.onPlay=function(a){$("#playSongButton span").addClass("glyphicon-pause"),$("#playSongButton").addClass("active")},l.onPause=function(a){$("#playSongButton span").removeClass("glyphicon-pause"),$("#playSongButton").removeClass("active")}})}();