import { Fragment } from "react/cjs/react.production.min";
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage()
{

  return (
    <Fragment>
      <div className="bg-purple w-full h-screen">

        <header className="h-1/4 overflow-hidden">
          <Link href="/">
            <div className = 'float-left w-2/5'>logo</div>
          </Link>
        
          
          <div className = 'text-pink font-roboto font-light text-5xl w-3/5 float-right overflow-hidden textShadow-default'>

            <Link href='/contact/'>
                <div id = "contact" className="float-right m-4 drop-shadow-xl">CONTACT</div>
              </Link>

              <Link href='/aboutMe/'>
                <div id = "aboutMe" className="float-right m-4 drop-shadow-xl">ABOUT ME</div>
              </Link>

              <Link href='https://github.com/Qraven/'>
                <div id = "github" className="float-right m-4">GITHUB</div>
              </Link>

              <Link href='/skills/'>
                <div id = "skills" className="float-right m-4">SKILLS</div>
              </Link>

          </div>
        </header>

        <span className="contents">
          <section className="w-1/2 float-left">xd</section>

          <section className="w-1/2 float-right">
            <Image src='/mainImage.png' alt ='programming emoji' width={500} height={500}/>
          </section>
        </span>

        <footer className="absolute bottom-2 w-full h-4/12 text-sm text-footer text-opacity-50 bg-darkPurple shadow-xl">
          <div className="p-6">
            <a className="m-2">This site was created by Szymon Roman using <b>Tailwind</b> and <b>Next.JS</b></a>
            <br></br>
            <a className="m-2">I've used the fonts <b>Roboto Mono</b></a>
          </div>
          
        </footer>
      </div>
      


      
    </Fragment>
  )


}