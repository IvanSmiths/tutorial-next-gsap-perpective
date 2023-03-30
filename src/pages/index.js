import { data } from "@/data/data"
import Link from "next/link"

function Home() {
  return (
    <div>
      <div className="perspective">
        <div className="perspective-inner">
          {data.map((project, index) =>
            <div key={index} className={project.class}>
              <img src={project.image} alt={project.text} />
              <div className="perspective-desc">
                <h2>{project.text}</h2>
                <Link href="/">
                  <span>Discover it</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home