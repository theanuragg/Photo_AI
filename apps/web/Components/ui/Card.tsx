'use client'
import React from 'react';
import { AnimatedGradientButton } from './ButtonsTrail';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


interface CardProps {
    title: string;
    description: string;
    features: string[];
                imageSrc: string;
    imageAlt: string;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    features,
    imageSrc,
    imageAlt,
}) => {
    const router = useRouter();
    return (
        <div className="flex  rounded-lg  overflow-hidden">
            <div className="p-4 flex-1 h-80">
                <h2 className="text-2xl text-gray-800  font-serif font-bold mb-2">{title}</h2>
                <p className="mb-4 text-gray-600">{description}</p>
                <ul className="list-disc list-inside mb-4">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <AnimatedGradientButton
                    onClick={() => { router.push('/train') }}
                    className="ml-2 bg-indigo-950 text-white dark:text-gray-800 "
                >
                    Try now 💫
                </AnimatedGradientButton>
            </div>
            <div className="flex-shrink-0 w-96 pb-4 pt-4 pl-4">
                <Image 
                    src='/Aiimage.png'
                    alt={imageAlt} 
                    width={400}
                    height={300}
                    layout="responsive"
                    className="py-2 object-cover" 
                />
            </div>
        </div>
    );
};

export default Card; 