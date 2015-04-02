// 2. First we need to be able to parse individual notes. 
// Write a function `parseNote` that takes a string representing a single note (e.g. "C#*2") and 
// returns a note object (e.g. {pitch: "C#", beats: 2}). If the user doesn't provide a number of 
// beats (e.g. "C#") then set beats to 1.

var parseNote = function(string) {
  var array = string.split("*");
  var object = {};
  if (array.length === 2) {
    object.pitch = array[0];
    object.beats = parseInt(array[1]);
  }else {
    object.pitch = array[0];
    object.beats = 1;
  }
  return object;
}

// var notes = [{pitch: 'A', beats: 1}, {pitch: 'C#', beats: 2}, {pitch: 'D', beats: 4}];
// // Play the song at 400 beats per minute.
// playSong(notes, 400);

// console.log(parseNote("D*3"));

// 3. Now let's parse a whole song string. Write a function `parseSong` that takes a song string as above, 
// and returns an array of note objects. The `parseSong` function should use the `parseNote` function.

// ```js
// // Example usage
// parseSong("Ab B"); // => [{pitch: 'Ab', beats: 1}, {pitch: 'B', beats: 1}]

var parseSong = function(song) {
  var songArray = song.split(" ");
  var songObjectArray = [];

  for (var i = 0; i < songArray.length; i += 1) {
    songObjectArray.push(parseNote(songArray[i]));
  }
  return songObjectArray;
}

// console.log(parseSong("D D*2 Ab Ab*3 E*5"));

// 4. Finally, let's build our amazing Jukebox! Create an HTML page that, when loaded, prompts the 
// user for a song string and plays the song. To keep things clean, please use two script tags in your 
// page. One to load the provided `player.js` file, and one to load your own `jukebox.js` file.


var playUsersSong = function() {
  var x = prompt("Please enter another song!");
  playSong(parseSong(x), 400, playUsersSong);
}


playUsersSong()

// 5. [Bonus] When the song if finished playing, prompt the user for another song, forever! Hint: You can 
// pass an optional 3rd parameter to `playSong`, a function that will get called when the song is finished 
// playing, as shown below.

// ```js
// var onComplete = function () {
//   console.log('Song finished playing');
// }

// playSong(song, bpm, onComplete);
// ```












