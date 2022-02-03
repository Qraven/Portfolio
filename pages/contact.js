import { Fragment } from "react/cjs/react.production.min";
import Link from 'next/link'

export default function HomePage()
{

  return (
    <Fragment>
      <div className="bg-purple">

          <header>
            <Link href="/">
              <div className = 'Logo'>logo</div>
            </Link>

            
            <div className = 'text-pink'>
              <Link href='https://github.com/Qraven/'>
                <div id = "github" className="bg">GITHUB</div>
              </Link>

              <Link href='/skills/'>
                <div id = "skills" className="button">SKILLS</div>
              </Link>

              <Link href='/aboutMe/'>
                <div id = "aboutMe" className="button">ABOUT ME</div>
              </Link>

              <Link href='/contact/'>
                <div id = "contact" className="button">CONTACT</div>
              </Link>

            </div>
          </header>

        <span className="contents">
          <section className="content1">hi im simon</section>
          <section className="content2">contact ;D</section>
        </span>

        <footer>This site was created by Szymon Roman</footer>

      </div>
    </Fragment>
  )


}