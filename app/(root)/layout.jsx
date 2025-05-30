import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientPageTransition from "@/components/ClientPageTransition";
import WebVitalsScriptt from "@/_utils/webVitasScript";

import { auth } from "../auth";

const Layout = async ({ children }) => {
  const session = await auth();

  return (
    <>
      <Navbar userSession={session} />
      <ClientPageTransition />
      <WebVitalsScriptt />
      {children}
      <Footer />
      {/* done */}
      {/* deploy to preod */}
    </>
  );
};

export default Layout;
