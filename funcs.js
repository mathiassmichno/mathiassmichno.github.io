function useBot (bot) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://api.michno.me:3000/slackbot/" + bot, false);
	xhr.send();
}
