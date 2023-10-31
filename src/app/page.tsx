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
        <h1>Natalia Ramirez </h1>

        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/natalia16/">LinkedIn </a>
          <a href="https://github.com/natalia1600">GitHub </a>
        </div>
      </header>
      <h4>
        📍 SF Bay Area  | Software and Data Engineering  | UC Berkeley 2023
      </h4>
      <h5>
        Hello! I'm a UC Berkeley alumnus based in the Bay Area. Previously, I interned as a Data Scientist at Apple and as a Quantitative Risk Analyst at Bank of America. Currently, I serve as a Cyber Defense Data Engineer for the City & Government of San Francisco.
      </h5>
      <div className={styles.heading}>
        Projects
      </div>
      <div className={styles.item}>
        Waveform Visualizer
      </div>
      <div className={styles.projectContainer}>

        <video controls >
          <div className={styles.imageLeft}>
            <source src="/waveform_viz_bjork.mp4" type="video/mp4" />
          </div>
        </video>
        <div className={styles.textContainer}>
          <div className={styles.textRight}>
            <div className={styles.itemText}>
              A real-time audio visualizer and player that uses PyAudio for audio input and FFT to transform the audio into a visual spectrogram displayed with pygame. It supports live audio input as well as playback from a .wav file while the visualizer is running.
            </div>
          </div>
          <button>
            <a href="https://github.com/natalia1600/audio-viz">
              GITHUB REPO
            </a>
          </button>
        </div>
      </div >


      <div className={styles.item}>
        Face Morphing
      </div>
      <div className={styles.projectContainer}>
        <div className={styles.imageLeft}>
          {face_morphing_gifs.map(({ src, alt }, i) =>
            <Gif key={i} src={src} width={300} height={300} alt={alt} />)}
        </div>

        <div className={styles.textContainer}>
          <div className={styles.textRight}>
            <div className={styles.itemText}>
              Face morphing with Python and OpenCV, including image shape warping and cross-dissolving of colors. Defined corresponding points and applied Delaunay triangulation for smooth transitions.
            </div>
            <div className={styles.links}>
              <button>
                <a href="https://github.com/natalia1600/face-morph">
                  GITHUB REPO
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.item}>
        2D Tile-Based Game: BYOW
      </div>
      <div className={styles.projectContainer}>

        {byow_vids.map(({ src, alt }, i) => (

          <video playsInline autoPlay muted loop controls>
            <div className={styles.imageLeft}>
              <source src="/proj-bee-game.webm" type="video/webm" />
            </div>
          </video>
        ))}
        <div className={styles.textContainer}>
          <div className={styles.textRight}>
            <div className={styles.itemText}>
              2D top view tile based game engine in Java. Game featured pseudo-random world creation, saving and loading capabilities and dynamic tiles.
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}
