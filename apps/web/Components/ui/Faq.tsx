import React, { useState } from 'react';
import { BorderBeam } from './BorderBeam';
import { cn } from "@/lib/utils";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is VRAS AI?",
            answer: "VRAS AI is a free AI-powered tool that transforms existing images into enhanced, stylized, or modified versions using advanced image-to-image AI models."
        },
        {
            question: "How do I use VRAS AI?",
            answer: "Simply upload an image, choose your desired transformation style, and let VRAS AI generate a new version. You can download the result instantly for free."
        },
        {
            question: "Is VRAS AI really free to use?",
            answer: "Yes! VRAS AI is completely free, with no hidden costs or subscriptions. You can generate unlimited images without any charges."
        },
        {
            question: "Can I use the generated images for commercial purposes?",
            answer: "Yes! The images created with VRAS AI can be used for personal and commercial projects, as long as they comply with ethical and legal guidelines."
        }
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={cn("max-w-2xl mx-auto p-6 rounded-lg border relative dark:bg-gray-700 border-gray-300")}>
            <h2 className="text-2xl font-bold dark:text-white text-gray-800 b-4">FAQ</h2>
            <BorderBeam 
                className="mb-4" 
                size={100}
                duration={6}
                initialOffset={0}
                reverse={false}
            />
            {faqs.map((faq, index) => (
                <div key={index} className="mb-2">
                    <div 
                        className="flex justify-between items-center p-4 bg-gray-50 dark:bg-slate-800 rounded-lg border dark:border-slate-600 cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                        onClick={() => toggleFAQ(index)}
                    >
                        <span className="font-medium text-gray-800 dark:text-white">{faq.question}</span>
                        <span className="ml-2 dark:text-white text-slate-200">{activeIndex === index ? '▼' : ''}</span>
                    </div>
                    {activeIndex === index && (
                        <div className="p-4 bg-gray-50 dark:bg-slate-800 text-gray-400 dark:text-gray-300 rounded-lg border">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
