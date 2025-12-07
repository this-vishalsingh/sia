import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Globe, Languages } from 'lucide-react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-creamy-white overflow-hidden relative font-comic">
            {/* Playful Background Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-sunshine-yellow rounded-full blur-3xl opacity-50 -translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-sky-blue rounded-full blur-3xl opacity-50 translate-x-10 translate-y-10"></div>

            {/* Navigation */}
            <nav className="relative z-10 bg-white/80 p-4 shadow-sm backdrop-blur-sm m-4 rounded-3xl border-4 border-dashed border-soft-purple/30">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-apple-red to-sky-blue bg-clip-text text-transparent hover:scale-110 transition-transform">
                        TinyLearn 🎈
                    </Link>
                    <div className="flex gap-4">
                        <Link to="/english" className="flex items-center gap-2 px-4 py-2 bg-sky-blue/20 text-sky-800 rounded-2xl hover:bg-sky-blue/40 transition-colors font-bold">
                            <Globe className="w-5 h-5" />
                            <span className="hidden sm:inline">English</span>
                        </Link>
                        <Link to="/hindi" className="flex items-center gap-2 px-4 py-2 bg-apple-red/20 text-apple-red rounded-2xl hover:bg-apple-red/40 transition-colors font-bold">
                            <Languages className="w-5 h-5" />
                            <span className="hidden sm:inline">Hindi</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-6 relative z-10">
                {children}
            </main>
        </div>
    );
};

export default Layout;
