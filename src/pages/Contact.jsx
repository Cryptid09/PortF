
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { X } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactPage = () => {
  return (
    <div className="min-w-screen min-h-screen  mx-auto bg-gray-900 p-4">
      <h2 className="text-4xl font-bold mb-4 ">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 flex items-center">
            <LocationOnIcon className="mr-2 text-green-500" /> Address:
          </h3>
          <p> Office no 715, 7<sup>th</sup>floor Fortune Ambience-space</p>
          <p>South Tukoganj near Surya hotel</p>
          <p>Indore (MP)</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 flex items-center">
            <EmailIcon className="mr-2 text-green-500" /> Email
          </h3>
          <p>VipinParmar279@gmail.com</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 flex items-center">
            <PhoneIcon className="mr-2 text-green-500" /> Contact
          </h3>
          <p>+1 480-401-8112</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 ">Social Profiles</h3>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon style={{ fontSize: 30 }} className='hover:text-blue-900'/>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <X style={{ fontSize: 30 }} className='hover:text-purple-800' />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className='hover:animate-instagram' style={{ fontSize: 30 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

