// Plan:
    // Container Divs:
        // Introduction/Hero Div
        // Sample Project Divs
        // Footer with contact and excess info about me.

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>

        <h1>Hello, I am Cristiano Miranda</h1>
        <h2>and I am a Junior Web Developer.</h2>

        <div>
          <h3>2+</h3>
          <span>Years of Web Development Experience</span>
        </div>
        
        <div>
          <h3>20+</h3>
          <span>Web Projects</span>
        </div>

        <Link href={{href: '/'}}>Portfolio</Link>
        <Link href={{href: '/'}}>Credentials</Link>
      </div>

      <div>
        <h1>Introduction:</h1>
        <h2>Allow me to introduce myself...</h2>
        <p>
          I am Cristiano Miranda, and I currently pursuing a Bachelor Degree in Computer Science and in my free time I work on personal and volunteer projects.
          I have well over 2 years of experience with HTML, CSS, and JavaScript. Along with almost 1 year of experience with React. 
          As of now, I am currently working with NextJs and NodeJs and so that I continue working towards a career as a fullstack engineer.
        </p>
      </div>

      <div>
        <h1>My Portfolio:</h1>
        <div>
          <h2>Project One</h2>
        </div>
      </div>
    </>
  );
}
