const Skills = () => {
  return (
    <section id="skills" className="py-12 ">
      <div className="container mx-auto">
        <h2 className="text-xl font-mono gap-3  flex mb-8">Skills <hr className="w-14 mt-3"/></h2>
        <div className="grid gap-4 text-black text-6xl">
          
          <div className="p-5 bg-gray-100">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Languages and Databases</h3>
            <div className="flex justify-center flex-wrap space-x-20 ">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" alt="Python" className="h-12"/>
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" alt="Java" className="h-12"/>
              <img src="https://banner2.cleanpng.com/20180526/oqt/kisspng-microsoft-sql-server-mysql-database-logo-5b098c6ebad6d7.7316225815273524307653.jpg" alt="SQL" className="h-12"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png" alt="HTML" className="h-12"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png" alt="CSS" className="h-12"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="CSS" className="h-12"/>
            </div>
          </div>

          <div className="p-5 bg-gray-100">
            <h3 className="text-2xl text-gray-900 font-semibold mb-4">Frameworks and Libraries</h3>
            <div className="flex justify-center flex-wrap space-x-20">
              <img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/120px-React_Logo_SVG.svg.png" alt="React" className="h-12"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/120px-Spring_Boot.svg.png" alt="Spring Boot" className="h-12 "/>
            </div>
          </div>

          <div className="p-5 bg-gray-100">
            <h3 className="text-2xl text-gray-900 font-semibold mb-4">Concepts</h3>
            <div className="grid justify-center flex-wrap space-x-4 space-y-4 text-xs text-bold">
              <img src="/src/assets/DSA.png" alt="Data Structures and Algorithms" width={100} /> <span className="text-xl font-bold">DSA</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
