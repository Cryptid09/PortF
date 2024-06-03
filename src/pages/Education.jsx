
const Education = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-4 border-b-2 border-green-500 inline-block">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg flex items-center">
          <img src="path/to/asu-logo.png" alt="ASU Logo" className="h-20 w-20 object-contain mr-6" />
          <div>
            <h3 className="text-xl font-bold">Arizona State University</h3>
            <p className="italic">MS in Computer Science</p>
            <p>January 2021 - Present</p>
            <p>Relevant Coursework:</p>
            <ul className="list-disc ml-5">
              <li>Distributed Database Systems</li>
              <li>Cloud Computing</li>
              <li>Foundation Of Algorithms</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex items-center">
          <img src="path/to/ahmedabad-logo.png" alt="Ahmedabad University Logo" className="h-20 w-20 object-contain mr-6" />
          <div>
            <h3 className="text-xl font-bold">Ahmedabad University</h3>
            <p className="italic">B.Tech. in Information and Communication Technology</p>
            <p>July 2014 - May 2018</p>
            <p>Relevant Coursework:</p>
            <ul className="list-disc ml-5">
              <li>Database Management Systems</li>
              <li>Algorithms & Optimization for Big Data</li>
              <li>Machine Learning</li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-4 border-b-2 border-green-500 inline-block">Online Certification</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg flex justify-center">
          <img src="path/to/stanford-logo.png" alt="Stanford University Logo" className="h-20 w-20 object-contain" />
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex justify-center">
          <img src="path/to/ucsd-logo.png" alt="UC San Diego Logo" className="h-20 w-20 object-contain" />
        </div>
       
      </div>
    </div>
  );
};

export default Education;
