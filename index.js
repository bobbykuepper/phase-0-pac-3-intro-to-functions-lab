function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout() {
    console.log("Hello" .toUpperCase());
}logShout();
function logWhisper() {
    console.log("Hello" .toLowerCase());
}logWhisper();
function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === "let's have dinner together!") {
        return "I would love to!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
}