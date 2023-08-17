import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/cms/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen antialiased bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Sidebar />

      <main className="h-auto p-4 pt-20 md:ml-64">{children}</main>
    </div>
  );
};

export default Layout;
