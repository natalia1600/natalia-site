import styles from './page.module.css'
import Link from 'next/link'
import Gif from './gif'

const face_morphing_gifs = [
  {
    src: "/morph1.gif",
    alt: "John to Paul Morph"
  },
  {
    src: "/morph1.gif",
    alt: "John to Paul Morph"
  },
  {
    src: "/morph1.gif",
    alt: "John to Paul Morph"
  },
]


const byow_vids = [
  {
    src: "/byow_zoomed",
    alt: "BYOW game clip - zoomed"
  },
  {
    src: "/byow_seeds.mp4",
    alt: "BYOW game - seeds"
  }
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
        <div>
          <a href="https://www.linkedin.com/in/natalia16/">LinkedIn </a>
        </div>
        <div>
          <a href="https://github.com/natalia1600">GitHub </a>
        </div>
      </header>
      <p>
        blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
        blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
        blurb blurb blurb blurb blurb
      </p>
      <h2>
        Projects
      </h2>
      <h3>
        Face Morphing
      </h3>
      <div className={styles.imageRow}>
        {face_morphing_gifs.map(({ src, alt }) => <Gif src={src} width={200} height={200} alt={alt} />)}
      </div>
      <p>
        blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
        blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
        blurb blurb blurb blurb blurb
      </p>
      <h3>
        2D Tile-Based Game: BYOW
      </h3>
      <div className={styles.imageRow}>
        {byow_vids.map(({ src, alt }) => (
          <video width={200} height={200} autoPlay loop key={src}>
            <source src={src} type="video/mp4" />
          </video>
        ))}
      </div>
      <p>
        blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
        blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
        blurb blurb blurb blurb blurb
      </p>

    </body>
  )
}
