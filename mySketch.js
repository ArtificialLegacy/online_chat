var socket = io.connect(":30000?sketch=567145");

let server = {
	player: {
		username: "Username",
		totalMsg: 0
	}
}

function setup() {
	createCanvas(500, 500);
	server.player.username = prompt("What will your username be?", "Username");
	socket.on("message", chatUpdate);
}

function draw() {
	if (keyIsDown(16)) {
		chatCap = true;
	} else {
		chatCap = false;
	}
	clear();
	fill(100);
	rect(0, 0, 500, 500);
	fill(0);
	line(0, 475, 500, 475);
	text(typingChat, 10, 490);
	for (i = 0; i < 31; i++) {
		part1 = usernames[i];
		part2 = messages[i];
		if(!part1) return;
		if(!part2) return;
		message = part1 + ": " + part2;
		text(message, 10, 470 - 15*i);
	}
}

let chatCap = false;
let chatToggle = false;
let oldMessage = "";
let chatCheck = "";
let typingChat = "";
let messages = [];
let usernames = [];

function keyPressed() {
	if (keyCode === 13) {
		chatCheck = typingChat.substr(0, 1);
		if (typingChat !== "") {
			if (chatCheck !== "/") {
				socket.emit("message", server.player.username, typingChat);
				chatUpdate(server.player.username, typingChat);
				oldMessage = typingChat;
			} else {
				cmd(typingChat);
			}
		}
		typingChat = "";
		chatLength = 0;
	} else {
		typeChat();
	}
}

function cmd(c) {
	oldMessage = typingChat;
	typingChat = "";
	if (c === "/help" || c === "/h" || c === "/info") {
		chatUpdate("{SYSTEM}", "/help");
	} else {
		chatUpdate("{SYSTEM}", "Invalid Command! /help for more info!");
	}
}

function chatUpdate(u, m) {
	messages.unshift(m);
	usernames.unshift(u);
}

let chatLength = 0;
function typeChat() {
	if (keyCode === 65) {
		if (chatCap === false) {
			typingChat = typingChat + "a";
		} else if (chatCap === true) {
			typingChat = typingChat + "A";
		}
	} else if (keyCode === 66) {
		if (chatCap === false) {
			typingChat = typingChat + "b";
		} else if (chatCap === true) {
			typingChat = typingChat + "B";
		}
	} else if (keyCode === 67) {
		if (chatCap === false) {
			typingChat = typingChat + "c";
		} else if (chatCap === true) {
			typingChat = typingChat + "C";
		}
	} else if (keyCode === 68) {
		if (chatCap === false) {
			typingChat = typingChat + "d";
		} else if (chatCap === true) {
			typingChat = typingChat + "D";
		}
	} else if (keyCode === 69) {
		if (chatCap === false) {
			typingChat = typingChat + "e";
		} else if (chatCap === true) {
			typingChat = typingChat + "E";
		}
	} else if (keyCode === 70) {
		if (chatCap === false) {
			typingChat = typingChat + "f";
		} else if (chatCap === true) {
			typingChat = typingChat + "F";
		}
	} else if (keyCode === 71) {
		if (chatCap === false) {
			typingChat = typingChat + "g";
		} else if (chatCap === true) {
			typingChat = typingChat + "G";
		}
	} else if (keyCode === 72) {
		if (chatCap === false) {
			typingChat = typingChat + "h";
		} else if (chatCap === true) {
			typingChat = typingChat + "H";
		}
	} else if (keyCode === 73) {
		if (chatCap === false) {
			typingChat = typingChat + "i";
		} else if (chatCap === true) {
			typingChat = typingChat + "I";
		}
	} else if (keyCode === 74) {
		if (chatCap === false) {
			typingChat = typingChat + "j";
		} else if (chatCap === true) {
			typingChat = typingChat + "J";
		}
	} else if (keyCode === 75) {
		if (chatCap === false) {
			typingChat = typingChat + "k";
		} else if (chatCap === true) {
			typingChat = typingChat + "K";
		}
	} else if (keyCode === 76) {
		if (chatCap === false) {
			typingChat = typingChat + "l";
		} else if (chatCap === true) {
			typingChat = typingChat + "L";
		}
	} else if (keyCode === 77) {
		if (chatCap === false) {
			typingChat = typingChat + "m";
		} else if (chatCap === true) {
			typingChat = typingChat + "M";
		}
	} else if (keyCode === 78) {
		if (chatCap === false) {
			typingChat = typingChat + "n";
		} else if (chatCap === true) {
			typingChat = typingChat + "N";
		}
	} else if (keyCode === 79) {
		if (chatCap === false) {
			typingChat = typingChat + "o";
		} else if (chatCap === true) {
			typingChat = typingChat + "O";
		}
	} else if (keyCode === 80) {
		if (chatCap === false) {
			typingChat = typingChat + "p";
		} else if (chatCap === true) {
			typingChat = typingChat + "P";
		}
	} else if (keyCode === 81) {
		if (chatCap === false) {
			typingChat = typingChat + "q";
		} else if (chatCap === true) {
			typingChat = typingChat + "Q";
		}
	} else if (keyCode === 82) {
		if (chatCap === false) {
			typingChat = typingChat + "r";
		} else if (chatCap === true) {
			typingChat = typingChat + "R";
		}
	} else if (keyCode === 83) {
		if (chatCap === false) {
			typingChat = typingChat + "s";
		} else if (chatCap === true) {
			typingChat = typingChat + "S";
		}
	} else if (keyCode === 84) {
		if (chatCap === false) {
			typingChat = typingChat + "t";
		} else if (chatCap === true) {
			typingChat = typingChat + "T";
		}
	} else if (keyCode === 85) {
		if (chatCap === false) {
			typingChat = typingChat + "u";
		} else if (chatCap === true) {
			typingChat = typingChat + "U";
		}
	} else if (keyCode === 86) {
		if (chatCap === false) {
			typingChat = typingChat + "v";
		} else if (chatCap === true) {
			typingChat = typingChat + "V";
		}
	} else if (keyCode === 87) {
		if (chatCap === false) {
			typingChat = typingChat + "w";
		} else if (chatCap === true) {
			typingChat = typingChat + "W";
		}
	} else if (keyCode === 88) {
		if (chatCap === false) {
			typingChat = typingChat + "x";
		} else if (chatCap === true) {
			typingChat = typingChat + "X";
		}
	} else if (keyCode === 89) {
		if (chatCap === false) {
			typingChat = typingChat + "y";
		} else if (chatCap === true) {
			typingChat = typingChat + "Y";
		}
	} else if (keyCode === 90) {
		if (chatCap === false) {
			typingChat = typingChat + "z";
		} else if (chatCap === true) {
			typingChat = typingChat + "Z";
		}
	} else if (keyCode === 32) {
		typingChat = typingChat + " ";
	} else if (keyCode === 191) {
		if (chatCap === false) {
			typingChat = typingChat + "/";
		} else if (chatCap === true) {
			typingChat = typingChat + "?";
		}
	} else if (keyCode === 49) {
		if (chatCap === false) {
			typingChat = typingChat + "1";
		} else if (chatCap === true) {
			typingChat = typingChat + "!";
		}
	} else if (keyCode === 50) {
		if (chatCap === false) {
			typingChat = typingChat + "2";
		} else if (chatCap === true) {
			typingChat = typingChat + "@";
		}
	} else if (keyCode === 51) {
		if (chatCap === false) {
			typingChat = typingChat + "3";
		} else if (chatCap === true) {
			typingChat = typingChat + "#";
		}
	} else if (keyCode === 52) {
		if (chatCap === false) {
			typingChat = typingChat + "4";
		} else if (chatCap === true) {
			typingChat = typingChat + "$";
		}
	} else if (keyCode === 53) {
		if (chatCap === false) {
			typingChat = typingChat + "5";
		} else if (chatCap === true) {
			typingChat = typingChat + "%";
		}
	} else if (keyCode === 54) {
		if (chatCap === false) {
			typingChat = typingChat + "6";
		} else if (chatCap === true) {
			typingChat = typingChat + "^";
		}
	} else if (keyCode === 55) {
		if (chatCap === false) {
			typingChat = typingChat + "7";
		} else if (chatCap === true) {
			typingChat = typingChat + "&";
		}
	} else if (keyCode === 56) {
		if (chatCap === false) {
			typingChat = typingChat + "8";
		} else if (chatCap === true) {
			typingChat = typingChat + "*";
		}
	} else if (keyCode === 57) {
		if (chatCap === false) {
			typingChat = typingChat + "9";
		} else if (chatCap === true) {
			typingChat = typingChat + "(";
		}
	} else if (keyCode === 48) {
		if (chatCap === false) {
			typingChat = typingChat + "0";
		} else if (chatCap === true) {
			typingChat = typingChat + ")";
		}
	} else if (keyCode === 189) {
		if (chatCap === false) {
			typingChat = typingChat + "-";
		} else if (chatCap === true) {
			typingChat = typingChat + "_";
		}
	} else if (keyCode === 187) {
		if (chatCap === false) {
			typingChat = typingChat + "=";
		} else if (chatCap === true) {
			typingChat = typingChat + "+";
		}
	} else if (keyCode === 192) {
		if (chatCap === false) {
			typingChat = typingChat + "`";
		} else if (chatCap === true) {
			typingChat = typingChat + "~";
		}
	} else if (keyCode === 219) {
		if (chatCap === false) {
			typingChat = typingChat + "[";
		} else if (chatCap === true) {
			typingChat = typingChat + "{";
		}
	} else if (keyCode === 221) {
		if (chatCap === false) {
			typingChat = typingChat + "]";
		} else if (chatCap === true) {
			typingChat = typingChat + "}";
		}
	} else if (keyCode === 186) {
		if (chatCap === false) {
			typingChat = typingChat + ";";
		} else if (chatCap === true) {
			typingChat = typingChat + ":";
		}
	} else if (keyCode === 188) {
		if (chatCap === false) {
			typingChat = typingChat + ",";
		} else if (chatCap === true) {
			typingChat = typingChat + "<";
		}
	} else if (keyCode === 190) {
		if (chatCap === false) {
			typingChat = typingChat + ".";
		} else if (chatCap === true) {
			typingChat = typingChat + ">";
		}
	} else if (keyCode === 220) {
		if (chatCap === false) {
			typingChat = typingChat + "\\";
		} else if (chatCap === true) {
			typingChat = typingChat + "|";
		}
	} else if (keyCode === 222) {
		if (chatCap === false) {
			typingChat = typingChat + "'";
		} else if (chatCap === true) {
			typingChat = typingChat + "\"";
		}
	} else if (keyCode === 111) {
		typingChat = typingChat + "/";
	} else if (keyCode === 106) {
		typingChat = typingChat + "*";
	} else if (keyCode === 109) {
		typingChat = typingChat + "-";
	} else if (keyCode === 107) {
		typingChat = typingChat + "/";
	} else if (keyCode === 110) {
		typingChat = typingChat + ".";
	} else if (keyCode === 96) {
		typingChat = typingChat + "0";
	} else if (keyCode === 97) {
		typingChat = typingChat + "1";
	} else if (keyCode === 98) {
		typingChat = typingChat + "2";
	} else if (keyCode === 99) {
		typingChat = typingChat + "3";
	} else if (keyCode === 100) {
		typingChat = typingChat + "4";
	} else if (keyCode === 101) {
		typingChat = typingChat + "5";
	} else if (keyCode === 102) {
		typingChat = typingChat + "6";
	} else if (keyCode === 103) {
		typingChat = typingChat + "7";
	} else if (keyCode === 104) {
		typingChat = typingChat + "8";
	} else if (keyCode === 105) {
		typingChat = typingChat + "9";
	} else if (keyCode === 9) {
		typingChat = typingChat + "	";
	} else if (keyCode === 38) {
		typingChat = oldMessage;
	} else if (keyCode === 20) {
		if (chatToggle === false) {
			chatToggle = true;
			chatCap = true;
		} else if (chatToggle === true) {
			chatToggle = false;
			chatCap = false;
		}
	}
	if (keyCode === 8 || keyCode === 46) {
		if (chatLength !== 0) {
			typingChat = typingChat.substr(0, chatLength - 1);
			chatLength--;
		}
	} else {
		chatLength++;
	}
		typingChat = typingChat.substr(0, 64);
	}
