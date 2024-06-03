
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

const ContactPage = () => {
  return (
    <div className="bg-inherit contact-page container mx-auto p-4">
      <h2 className="text-4xl font-bold mb-4">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 flex items-center">
            <LocationOnIcon className="mr-2" /> My Address
          </h3>
          <p>123 Scaler</p>
          <p>falana street</p>
          <p>Banglore1</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 flex items-center">
            <EmailIcon className="mr-2" /> Email
          </h3>
          <p>Ommishra@gmail.com</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 flex items-center">
            <PhoneIcon className="mr-2" /> Contact
          </h3>
          <p>+1 480-401-8112</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Social Profiles</h3>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon style={{ fontSize: 30 }} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <GitHubIcon style={{ fontSize: 30 }} />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <GoogleIcon style={{ fontSize: 30 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

