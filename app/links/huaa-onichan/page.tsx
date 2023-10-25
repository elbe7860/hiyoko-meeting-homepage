"use client"

import { useState } from "react";

import YoutubeEmbeddedLink from "@/components/atoms/YoutubeEmbeddedLink";

const urls = [
  "https://www.youtube.com/embed/Le-d6CWkq9w?si=AawqGI4dYtzAw7uZ",
  "https://www.youtube.com/embed/m-II1k1XEUY?si=UpIXVXuKpQLZ_y8g",
  "https://www.youtube.com/embed/WacKdFYe9dQ?si=TuKPDIuCPTVu4-lq",
  "https://www.youtube.com/embed/IAroCK-5Zuo?si=lFvid76D_kRwzMuG",
  "https://www.youtube.com/embed/ljx8v24NYqs?si=JuqQBsk6m6JsUejw",
  "https://www.youtube.com/embed/LbbPst1-hBU?si=dGnC_MAT3zU6L4Et",
]

export default function HuaaOnichan() {
  const [url, setUrl] = useState(urls[0])

  return (
    <div className="w-11/12 md:w-2/5 aspect-video absolute left-1/2 -translate-x-1/2 my-16">
      <YoutubeEmbeddedLink url={url}></YoutubeEmbeddedLink>

      <div className="mt-4 flex flex-row flex-1 justify-center">
        {
          urls.map((url, index) => {
            return <button className="font-bold bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4" onClick={e => setUrl(url)}>{index + 1}話</button>
          })
        }
      </div>
    </div>
  )
}
