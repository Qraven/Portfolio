import { Fragment } from "react/cjs/react.production.min";
import Link from 'next/link'
import Image from 'next/image'

export default function AboutMe()
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

                <Link href='/contact/'>
                    <div id = "contact" className="float-right mx-4 m-4 drop-shadow-xl hover:font-light hover:cursor-pointer transition-all hover:bounceNew">CONTACT</div>
                  </Link>

                  <Link href='/aboutMe/'>
                    <div id = "aboutMe" className="float-right mx-4 m-4 drop-shadow-xl hover:font-light hover:cursor-pointer hover:bounceNew">ABOUT ME</div>
                  </Link>

                  <Link href='https://github.com/Qraven/'>
                    <div id = "github" className="float-right mx-4 m-4 hover:font-light hover:cursor-pointer hover:bounceNew">GITHUB</div>
                  </Link>

                  <Link href='/skills/'>
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
                <a className=" text-lg ml-14">{`{`}</a>
                <br></br>
              </span>

              <span className="text-red text-6xl">
                <a className="ml-20">Hi!<a className="text-footer text-opacity-30">{`;`}</a></a>
                <br></br>
                <a className="ml-20">It's a pleasure to meet you!<a className="text-footer text-opacity-30">{`;`}</a></a>
                <br></br>
                <br></br>
                <a className="ml-20">My name is Simon and I am<a className="text-footer text-opacity-30">{`;`}</a></a>
                <br></br>
                <a className="ml-20">a Backend Java Developer.<a className="text-footer text-opacity-30">{`;`}</a></a>
                <br></br>
                <br></br>
                <div className="border-l-4 h-14 border-solid border-pink border-opacity-30 ml-20 animate-blink"></div>
                <a className=" text-lg ml-14 text-footer text-opacity-30">{`}`}</a>
              </span>
            
              </section>


              <div className="border-l-4 h-3/4 border-solid border-pink border-opacity-30 float-left absolute left-1/2 bottom-32 rounded-lg"></div>

              <section className="w-1/4 float-right absolute bottom-16 right-52">
                
              </section>
            </span>

            <footer className="absolute bottom-2 w-full h-4/12 text-sm text-footer text-opacity-50 bg-darkPurple shadow-xl">
              <div className="p-6">
                <a className="m-2">This site was created by Szymon Roman using <b>Tailwind</b> and <b>Next.JS</b></a>
                <br></br>
                <a className="m-2">I've used the fonts <b>Roboto Mono</b> and <b>JetBrains Mono</b></a>
              </div>
              
            </footer>
        </div>
    </Fragment>
  )


}