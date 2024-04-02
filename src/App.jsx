import "./App.css";

function App() {
  return (
    <main className="w-10/12 my-0 mx-auto mt-3 flex flex-col justify-center items-center gap-y-6">
      <section className="flex justify-center items-center h-96 gap-x-6">
        <div className="avatar">
          <div className="w-36 rounded-full">
            <img src="src/assets/logo.jpg" />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold">Jean-Alexie Cantos</h1>
          <p className="text-4xl font-bold text-primary">Front-end developer</p>
        </div>
      </section>

      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-3xl text-secondary font-medium">
          About me
        </div>
        <div className="collapse-content">
          <p className="text-xl">
            Hello, I&apos;m Jean-Alexie, a junior front-end developer eager to
            kick-start my career in web development. Although I&apos;m new to
            the industry, I&apos;ve honed my skills in web development through
            hands-on projects and coursework. I&apos;m enthusiastic about
            learning and excited to help building something great together!
          </p>
        </div>
      </div>

      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-3xl text-secondary font-medium">
          Projects
        </div>
        <div className="collapse-content">
          <div className="flex justify-center gap-x-3">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src="src/assets/ohmyfood.PNG" alt="Ohmyfood" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Ohmyfood</h3>
                <p>
                  In this project, I had to make their &quot;mobile first&quot;
                  website which lists the menus of goumet restaurants. The goal
                  of this project was to liven up a web page with CSS
                  animations. I used for this project HTML, CSS and Sass.
                </p>
                <a className="link link-secondary">See more</a>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">HTML</div>
                  <div className="badge badge-outline">CSS</div>
                  <div className="badge badge-outline">Sass</div>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src="src/assets/booki.png" alt="Booki" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Booki</h3>
                <p>
                  In this project, I had to make the website for a start-up
                  called Booki which allows to the users to find accomodation
                  and activities in the city of their choice. The goal of this
                  project was to turn a mock-up into a website with only HTML &
                  CSS.
                </p>
                <a className="link link-secondary">See more</a>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">HTML</div>
                  <div className="badge badge-outline">CSS</div>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src="src/assets/kasa.png" alt="Kasa" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Kasa</h3>
                <p>
                  In this project, I had to make the website for a company
                  called Kasa which allows to the users to rent apartments. The
                  goal of this project was to create a web app with React.
                </p>
                <a className="link link-secondary">See more</a>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">React</div>
                  <div className="badge badge-outline">CSS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-3xl text-secondary font-medium">
          Tools
        </div>
        <div className="collapse-content">
          <div className="badge badge-outline badge-accent">HTML</div>
          <div className="badge badge-outline badge-blue">CSS</div>
          <div className="badge badge-outline badge-yellow">JS</div>
          <div className="badge badge-outline badge-yellow">React</div>
          <div className="badge badge-outline badge-yellow">Tailwind</div>
          <div className="badge badge-outline badge-yellow">Sass</div>
          <div className="badge badge-outline badge-yellow">Node</div>
          <div className="badge badge-outline badge-yellow">Express</div>
        </div>
      </div>
    </main>
  );
}

export default App;
