import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { englishAlphabets } from '../data/englishAlphabets';
import { hindiAlphabets } from '../data/hindiAlphabets';
import { motion } from 'framer-motion';

const AlphabetGrid = ({ type }) => {
    const data = type === 'english' ? englishAlphabets : hindiAlphabets;
    const themeColor = type === 'english' ? 'bg-sky-blue' : 'bg-apple-red';
    const borderColor = type === 'english' ? 'border-sky-400' : 'border-red-400';
    const textColor = type === 'english' ? 'text-sky-600' : 'text-apple-red';
    const shadowColor = type === 'english' ? 'shadow-[0_8px_0_0_rgba(56,189,248,0.5)]' : 'shadow-[0_8px_0_0_rgba(248,113,113,0.5)]';

    return (
        <div className="flex flex-col items-center gap-8">
            <Link to="/" className="self-start px-6 py-2 bg-white rounded-xl shadow-sm text-gray-500 font-bold hover:bg-gray-50">
                ← Back Home
            </Link>

            <h1 className={`text-5xl font-bold ${textColor} drop-shadow-md`}>
                {type === 'english' ? 'English Alphabets' : 'Hindi Varnamala'}
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-5xl">
                {data.map((item, index) => (
                    <Link key={item.letter} to={`/${type}/${item.letter}`}>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 3 : -3 }}
                            whileTap={{ scale: 0.9 }}
                            className={`
                aspect-square flex items-center justify-center 
                ${themeColor} rounded-[2rem] cursor-pointer
                ${borderColor} border-b-[8px] border-r-[4px] border-t-2 border-l-2
                active:border-b-2 active:translate-y-2 transition-all
                group
              `}
                        >
                            <div className="w-4/5 h-4/5 bg-white rounded-[1.5rem] flex items-center justify-center shadow-inner group-hover:shadow-lg transition-all">
                                <span className={`text-5xl sm:text-7xl font-bold ${textColor}`}>
                                    {item.letter}
                                </span>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AlphabetGrid;
