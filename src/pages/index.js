import { data } from "@/data/data"
import Link from "next/link"
import { useRef } from "react";

function Home() {
  const perspectiveRef = useRef(null);
  const triggerRef = useRef(null);
  const refs = data.map(() => useRef([]));

  return (
    <div>
      <div ref={triggerRef} className="perspective">
        <div ref={perspectiveRef} className="perspective-inner">
          {data.map((project, index) => (
            <div ref={refs[index]} key={index} className={project.class}>
              <img src={project.image} alt={project.text} />
              <div className="perspective-desc">
                <h2>{project.text}</h2>
                <Link href="/">
                  <span>Discover it</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home