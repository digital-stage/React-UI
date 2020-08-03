import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red, grey } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: grey,
  },
}));

export default function Metronome() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
    </Card>
  );
}

// var audioContext = null;
// var unlocked = false;
// var isPlaying = false;      // Are we currently playing?
// var startTime;              // The start time of the entire sequence.
// var current16thNote;        // What note is currently last scheduled?
// var tempo = 120.0;          // tempo (in beats per minute)
// var lookahead = 25.0;       // How frequently to call scheduling function
//                             //(in milliseconds)
// var soundFrequency = 880.0;
// var scheduleAheadTime = 0.1;    // How far ahead to schedule audio (sec)
//                             // This is calculated from lookahead, and overlaps
//                             // with next interval (in case the timer is late)
// var nextNoteTime = 0.0;     // when the next note is due.
// var noteResolution = 2;     // 0 == 16th, 1 == 8th, 2 == quarter note
// var noteLength = 0.05;      // length of "beep" (in seconds)
// var canvas,                 // the canvas element
//     canvasContext;          // canvasContext is the canvas' context 2D
// var last16thNoteDrawn = -1; // the last "box" we drew on the screen
// var notesInQueue = [];      // the notes that have been put into the web audio,
//                             // and may or may not have played yet. {note, time}
// var timerWorker = null;     // The Web Worker used to fire timer messages

// // First, let's shim the requestAnimationFrame API, with a setTimeout fallback
// window.requestAnimFrame = (function(){
//     return  window.requestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     window.oRequestAnimationFrame ||
//     window.msRequestAnimationFrame ||
//     function( callback ){
//         window.setTimeout(callback, 1000 / 60);
//     };
// })();

// function nextNote() {
//     // Advance current note and time by a 16th note...
//     var secondsPerBeat = 60.0 / tempo;    // Notice this picks up the CURRENT
//                                           // tempo value to calculate beat length.
//     nextNoteTime += 0.25 * secondsPerBeat;    // Add beat length to last beat time

//     current16thNote++;    // Advance the beat number, wrap to zero
//     if (current16thNote == 16) {
//         current16thNote = 0;
//     }
// }

// function scheduleNote( beatNumber, time ) {
//     // push the note on the queue, even if we're not playing.
//     notesInQueue.push( { note: beatNumber, time: time } );

//     if ( (noteResolution==1) && (beatNumber%2))
//         return; // we're not playing non-8th 16th notes
//     if ( (noteResolution==2) && (beatNumber%4))
//         return; // we're not playing non-quarter 8th notes

//     // create an oscillator
//     var osc = audioContext.createOscillator();
//     osc.connect( audioContext.destination );
//     // if (beatNumber % 16 === 0)    // beat 0 == high pitch
//     //     osc.frequency.value = 880.0;
//     if (beatNumber % 4 === 0 )    // quarter notes = medium pitch
//         osc.frequency.value = soundFrequency
//     else                        // other 16th notes = low pitch
//         osc.frequency.value = soundFrequency/2;

//     osc.start( time );
//     osc.stop( time + noteLength );
// }

// function scheduler() {
//     // while there are notes that will need to play before the next interval,
//     // schedule them and advance the pointer.
//     while (nextNoteTime < audioContext.currentTime + scheduleAheadTime ) {
//         scheduleNote( current16thNote, nextNoteTime );
//         nextNote();
//     }
// }

// function play() {
//     if (!unlocked) {
//       // play silent buffer to unlock the audio
//       var buffer = audioContext.createBuffer(1, 1, 22050);
//       var node = audioContext.createBufferSource();
//       node.buffer = buffer;
//       node.start(0);
//       unlocked = true;
//     }

//     isPlaying = !isPlaying;

//     if (isPlaying) { // start playing
//         current16thNote = 0;
//         nextNoteTime = audioContext.currentTime;
//         timerWorker.postMessage("start");
//         return false;
//     } else {
//         timerWorker.postMessage("stop");
//         return true;
//     }
// }
// var lastNotePartition = -1
// function draw() {
//   var currentNote = last16thNoteDrawn;
//   var currentTime = audioContext.currentTime;

//   while (notesInQueue.length && notesInQueue[0].time < currentTime) {
//       currentNote = notesInQueue[0].note;
//       notesInQueue.splice(0,1);   // remove note from queue
//   }
//   // We only need to draw if the note has moved.
//   // Not partition since we only care about every 4 notes
//   var notePartition = parseInt(currentNote/4)
//   if (last16thNoteDrawn != currentNote && lastNotePartition !=notePartition) {
//     blink(blinkers.eq(notePartition))
//     lastNotePartition = notePartition;
//     last16thNoteDrawn = currentNote;
//   }
//   // set up to draw again
//   requestAnimFrame(draw);
// }
// function init(){
//   blinkers = $("#blinkers").children();
//   // NOTE: THIS RELIES ON THE MONKEYPATCH LIBRARY BEING LOADED FROM
//   // Http://cwilso.github.io/AudioContext-MonkeyPatch/AudioContextMonkeyPatch.js
//   // TO WORK ON CURRENT CHROME!!  But this means our code can be properly
//   // spec-compliant, and work on Chrome, Safari and Firefox.
//   audioContext = new AudioContext();
//   // if we wanted to load audio files, etc., this is where we should do it.
//   requestAnimFrame(draw);    // start the drawing loop.
//   timerWorker = new Worker("/js/metronomeworker.js");
//   timerWorker.onmessage = function(e) {
//       if (e.data == "tick") {scheduler();}
//       else{console.log("message: " + e.data);}
//   };
//   timerWorker.postMessage({"interval":lookahead});
// }

// window.addEventListener("load", init );
