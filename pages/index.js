import { Fragment } from "react/cjs/react.production.min";
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import MojeLogo from '../public/LogoNoBg.png'
import MainImage from '../public/mainImage.png'

export default function HomePage()
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
            <div className = 'float-left w-1/4 m-2 hover:cursor-pointer hover:animate-pulse'>
              <Image src={MojeLogo} alt ='my logo' width={600} height={100}/>
            </div>
          </Link>
        
          
          <div className = 'text-pink font-roboto font-extralight text-5xl w-3/5 float-right overflow-hidden'>

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

          <hr className=" w-11/12 border-2 border-solid border-pink border-opacity-30 rounded-lg absolute top-20 right-20 ml-12"></hr>
        </header>

        <span className="w-full">
          <section className="w-1/2 float-left relative bottom-10 animate-fade mt-14 font-jetbrains font-regular">
            <span className="text-footer text-opacity-30 ">
             <a className=" text-lg ml-14 font-jetbrains">public void portolio()</a>
             <br></br>
             <a className=" text-lg ml-14">&#123;</a>
             <br></br>
            </span>

            <span className="text-red text-6xl ">
              <a className="">Hi!<a className="text-footer text-opacity-30">&#59;</a></a>
              <br></br>
              <a className="">It&#39;s a pleasure to meet you!<a className="text-footer text-opacity-30">&#59;</a></a>
              <br></br>
              <br></br>
              <a className="">My name is Simon and I am<a className="text-footer text-opacity-30">&#59;</a></a>
              <br></br>
              <a className="">a Backend Java Developer.<a className="text-footer text-opacity-30">&#59;</a></a>
              <br></br>
              <a className="">Backend Java Developer.<a className="text-footer text-opacity-30">&#59;</a></a>
              <br></br>
              <div className="border-l-4 h-14 border-solid border-pink border-opacity-30 ml-20 animate-blink"></div>
              <a className=" text-lg ml-14 text-footer text-opacity-30">&#125;</a>
            </span>
            
          </section>

          <hr className="border-l-4 h-2/3 border-solid border-pink border-opacity-30 float-left absolute left-1/2 bottom-32 rounded-lg"></hr>

          <section className="w-1/4 float-right fixed bottom-12 right-2">
            <Image src='/mainImage.png' alt ='programming emoji' width={1000} height={1000}/>
          </section>
        </span>

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