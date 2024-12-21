import React from 'react'
export const metadata = {
    title: "VTG BLOG",
    description: "Official: VilmaoTech global website! vilmaotech, Vilmaotech, VilmaoTech",
  };
const key_def = () => {
    
  return (
    <main>
        <h1 className="text-center font-bold text-4xl text-sky-400">VilmaoTech Global Blog/News</h1>

        <div className="font-semibold text-2xl">
            <p>Article(s)</p>
            <ul>
                <a href="/key/news/no-key"><li>NAME</li></a>
                ----
                <a href="/key/news/24-12-21_k-starting-blog"><li>Article: Starting Blog!</li></a>

            </ul>
        </div>
    </main>
  )
}

export default key_def