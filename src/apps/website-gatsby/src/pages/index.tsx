import * as React from "react"

export default function IndexPage() {
  return (
    <main>
      <section className="bg-fuchsia-800 h-screen flex justify-center items-center flex-col">
        <div className="h-[50rem] w-[50rem] bg-white rounded-full"></div>
      </section>
    </main>
  )
}

export function Head(){
  return <title>Home Page</title>
} 
