import Image from "next/image"
import visagebookimg from "../images/visagebook.png"
import chirpimg from "../images/chirp.png"
import Link from "next/link"

export default function Home() {
  return (
    <main className="p-4">
      <div className="flex flex-col">
        <div className="text-3xl font-bold ">Jaden Enzbrenner</div>
        <div className="mt-4 text-xl font-bold">Fullstack Web Developer</div>
        <div className="mt-4 text-sm">
          Striving to make modern, accessible, and user-centric websites that
          deliver exceptional user experiences.
        </div>
      </div>

      <div>
        <div className="mt-4 text-2xl font-bold">ABOUT ME</div>
        <p>
          Hi there! I&apos;m Jaden, an adaptable full stack web developer. With
          a passion for learning and a drive to create impactful web solutions,
          I&apos;m ready to take on new challenges and contribute to innovative
          projects. When I&apos;m not working I love playing video games,
          reading books, watching movies, and playing with my two cats.
          Let&apos;s build something great together!
        </p>
      </div>
      <div className="mt-4">
        <Link className="font-bold" href="">
          View Full Resume
        </Link>
      </div>

      <div>
        <div className="mt-4 text-2xl font-bold">PROJECTS</div>
        <ul>
          <li>
            <div className="mt-4 text-xl font-bold">Visagebook</div>
            <p className="text-sm text-gray-300">
              Fullstack social media site styled after Facebook made using the
              T3 stack. Great experience learning to make features including
              public posts, account management, friends list account association
              management, and other features essential to make a modern social
              media site.{" "}
            </p>
            <Image
              className="my-2"
              src={visagebookimg}
              alt="Preview of Visagebook site"
              width={200}
              height={150}
            />
          </li>
          <li>
            <div className="mt-2 text-xl font-bold">Chirp</div>
            <p className="text-sm text-gray-300">
              Fullstack social media site styled after Twitter using the T3
              stack. Posts can only contain emojis in this fun little practice
              project.
            </p>
            <Image
              src={chirpimg}
              className="my-2"
              alt="Preview of Chirp clone site"
              width={200}
              height={150}
            />
          </li>
          <li>
            <div className="mt-2 text-xl font-bold">Blog Site</div>
            <p className="text-sm text-gray-300">
              Fullstack blog site made using Next.js with server side rendering.
            </p>
          </li>
        </ul>
      </div>
    </main>
  )
}
