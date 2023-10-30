import styles from './page.module.css'
import Link from 'next/link'
import Gif from './gif'

const face_morphing_gifs = [
  {
    src: "/john_paul_morph_small.gif",
    alt: "John to Paul Morph"
  }
]


const byow_vids = [
  {
    src: "/proj-bee-game.webm",
    alt: "Bee game project"
  },
]

const waveform_vid = [
  {
    src: "/waveform_viz_bjork.mp4",
    alt: "Waveform Visualizer"
  },
]

/**
 * @todo Fix links (should be stacked)
 * @todo Only one BYOW video is rendering
 * @todo Make files for meta data
 * @todo Fix border(?) (everything more centered)

 */


export default function Home() {
  return (
    <div>
      <header>
        <h1> Natalia Ramirez </h1>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/natalia16/">LinkedIn </a>
          <a href="https://github.com/natalia1600">GitHub </a>
        </div>
      </header>
      <h4>
        📍 SF Bay Area  | Software and Data Engineering  | UC Berkeley '23
      </h4>
      <h2>
        Projects
      </h2>
      <h3>
        Waveform Visualizer
      </h3>
      <div className={styles.imageRow}>
        {waveform_vid.map(({ src, alt }, i) => (
          <video width="500" height="300" autoPlay controls key={i}>
            <source src={src} type="video/mp4" />
          </video>
        ))}

        <div>
          A real-time audio visualizer and player that uses PyAudio for audio input and FFT to transform the audio into a visual spectrogram displayed with pygame. It supports live audio input as well as playback from a .wav file while the visualizer is running.
          <br></br>
          <br></br>
          <div className={styles.links}>
            <button>
              <a href="https://github.com/natalia1600/audio-viz">
                GITHUB REPO
              </a>
            </button>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h3>
        Face Morphing
      </h3>
      <div className={styles.imageRow}>
        {face_morphing_gifs.map(({ src, alt }, i) => <Gif key={i} src={src} width={300} height={300} alt={alt} />)}
        <div>
          Face morphing with Python and OpenCV, including image shape warping
          and cross-dissolving of colors. Defined corresponding points and applied
          Delaunay triangulation for smooth transitions.
          <br></br>
          <br></br>
          <div className={styles.links}>
            <button>
              <a href="https://github.com/natalia1600/face-morph">
                GITHUB REPO
              </a>
            </button>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h3>
        2D Tile-Based Game: BYOW
      </h3>
      <div className={styles.imageRow}>
        {byow_vids.map(({ src, alt }, i) => (
          <video width={500} playsInline autoPlay muted loop key={i}>
            <source src={src} type="video/webm" />
          </video>
        ))}
        <div>
          2D top view tile based game engine in Java.
          Game featured pseudo-random world creation, saving and loading capabilities and dynamic tiles.
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  )
}
