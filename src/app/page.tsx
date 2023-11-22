import styles from './page.module.css'

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

          Hello! I&apos;m a recent UC Berkeley alum based in the Bay Area. I&apos;ve interned at Apple as a Data Scientist, and at Bank of America as a Risk Quant. Currently, I&apos;m a Cyber Defense Data Engineer for the City & County of San Francisco. Check out some of my projects below, and find my contact info in the links above.
        </div>
      </div>

      <div className={styles.pageContent}>
        <Project
          preview={<video className={styles.imageLeft} controls autoPlay playsInline muted loop >
            <source src="/waveform_viz_bjork.mp4" type="video/mp4" />
          </video>} projectName={"LIVE AUDIO WAVEFORM VISUALIZER (PYTHON)"}
          projectText={"A dynamic visualization tool for audio data, capable of processing both system audio and WAV files. \n It utilizes PyAudio for handling audio input and Pygame for rendering the visualizations in real-time. The program breaks down audio data into chunks and uses Fourier transform (FFT) to extract frequency and amplitude data. The visualization is updated with each new audio chunk, resulting in a live, animated display of the audio waveform​."}
          githubLink={"https://github.com/natalia1600/audio-viz"}
        />
        <Project
          preview={<img src={"/john_paul_morph.gif"} className={styles.imageLeft} />}
          projectName={"FACE MORPHING (PYTHON)"}
          projectText={"Face morphing between images using delauny triangulation, including image shape warping and cross-dissolving of colors. \n The program warps images by mapping key facial features identified through a point selector tool. This feature prompts users to click on specified facial markers the first time an image is processed, facilitating accurate overlay and transformation between faces. Delaunay Triangulation is utilized to divide the face into multiple triangular sections, ensuring a smooth morphing process between the images."}
          githubLink={"https://github.com/natalia1600/face-morph"}
        />
        <Project
          preview={<video className={styles.imageLeft} autoPlay playsInline muted loop>
            <source src="/proj-bee-game.webm" type="video/webm" />
          </video>}
          projectName={"BEE GAME (JAVA)"}
          projectText={"A 2D tile-based game engine focused on world exploration. It features a map generator that creates pseudo-random worlds, complete with dynamic tiles, rooms, and hallways. The core objective of the game is to navigate through these worlds, reach a tomato, and avoid bees. The game includes a saving and loading function that recalls previous actions in a fast-forward playback when reloading. "}
          githubLink={"https://github.com/natalia1600/randomworldgen"}
        />
      </div >
    </ >
  )
}
