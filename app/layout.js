import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}