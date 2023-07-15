import { Fragment } from "react/cjs/react.production.min";
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import MojeLogo from '../public/LogoNoBg.png'

export default function Aboutme()
{

  return (
    <Fragment>
      <Head>
        <title>Simon Roman</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-purple w-full h-screen">

        <header className="h-1/6 overflow-hidden relative">
          <Link href="/">
            <div className = 'float-left w-1/4 mt-1 ml-5 hover:cursor-pointer hover:animate-pulse'>
              <Image src={MojeLogo} alt ='my logo' width={600} height={100}/>
            </div>
          </Link>
        
          
          <div className = 'text-pink font-roboto font-extralight text-4xl w-3/5 float-right overflow-hidden mr-5 mt-1'>

            <Link href='/Contact'>
                <div id = "contact" className="float-right mx-4 m-4 drop-shadow-xl hover:font-light hover:cursor-pointer transition-all hover:bounceNew">CONTACT</div>
              </Link>

              <Link href='/AboutMe'>
                <div id = "aboutMe" className="float-right mx-4 m-4 drop-shadow-xl hover:font-light hover:cursor-pointer hover:bounceNew">ABOUT ME</div>
              </Link>

              <Link href='https://github.com/Qraven/'>
                <a target="_blank" className="float-right mx-4 m-4 hover:font-light hover:cursor-pointer hover:bounceNew">GITHUB</a>
              </Link>

              <Link href='/Skills'>
                <div id = "skills" className="float-right mx-4 m-4 hover:font-light hover:cursor-pointer hover:bounceNew">SKILLS</div>
              </Link>

          </div>

          <hr className="w-11/12 border-2 border-solid border-pink border-opacity-30 rounded-lg absolute top-20 right-20 ml-12"></hr>
        </header>

        <section className="">
          <div className="h-1/2 w-1/2 grid content-center text-darkPink mt-24 text-center text-2xl font-notoSans font-normal leading-8 float-left">
            My name is <b>Simon Roman</b> and I was born in Poland.
            <br></br>
            I spend my free time on cybersecurity, video games,
            <br></br>
            programming and listening to music.
            <br></br>
            As my main passion, I love teaching English to kids
            <br></br>
            and adults. I have over 5 years of person-to-person
            <br></br>
            experience in this field and I'm currently working
            <br></br>
            for an English teaching school 'Bright'.
          </div>

          {/*Vertical Divider */}
          <div className="bg-pink absolute left-1/2 -ml-0.5 w-0.5 h-2/3 float-left"></div>

          <div className="float-left w-0.5 h-0.5 grid content-center text-darkPink relative left-0 mt-24 text-center text-2xl font-notoSans font-normal leading-8">
            <div>
              TIMELINE
            </div>
            <div>
              <ul className="list-disc">
                <li></li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="absolute bottom-0 w-full h-2/12 text-sm text-footer text-opacity-50 bg-darkPurple shadow-xl">
          <div className="p-6">
            <a className="m-2">This site was created by Szymon Roman using <b>Tailwind</b> and <b>Next.JS</b></a>
            <br></br>
            <a className="m-2">I&#39;ve used the fonts <b>Roboto Mono</b> and <b>JetBrains Mono</b></a>
          </div>         
        </footer>
      </div>
    </Fragment>
  )
}