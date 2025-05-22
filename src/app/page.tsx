// Plan:
// Container Divs:
// Introduction/Hero Div
// Sample Project Divs
// Footer with contact and excess info about me.

import CardContainer from "@/components/client/card-container";

export default function Home() {
  return (
    <>
      <CardContainer
        title="Hello, I am Cristiano Miranda"
        description="and I am a Junior Web Developer."
        links={[
          { linkName: "Portfolio", href: { href: "/" } },
          { linkName: "Credentials", href: { href: "/" } },
        ]}
      >
        <div>
          <h3>2+</h3>
          <span>Years of Web Development Experience</span>
        </div>

        <div>
          <h3>20+</h3>
          <span>Web Projects</span>
        </div>
      </CardContainer>

      <CardContainer
        title="Introduction:"
        description="Allow me to introduce myself..."
        links={[
          { linkName: "About", href: { href: "/" } },
          { linkName: "Contact", href: { href: "/" } },
        ]}
      >
        <p>
          I am Cristiano Miranda, and I currently pursuing a Bachelor Degree in
          Computer Science and in my free time I work on personal and volunteer
          projects. I have well over 2 years of experience with HTML, CSS, and
          JavaScript. Along with almost 1 year of experience with React. As of
          now, I am currently working with NextJs and NodeJs and so that I
          continue working towards a career as a fullstack engineer.
        </p>
      </CardContainer>

      <CardContainer
        title="My Portfolio"
        description="Some of my personal favorite projects."
        links={[{ linkName: "Portfolio", href: { href: "/" } }]}
      >
        <div>
          <h2>Project One</h2>
        </div>
        <div>
          <h2>Project Two</h2>
        </div>
      </CardContainer>
    </>
  );
}
