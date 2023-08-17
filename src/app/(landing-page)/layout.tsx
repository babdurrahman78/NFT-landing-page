import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1728px] mx-auto">
      <div className="grid w-full grid-cols-12">
        <div className="col-span-10 col-start-2">
          <Navbar />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
