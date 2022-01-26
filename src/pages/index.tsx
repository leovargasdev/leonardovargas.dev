import Head from 'next/head'
import {
  BsLinkedin,
  BsGithub,
  BsDiscord,
  BsTwitch,
  BsInstagram,
  BsTwitter
} from 'react-icons/bs'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>leonardovargas.dev</title>
        <meta name="title" content="Leonardo Vargas dev" />
        <meta
          name="description"
          content="Site de portifólio de Leonardo Vargas"
        />
      </Head>

      <h1 className={styles.title}>LEONARDO VARGAS</h1>

      <div className={styles.medias}>
        <a
          role="link"
          href="https://www.linkedin.com/in/leonardo-luis-de-vargas/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          role="link"
          href="https://github.com/LeeonardoVargas"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a role="link" href="" target="_blank">
          <BsDiscord />
        </a>
        <a
          role="link"
          href="https://twitter.com/leuvargas"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
        <a
          role="link"
          href="https://www.twitch.tv/leovargasdev"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitch />
        </a>
        <a
          role="link"
          href="https://www.instagram.com/leuvargas/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  )
}
