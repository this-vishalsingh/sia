import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { englishAlphabets } from '../data/englishAlphabets';
import { hindiAlphabets } from '../data/hindiAlphabets';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2 } from 'lucide-react';

const LetterDetails = () => {
    const { type, id } = useParams();
    const data = type === 'english' ? englishAlphabets : hindiAlphabets;
    const letterData = data.find(item => item.letter === id);

    const [currentIndex, setCurrentIndex] = useState(0);

    if (!letterData) {
        return <Navigate to={`/${type}`} />;
    }

    const currentItem = letterData.items[currentIndex];
    const totalItems = letterData.items.length;

    const nextItem = () => {
        setCurrentIndex((prev) => (prev + 1) % totalItems);
    };

    const prevItem = () => {
        setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    };

    const speak = () => {
        const utterance = new SpeechSynthesisUtterance(currentItem.name);
        // Try to find a Hindi voice if type is hindi (best effort)
        if (type === 'hindi') {
            utterance.lang = 'hi-IN';
        } else {
            utterance.lang = 'en-US';
        }
        window.speechSynthesis.speak(utterance);
    };

    const themeColor = type === 'english' ? 'text-sky-500' : 'text-red-500';
    const bgColor = type === 'english' ? 'bg-sky-100' : 'bg-red-100';

    return (
        <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto min-h-[80vh] pb-12">
            <div className="w-full flex justify-between items-center">
                <Link to={`/${type}`} className="px-6 py-2 bg-white rounded-xl shadow-sm text-gray-500 font-bold hover:bg-gray-50">
                    ← Back
                </Link>
                <div className={`text-6xl font-bold ${themeColor} bg-white px-6 py-2 rounded-2xl shadow-sm`}>
                    {letterData.letter}
                </div>
                <div className="w-24"></div> {/* Spacer */}
            </div>

            <div className="w-full flex items-center justify-between gap-4">
                <button onClick={prevItem} className="p-4 bg-white rounded-full shadow-md hover:bg-gray-50 hover:scale-110 transition-all text-gray-400 hover:text-gray-600">
                    <ChevronLeft size={48} />
                </button>

                <div className="flex-1 max-w-[500px] h-[500px] flex flex-col items-center justify-center gap-8 bg-white rounded-[3rem] shadow-xl p-8 relative overflow-hidden border-4 border-dashed border-gray-100">
                    {/* Image Placeholder Area */}
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentItem.name}
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 1.2, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="w-full h-64 md:h-80 bg-gradient-to-br from-yellow-50 to-pink-50 rounded-3xl flex items-center justify-center mb-4 relative shadow-inner"
                        >
                            {/* Emoji Display - Big and Beautiful */}
                            <span className="text-[150px] md:text-[180px] drop-shadow-lg animate-bounce" style={{ animationDuration: '2s' }}>
                                {currentItem.emoji || '🖼️'}
                            </span>
                        </motion.div>
                    </AnimatePresence>

                    <motion.div
                        key={`${currentItem.name}-text`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-center space-y-2"
                    >
                        <h2 className={`text-5xl md:text-7xl font-bold ${themeColor} drop-shadow-sm`}>
                            {currentItem.name}
                        </h2>
                        <button onClick={speak} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-500 font-bold hover:bg-gray-200 mt-2 transform active:scale-95 transition-all">
                            <Volume2 size={24} />
                            <span>Tap to listen</span>
                        </button>
                    </motion.div>
                </div>

                <button onClick={nextItem} className="p-4 bg-white rounded-full shadow-md hover:bg-gray-50 hover:scale-110 transition-all text-gray-400 hover:text-gray-600">
                    <ChevronRight size={48} />
                </button>
            </div>

            {/* Video Section */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-3xl mt-12 mb-8"
            >
                <h3 className="text-3xl font-bold text-gray-700 mb-6 text-center">Let's Watch & Learn! 📺</h3>
                <div className="aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-black">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed?listType=search&list=learning+letter+${letterData.letter}+for+kids+song`}
                        title={`Learn ${letterData.letter} Video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </motion.div>

            {/* Pagination Dots */}
            <div className="flex gap-3 mb-8">
                {letterData.items.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-4 h-4 rounded-full transition-all ${idx === currentIndex ? `${themeColor.replace('text', 'bg')} w-8` : 'bg-gray-200'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default LetterDetails;
