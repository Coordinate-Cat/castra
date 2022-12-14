import type { NextPage } from "next"
import Link from "next/link"

const About: NextPage = () => {
  return (
    <div className="ml-4 flex flex-1 flex-col items-start py-4">
      <nav className="flex">
        <Link
          className="w-fit rounded-sm border-2 border-dashed border-white bg-black px-2 py-1 text-white duration-500 ease-out hover:bg-white hover:text-black"
          href="/"
        >
          ←home
        </Link>
        <h1 className="ml-2 w-fit rounded-md border-2 border-solid border-black px-2 py-1 text-white">
          About Page
        </h1>
      </nav>
    </div>
  )
}
export default About
