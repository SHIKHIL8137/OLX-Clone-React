import React,{useState,useEffect} from 'react';
import banner from '../../assets/ad.jpg'
import TitleCard from '../TitleCard/TitleCard';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NavbarSub from "../Navbar/NavbarSub";
import AuthModal from "../Login/Login";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";


const Home = ()=>{
const [modalOpen, setModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setModalOpen(true);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setModalOpen(false);
  };

return(
 <>
 <Navbar openAuthModal={openAuthModal} user={user} />
 <NavbarSub />
 <div className="max-w-6xl mx-auto p-4">
   <img src={banner} alt="" className="w-full h-40 object-cover rounded-lg mt-10 mb-10" />
   <div className="max-w-6xl mx-auto p-4">
     
     <h2 className="text-2xl font-semibold mb-4 text-gray-800">
       Fresh Recommendations
     </h2>
    <TitleCard />
   </div>
 </div>
 <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={authMode}
        setMode={setAuthMode}
        onLoginSuccess={handleLoginSuccess}
      />
 <Footer />
 </>
 

)
}

export default Home