import React from "react";
import Navbar from "../Navbar/NavbarComponent";
import Footer from "../Footer/FooterComponent";

const LayoutComponent = ({ children }) => {
   return (
      <>
      <div className="scroll-hide">

         <Navbar />
         <main>
            {children}
         </main>
         <Footer />
      </div>
      </>
   )
}

export default LayoutComponent;