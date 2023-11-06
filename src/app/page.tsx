import styles from './page.module.css'
import Link from 'next/link'

/**
 * @todo Fix links (should be stacked)
 * @todo Only one BYOW video is rendering
 * @todo Make files for meta data
 * @todo Fix border(?) (everything more centered)

 */

interface IProps {
  preview: React.ReactElement;
  projectName: string;
  projectText: string;
  githubLink: string;
}

const Project = ({ preview, projectName, projectText, githubLink }: IProps) => {
  return (<div className={styles.projectContainer}>
    {preview}
    <div className={styles.textContainer}>
      <div className={styles.itemName}>{projectName}</div>
      <div className={styles.itemText}>{projectText}</div>
      <a href={githubLink}>
        <button>GITHUB REPO</button>
      </a>
    </div>
  </div>
  )
}

export default function Home() {
  return (
    <>
      <header>
        <h1>Natalia Ramirez</h1>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/natalia16/">LINKEDIN </a>
          <a href="https://github.com/natalia1600">GITHUB </a>
          <a href="./Natalia_Ramirez_Resume.pdf">RESUME</a>
        </div>
      </header>

      <div className={styles.headingText}>
        SF Bay Area |  UC Berkeley 2023
      </div>



      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroHeading}>
            DATA / SOFTWARE ENGINEERING
          </div>

          Hello! I&apos;m a recent UC Berkeley alumn based in the Bay Area. I&apos;ve interned at Apple as a Data Scientist, and at Bank of America as a Risk Quant. Currently, I&apos;m a Cyber Defense Data Engineer for the City & County of San Francisco. Check out some of my projects below, and find my contact info in the links above.
        </div>
      </div>

      <div className={styles.pageContent}>
        <Project
          preview={<video className={styles.imageLeft} controls >
            <source src="/waveform_viz_bjork.mp4" type="video/mp4" />
          </video>} projectName={"LIVE AUDIO WAVEFORM VISUALIZER"}
          projectText={"A real-time audio visualizer and player that uses PyAudio for audio input and FFT to transform the audio into a visual spectrogram displayed with pygame. It supports live audio input as well as playback from a .wav file while the visualizer is running."}
          githubLink={"https://github.com/natalia1600/audio-viz"}
        />
        <Project
          preview={<img src={"/john_paul_morph_small.gif"} className={styles.imageLeft} />}
          projectName={"FACE MORPHING"}
          projectText={"Face morphing with Python and OpenCV, including image shape warping and cross-dissolving of colors. Defined corresponding points and applied Delaunay triangulation for smooth transitions."}
          githubLink={"https://github.com/natalia1600/face-morph"}
        />
        <Project
          preview={<video className={styles.imageLeft} autoPlay playsInline muted loop>
            <source src="/proj-bee-game.webm" type="video/webm" />
          </video>}
          projectName={"TILE BASED GAME / RANDOM WORLDS"}
          projectText={"2D top view tile based game engine in Java. Game featured pseudo-random world creation, saving and loading capabilities and dynamic tiles."}
          githubLink={"https://github.com/natalia1600/randomworldgen"}
        />
      </div >
    </ >
  )
}
