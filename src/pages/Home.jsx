
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import Navbar from '../components/Navbar';
import Typewriter from '../components/typr';

function Home() {
  return (
    <div className="min-h-screen  bg-gray-900 text-white pt-52 pl-32 ">
      <div className='md:hidden place-self-center'><Navbar /></div>
      <div className="grid  h-full ">
        <div>
        <h1 className="text-5xl font-sans font-bold  mb-4">Om Mishra</h1><span className="text-xl font-bold text-green-500"><Typewriter text={["I am an AI Enthusiast!" , "Me to papa hu "]} typingSpeed={150} />
          </span>
        </div>
        <div className='hidden md:block ' >
        <Navbar/>
        </div>
      
        <div className="flex space-x-4 mb-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
            <LinkedInIcon style={{ color: 'white' }} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
            <GitHubIcon style={{ color: 'white' }} />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
            <GoogleIcon style={{ color: 'white' }} />
          </a>
        </div>
       
      </div>
    </div>
  );
}

export default Home;
