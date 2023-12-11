import './App.css'
import { Audioclip } from './types'
import Drum from './Drum'

const audioClips: Audioclip[] = [
  {
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
    description: "Sound 1",
  },
  {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
    description: "Sound 2",
  },
  {
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
    description: "Sound 3",
  },
  {
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3",
    description: "Sound 4",
  },
  {
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/simonSound5.mp3",
    description: "Sound 5",
  },
  {
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/simonSound6.mp3",
    description: "Sound 6",
  },
  {
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/simonSound7.mp3",
    description: "Sound 7",
  },
  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/simonSound8.mp3",
    description: "Sound 8",
  },
  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/simonSound9.mp3",
    description: "Sound 9",
  },
]

function App() {
  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip= audioClips.find(
      (clip) => clip.keyTrigger === e.key.toUpperCase());
    if (!clip) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
    .play()
    .catch(console.error);

    document.getElementById("drum=" + clip.keyTrigger)?.focus();
    document.getElementById("display")!.innerText = clip.description;
   };
  return (
  <div className="container" id="drum-machine" onKeyDown={playAudio}  >
    <h1>FCC Drum Machine</h1>
    <div className="whole-drum">
      {audioClips.map((clip) => (
        <Drum audioClip={clip} key={clip.keyTrigger} />
      ))}
    </div>
    <div id="display"></div>
  </div>
  );
}

export default App;
