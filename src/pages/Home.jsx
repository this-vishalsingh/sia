import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Star, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] gap-12 text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
            >
                <h1 className="text-6xl font-bold text-gray-800 drop-shadow-lg">
                    Let's <span className="text-sunshine-yellow">Play</span> & <span className="text-grass-green">Learn!</span>
                </h1>
                <p className="text-2xl text-gray-600 max-w-lg mx-auto leading-relaxed">
                    Discover alphabets and new words with magic pictures! 🎨
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl px-4">
                <Link to="/english">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-8 bg-sky-blue rounded-[3rem] shadow-[0_10px_0_0_rgba(56,189,248,0.5)] border-4 border-sky-400 cursor-pointer flex flex-col items-center gap-4 group"
                    >
                        <div className="bg-white p-6 rounded-full shadow-inner">
                            <span className="text-7xl font-bold text-sky-500">A</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white drop-shadow-md group-hover:tracking-wider transition-all">English</h2>
                        <p className="text-sky-100 text-xl font-medium">A for Apple...</p>
                    </motion.div>
                </Link>

                <Link to="/hindi">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-8 bg-apple-red rounded-[3rem] shadow-[0_10px_0_0_rgba(248,113,113,0.5)] border-4 border-red-400 cursor-pointer flex flex-col items-center gap-4 group"
                    >
                        <div className="bg-white p-6 rounded-full shadow-inner">
                            <span className="text-7xl font-bold text-red-500">अ</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white drop-shadow-md group-hover:tracking-wider transition-all">Hindi</h2>
                        <p className="text-red-100 text-xl font-medium">अ से अनार...</p>
                    </motion.div>
                </Link>
            </div>
        </div>
    );
};

export default Home;
