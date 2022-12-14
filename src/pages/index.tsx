/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { NextPage } from "next"
import Head from "next/head"

// import Image from "next/image"
import { SearchEngines } from "@/components/SearchEngines/SearchEngines"

// searchEngine.json import
import searchEngine from "../data/json/searchEngine.json"

// json整形
const searchEngineJson = JSON.stringify(searchEngine)
const searchEngineData = JSON.parse(searchEngineJson)

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {/* <Link className="text-2xl font-bold leading-loose" href="/about">
          About App
        </Link>
        <Link className="text-2xl font-bold leading-loose" href="/socialMedia">
          Social Media App
        </Link> */}

        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */}
        {searchEngineData.map(
          (link: { title: string; icon: string; url: string; description: string }) => (
            <SearchEngines
              key={link.title}
              title={link.title}
              icon={link.icon}
              url={link.url}
              description={link.description}
            />
          ),
        )}

        {/* <div className="flex">
          <h1 className="m-0 flex items-end text-jb text-neutral-800">Castra Demo v0.1.0</h1>
        </div> */}
      </main>
    </div>
  )
}

export default Home
