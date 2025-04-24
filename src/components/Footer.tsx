
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MessageCircle, Twitter } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();
  
  return <footer className="bg-deep-black border-t border-electric-blue/20 pt-12 pb-6 md:pt-16 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="inline-block mb-3 md:mb-4 group">
              <span className="text-xl md:text-2xl font-poppins font-bold text-white group-hover:text-glow transition-all duration-300">
                Graphi<span className="text-neon-pink group-hover:pink-text-glow">X</span>lab
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Crafting digital experiences that convert. We bring your vision to life with cutting-edge tech and creative design.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/graphixlab.in?igsh=MWN4NGJiejBkMW9rZQ==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-electric-blue transition-colors transform hover:scale-110 duration-300"
              >
                <Instagram size={isMobile ? 18 : 20} />
              </a>
              <a 
                href="https://x.com/graphixlab25?t=TclTKSLVWzF9q_1_wE0YTw&s=09" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-electric-blue transition-colors transform hover:scale-110 duration-300"
              >
                <Twitter size={isMobile ? 18 : 20} />
              </a>
              <a 
                href="https://www.threads.net/@graphixlab.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-electric-blue transition-colors transform hover:scale-110 duration-300"
              >
                <svg 
                  viewBox="0 0 192 192" 
                  className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] fill-current"
                >
                  <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.4295 44.745C97.3516 44.745 97.2738 44.7450001 97.1959 44.7450001C82.3457 44.7450001 69.8722 49.7684 60.8472 58.8039C51.8222 67.8394 46.8197 80.3470001 46.8197 95.2393001V96.2169C46.8197 96.2169 46.8197 96.2169 46.8197 96.2169C46.8197 96.2169 46.8197 107.859 52.4168 119.959C51.2846 118.124 50.348 116.08 49.6809 113.801C49.5809 113.469 49.4856 113.135 49.3957 112.799C49.1659 111.873 48.9706 110.931 48.8172 109.974C48.3561 107.402 48.1465 104.754 48.1465 102.128C48.1465 101.731 48.1465 101.334 48.1571 100.937C48.1571 100.916 48.1571 100.894 48.1571 100.873C48.1571 100.81 48.1571 100.748 48.1571 100.685C48.1571 98.8285 48.818 85.8285 57.3806 75.5262C65.9432 65.2238 80.9622 60.2004 97.1959 60.2004H97.4295C113.942 60.3282 129.055 65.4566 137.497 75.9347C145.789 86.2215 146.450001 99.0096 146.450001 100.685C146.450001 100.748 146.450001 100.81 146.450001 100.873C146.450001 100.894 146.450001 100.916 146.450001 100.937C146.461 101.334 146.461 101.731 146.461 102.128C146.461 108.227 145.056 114.327 142.246 120.427C142.945 118.891 143.505 117.082 143.923 114.978C144.099 114.079 144.241 113.165 144.348 112.241C144.43 111.515 144.487 110.778 144.519 110.031C144.593 108.335 144.54 106.617 144.326 104.878C145.988 105.747 147.691 106.532 149.428 107.222C151.909 108.195 154.465 108.941 157.064 109.446C157.452 110.391 157.809 111.337 158.134 112.273C159.291 115.405 160.000001 118.536 160.000001 121.668C160.000001 123.497 159.803 125.326 159.408 127.166C159.013 129.015 158.403 130.812 157.583 132.588C156.763 134.363 155.722 136.074 154.465 137.753C153.208 139.432 151.813 140.933 150.265 142.319C148.716 143.705 146.989 144.933 145.119 146.013C143.238 147.093 141.241 147.947 139.118 148.612C136.995 149.278 134.777 149.696 132.475 149.878C130.163 150.06 127.809 149.974 125.433 149.652C123.047 149.331 120.651 148.736 118.276 147.894C115.901 147.042 113.557 145.927 111.266 144.539C108.975 143.152 106.769 141.491 104.69 139.58C102.611 137.658 100.659 135.484 98.875 133.048C97.0904 130.602 95.4954 127.913 94.0894 124.97C92.6729 122.027 91.4669 118.841 90.4508 115.432C89.4452 112.012 88.6607 108.383 88.1179 104.519C87.5857 100.654 87.3196 96.5891 87.3196 92.3139V91.2314C87.3196 90.7715 87.3196 90.3011 87.3301 89.8412C87.5013 83.0034 88.5279 76.187 90.4508 69.4549C92.3843 62.7333 95.2578 56.3579 99.0429 50.3762C102.838 44.3944 107.569 39.0203 113.225 34.2332C118.892 29.4566 125.454 25.4352 132.896 22.1791C134.283 21.5345 135.733 21.4479 137.1 21.9403C138.467 22.4221 139.628 23.4044 140.394 24.7079C141.16 26.0114 141.461 27.5095 141.257 28.9759C141.043 30.4424 140.316 31.7771 139.118 32.8066C133.119 37.5937 128.026 43.1689 123.891 49.5433C119.756 55.9178 116.695 62.9546 114.709 70.6762C112.723 78.3978 111.875 86.4975 112.144 94.5867C112.412 102.676 113.809 110.712 116.324 118.694C118.84 126.677 122.506 134.342 127.237 141.689C131.968 149.037 137.769 155.825 144.638 162.055C145.857 163.295 146.555 164.962 146.598 166.692C146.631 168.433 146.027 170.122 144.882 171.417C143.738 172.711 142.134 173.504 140.405 173.654C138.677 173.793 136.97 173.29 135.636 172.207C132.517 169.508 129.587 166.661 126.868 163.667C122.842 159.192 119.287 154.425 116.242 149.394C113.197 144.363 110.69 139.048 108.735 133.469C106.78 127.89 105.394 122.121 104.577 116.174C103.76 110.227 103.522 104.215 103.854 98.2242C104.186 92.2334 105.098 86.3001 106.559 80.4347C108.02 74.5693 110.048 68.8402 112.609 63.2681C115.17 57.696 118.266 52.3705 121.87 47.3231C118.308 46.0196 114.635 45.0266 110.879 44.3619C107.123 43.6973 103.314 43.365 99.4731 43.365C95.6321 43.365 91.8017 43.6973 88.0507 44.3619C84.2997 45.0266 80.6267 46.0196 77.0647 47.3231C80.6584 52.3705 83.7647 57.696 86.3258 63.2681C88.8869 68.8402 90.9047 74.5693 92.3738 80.4347C93.8429 86.3001 94.7446 92.2334 95.0874 98.2242C95.4197 104.215 95.1714 110.227 94.3544 116.174C93.5374 122.121 92.1514 127.89 90.1963 133.469C88.2413 139.048 85.7343 144.363 82.6893 149.394C79.6443 154.425 76.0894 159.192 72.0638 163.667C69.3449 166.661 66.4148 169.508 63.2857 172.207C61.9627 173.29 60.2556 173.793 58.5273 173.654C56.799 173.504 55.1949 172.711 54.0504 171.417C52.9059 170.122 52.3015 168.433 52.3341 166.692C52.3773 164.962 53.0754 163.295 54.2947 162.055C61.1637 155.825 66.9647 149.037 71.6956 141.689C76.4265 134.342 80.0925 126.677 82.6082 118.694C85.1238 110.712 86.5208 102.676 86.7889 94.5867C87.0571 86.4975 86.2092 78.3978 84.2232 70.6762C82.2372 62.9546 79.1765 55.9178 75.0415 49.5433C70.9065 43.1689 65.8132 37.5937 59.8147 32.8066C58.6163 31.7771 57.8891 30.4424 57.6753 28.9759C57.4615 27.5095 57.7626 26.0114 58.5288 24.7079C59.2949 23.4044 60.4556 22.4221 61.8228 21.9403C63.19 21.4479 64.6403 21.5345 66.0271 22.1791C73.469 25.4352 80.0308 29.4566 85.6973 34.2332C91.3638 39.0203 96.0843 44.3944 99.8799 50.3762C103.665 56.3579 106.539 62.7333 108.472 69.4549C110.395 76.187 111.422 83.0034 111.593 89.8412C111.603 90.3011 111.603 90.7715 111.603 91.2314V92.3139C111.603 96.5891 111.337 100.654 110.805 104.519C110.272 108.383 109.477 112.012 108.472 115.432C107.466 118.841 106.249 122.027 104.833 124.97C103.427 127.913 101.832 130.602 100.047 133.048C98.2633 135.484 96.3111 137.658 94.2323 139.58C92.1535 141.491 89.947 143.152 87.656 144.539C85.365 145.927 83.0207 147.042 80.6453 147.894C78.2699 148.736 75.8735 149.331 73.4876 149.652C71.1017 149.974 68.7473 150.06 66.4454 149.878C64.1435 149.696 61.9265 149.278 59.8042 148.612C57.6819 147.947 55.6849 147.093 53.8042 146.013C51.9235 144.933 50.1962 143.705 48.6478 142.319C47.0994 140.933 45.7043 139.432 44.4472 137.753C43.1901 136.074 42.1486 134.363 41.3285 132.588C40.5085 130.812 39.8984 129.015 39.5037 127.166C39.1091 125.326 38.9118 123.497 38.9118 121.668C38.9118 118.536 39.6208 115.405 40.7777 112.273C41.1026 111.337 41.4596 110.391 41.8482 109.446C44.4472 108.941 47.0031 108.195 49.4843 107.222C51.2214 106.532 52.9244 105.747 54.5864 104.878C54.3723 106.617 54.3191 108.335 54.3934 110.031C54.4251 110.778 54.4824 111.515 54.5649 112.241C54.6714 113.165 54.8135 114.079 54.9897 114.978C55.4075 117.082 55.9677 118.891 56.6665 120.427C53.8567 114.327 52.4518 108.227 52.4518 102.128C52.4518 101.731 52.4518 101.334 52.4623 100.937C52.4623 100.916 52.4623 100.894 52.4623 100.873C52.4623 100.81 52.4623 100.748 52.4623 100.685C52.4623 99.0096 53.1235 86.2215 61.4161 75.9347C69.8573 65.4566 84.9701 60.3282 101.483 60.2004H101.716C117.95 60.2004 132.969 65.2238 141.532 75.5262C150.094 85.8285 150.755 98.8285 150.755 100.685C150.755 100.748 150.755 100.81 150.755 100.873C150.755 100.894 150.755 100.916 150.755 100.937C150.766 101.334 150.766 101.731 150.766 102.128C150.766 104.754 150.556 107.402 150.095 109.974C149.942 110.931 149.747 111.873 149.517 112.799C149.427 113.135 149.332 113.469 149.232 113.801C148.565 116.08 147.628 118.124 146.496 119.959C152.093 107.859 152.093 96.2169 152.093 96.2169C152.093 96.2169 152.093 96.2169 152.093 96.2169V95.2393001C152.093 80.3470001 147.09 67.8394 138.065 58.8039C129.04 49.7684 116.567 44.7450001 101.716 44.7450001C101.639 44.7450001 101.561 44.745 101.483 44.745C76.2965 44.905 61.3755 60.5382 59.8937 87.8451C59.0431 88.2104 58.2031 88.5919 57.3754 88.9883L57.3754 88.9883ZM47.4117 98.6243C47.4117 98.6349 47.4117 98.6455 47.4117 98.6561V98.6243ZM145.501 98.6243V98.6561C145.501 98.6455 145.501 98.6349 145.501 98.6243V98.6243Z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61575063698366" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-electric-blue transition-colors transform hover:scale-110 duration-300"
              >
                <Facebook size={isMobile ? 18 : 20} />
              </a>
              <a 
                href="https://wa.me/7002642149?text=Hello!%20I'm%20interested%20in%20discussing%20a%20project%20with%20you." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-electric-blue transition-colors transform hover:scale-110 duration-300"
              >
                <MessageCircle size={isMobile ? 18 : 20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-4 relative group">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-electric-blue rounded transition-all duration-300 group-hover:w-16 md:group-hover:w-24"></span>
            </h3>
            <ul className="space-y-1 md:space-y-2">
              <li className="transform hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300">
                <Link to="/" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Home
                </Link>
              </li>
              <li className="transform hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300">
                <Link to="/services" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Services
                </Link>
              </li>
              <li className="transform hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300">
                <Link to="/portfolio" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Portfolio
                </Link>
              </li>
              <li className="transform hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300">
                <Link to="/about" className="text-gray-400 hover:text-electric-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li className="transform hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300">
                <Link to="/contact" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-4 relative group">
              Our Services
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-electric-blue rounded transition-all duration-300 group-hover:w-16 md:group-hover:w-24"></span>
            </h3>
            <ul className="space-y-1 md:space-y-2">
              <li className="transform hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300">
                <Link to="/services" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Web Development
                </Link>
              </li>
              <li className="transform hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300">
                <Link to="/services" className="text-gray-400 hover:text-electric-blue transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li className="transform hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300">
                <Link to="/services" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li className="transform hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300">
                <Link to="/services" className="text-gray-400 hover:text-electric-blue transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-4 relative group">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-electric-blue rounded transition-all duration-300 group-hover:w-16 md:group-hover:w-24"></span>
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-center group hover-glow p-2 rounded-lg transition-all duration-300 hover:bg-electric-blue/5">
                <Phone size={isMobile ? 18 : 20} className="text-electric-blue mr-2 md:mr-3 flex-shrink-0 group-hover:animate-pulse" />
                <a href="tel:7002642149" className="text-gray-400 group-hover:text-electric-blue transition-colors">
                  7002642149
                </a>
              </li>
              
              <li className="flex items-center group hover-glow p-2 rounded-lg transition-all duration-300 hover:bg-electric-blue/5">
                <Mail size={isMobile ? 18 : 20} className="text-electric-blue mr-2 md:mr-3 flex-shrink-0 group-hover:animate-pulse" />
                <a href="mailto:graphixlab.in@gmail.com" className="text-gray-400 group-hover:text-electric-blue transition-colors text-sm md:text-base">
                  graphixlab.in@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 mt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GraphiXlab Digital Forge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};

export default Footer;

