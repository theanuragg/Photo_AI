import React from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedGradientButton } from './ButtonsTrail';
import { useRouter } from 'next/navigation';



interface CardProps {
    title: string;
    description: string;
    features: string[];
    onButtonClick: () => void;
    imageSrc: string;
    imageAlt: string;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    features,
    onButtonClick,
    imageSrc,
    imageAlt,
}) => {
    const router = useRouter();
    return (
        <div className="flex bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 flex-1 h-80">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="mb-4">{description}</p>
                <ul className="list-disc list-inside mb-4">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <AnimatedGradientButton
                    onClick={() => { router.push('/train') }}
                    className="ml-2 bg-indigo-950 "
                >
                    Try now 💫
                </AnimatedGradientButton>
            </div>
            <div className="flex-shrink-0 w-96 pb-4 pt-4 pl-4">
                <img src={imageSrc} alt={imageAlt} className="py-2 object-cover" />
            </div>
        </div>
    );
};

export default Card; 