import { Fragment } from "react/cjs/react.production.min";
import Link from 'next/link'
import Image from 'next/image'

export default function contact()
{

  return (
    <Fragment>
        <div className="bg-purple w-full h-screen">

            <header className="h-1/6 overflow-hidden relative">
              <Link href="/">
                <div className = 'float-left w-1/4 m-2 hover:cursor-pointer hover:animate-pulse'>
                  <Image src='/LogoNoBg.png' alt ='my logo' width={330} height={55}/>
                </div>
              </Link>

  
             <div className = 'text-pink font-roboto font-extralight text-5xl w-3/5 float-right overflow-hidden'>

              <Link href='/Contact'>
                  <div id = "contact" className="float-right mx-4 m-4 drop-shadow-xl hover:font-light hover:cursor-pointer transition-all hover:bounceNew">CONTACT</div>
                </Link>

                <Link href='/about'>
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

            <span className="text-red text-6xl">
              <a className="ml-20">Hi!<a className="text-footer text-opacity-20 text-5xl">&#59;</a></a>
              <br></br>
              <a className="ml-20">It&#39;s a pleasure to<a className="text-footer text-opacity-20 text-5xl">&#59;</a></a>
              <br></br>
              <a className="ml-20">meet <b>you!</b><a className="text-footer text-opacity-20 text-5xl">&#59;</a></a>
              <br></br>
              <br></br>
              <a className="ml-20">My name is <i>Simon</i><a className="text-footer text-opacity-20 text-5xl">&#59;</a></a>
              <br></br>
              <a className="ml-20">and I am a Backend<a className="text-footer text-opacity-20 text-5xl">&#59;</a></a>
              <br></br>
              <a className="ml-20">Java Developer.<a className="text-footer text-opacity-20 text-5xl">&#59;</a></a>
              <br></br>
              <div className="border-l-4 h-14 border-solid border-pink border-opacity-30 ml-20 animate-blink"></div>
              <a className=" text-lg ml-14 text-footer text-opacity-30">&#125;</a>
            </span>
              
            </section>

            <div className="border-l-4 h-3/4 border-solid border-pink border-opacity-30 float-left absolute left-1/2 bottom-32 rounded-lg"></div>

            <section className="float-right absolute bottom-96 right-28 text-pink font-roboto font-light text-4xl">
            <span>
              <div className="">
                <p className="float-left inline-block align-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" className=" h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </p>
                <a className=" my-12 relative top-2">szymonroman.kontakt@gmail.com</a>
              </div>


              <br></br>
              
              <div className="">
                <p className="float-left inline-block align-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </p>
                <Link href="https://github.com/Qraven"><a target="_blank" className=" my-12 relative top-2">GitHub</a></Link>
              </div>
            </span>          
          </section>
          </span>

          <footer className="absolute bottom-2 w-full h-4/12 text-sm text-footer text-opacity-50 bg-darkPurple shadow-xl">
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
