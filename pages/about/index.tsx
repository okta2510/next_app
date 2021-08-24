import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../components/footer'
import styles from '../../styles/About.module.scss'
import Script from 'next/script'

const About: NextPage = () => {
  return (
    <div className={`container ${styles.container}`}>
      <Script
        src="/vendor/bootstrap/jquery-3.5.1.slim.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/vendor/bootstrap/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Head>
        <title>About Me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={''}>
        <h1>About me</h1>
        <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices lorem in sollicitudin efficitur. Proin imperdiet, turpis ac varius ultrices, tortor mi dictum mi, et pretium mi mi ultrices ante. Vestibulum ac sollicitudin ex. Aliquam eu urna erat. Nullam rutrum lacus bibendum fermentum mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ac nisi nec erat fermentum scelerisque nec non velit. Mauris nunc sem, placerat vitae lacus nec, bibendum ultricies lacus.</article>
        <div id="carouselId" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselId" data-slide-to="0" className="active"></li>
            <li data-target="#carouselId" data-slide-to="1"></li>
            <li data-target="#carouselId" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
                    <Image
              src="/vercel.svg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
            </div>
            <div className="carousel-item">
            <Image
               src="/vercel.svg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
            </div>
            <div className="carousel-item">
            <Image
               src="/vercel.svg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default About
