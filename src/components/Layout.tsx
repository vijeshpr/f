import { Link, Outlet } from 'react-router-dom';
import { Music } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-indigo-600 text-white p-2 rounded-lg group-hover:bg-indigo-700 transition-colors">
                <Music size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800">
                Audio<span className="text-indigo-600">Tools</span>
              </span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Home</Link>
              <Link to="/tool/editor" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Editor</Link>
              <Link to="/tool/converter" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Converter</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Music size={24} className="text-indigo-400" />
                <span className="font-bold text-xl text-white">
                  Audio<span className="text-indigo-400">Tools</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Free, powerful, and easy-to-use audio processing tools directly in your browser. No installation required.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/tool/editor" className="hover:text-white transition-colors">Audio Editor</Link></li>
                <li><Link to="/tool/vocal-remover" className="hover:text-white transition-colors">Vocal Remover</Link></li>
                <li><Link to="/tool/converter" className="hover:text-white transition-colors">Audio Converter</Link></li>
                <li><Link to="/tool/pitch-shifter" className="hover:text-white transition-colors">Pitch Shifter</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
            &copy; {new Date().getFullYear()} AudioTools. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
