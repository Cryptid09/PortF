import PreviewIcon from '@mui/icons-material/Preview';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CompareIcon from '@mui/icons-material/Compare';
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
    
      <h1 className="text-5xl font-bold mb-8">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="mb-6 md:mb-0 md:mr-6">
          <img
            src='/src/assets/Img1.jpeg'
            alt="Your Name"
            className="rounded-full w-48 h-48 object-cover"
          />
        </div>
        <div className="max-w-xl">
          <p className="text-lg mb-4">
          A dedicated advocate committed to fostering positive change.
          With a steadfast focus on justice and equality, I try to bring
          a pragmatic approach to addressing societal issues. Through my 
          expertise, empathy, and tireless efforts, I work to dismantle
          barriers and empower individuals.
           
          </p>
          <div className="text-sm">
            <p><span className="font-bold">City:</span> Indore</p>
            <p><span className="font-bold">Phone:</span> +91 34221231239</p>
            <p><span className="font-bold">Email:</span>  VipinParmar279@gmail.com</p>
            
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Interests</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-800 rounded-md text-center"><CodeIcon className='text-orange-500'/>  Software Development</div>
          <div className="p-4 bg-gray-800 rounded-md text-center"><SchoolIcon className='text-green-500'/>  Machine Learning</div>
          <div className="p-4 bg-gray-800 rounded-md text-center"><PreviewIcon className='text-red-500'/>  Computer Vision</div>
          <div className="p-4 bg-gray-800 rounded-md text-center"><InterpreterModeIcon className='text-blue-400'/>  Natural Language Processing</div>
          <div className="p-4 bg-gray-800 rounded-md text-center"><AppSettingsAltIcon className='text-yellow-500'/>  Software Engineering</div>
          <div className="p-4 bg-gray-800 rounded-md text-center"><AccountTreeIcon />  Algorithms</div>
          <div className="p-4 bg-gray-800 rounded-md text-center"><CompareIcon className='text-gray-500'/>  Image Processing</div>
        </div>
      </div>
    </div>
  );
};

export default About;

