import styles from './page.module.css'
import Link from 'next/link'
import Gif from './gif'

const face_morphing_gifs = [
  {
    src: "/john_paul_morph_small.gif",
    alt: "John to Paul Morph"
  },
  {
    src: "/john_paul_morph_small.gif",
    alt: "John to Paul Morph"
  },
  {
    src: "/john_paul_morph_small.gif",
    alt: "John to Paul Morph"
  },
]


const byow_vids = [
  {
    src: "/proj-bee-game.webm",
    alt: "Bee game project"
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
    <body>
      <header>
        <h1> Natalia Ramirez </h1>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/natalia16/">LinkedIn </a>
          <a href="https://github.com/natalia1600">GitHub </a>
        </div>
      </header>

      <p>
        Software and data engineering | UC Berkeley Class of 2023
      </p>

      <h2>
        Projects
      </h2>
      <h3>
        Face Morphing
      </h3>
      <div className={styles.imageRow}>
        {face_morphing_gifs.map(({ src, alt }, i) => <Gif key={i} src={src} width={200} height={200} alt={alt} />)}
      </div>
      <p>
        Face morphing with OpenCV, including image shape warping
        and cross-dissolving of colors. Defined corresponding points and applied
        Delaunay triangulation for smooth transitions.


      </p>
      <h3>
        2D Tile-Based Game: BYOW
      </h3>
      <div className={styles.imageRow}>
        {byow_vids.map(({ src, alt }, i) => (
          <video width={600} playsInline autoPlay muted loop key={i}>
            <source src={src} type="video/webm" />
          </video>
        ))}
      </div>
      <p>
        2D top view tile based game engine in Java.
        Game featured pseudo-random world creation, saving and loading capabilities and dynamic tiles.
      </p>

    </body>
  )
}
