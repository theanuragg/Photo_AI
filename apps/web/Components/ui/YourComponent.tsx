'use client'
import React from 'react';
import Card from './Card';

const YourComponent = () => {
    const handleButtonClick = () => {
        // Handle button click
        console.log('Button clicked!');
    };

    return (
        <div className=" mx-6 p-2">
            <Card
                title="Flux AI Image Generator"
                description="Discover the power of the Flux AI Image Generator, transforming text and images into stunning visuals with Flux AI."
                features={[
                    "Text & image to image",
                    "Custom styles & colors",
                    "Instant rendering",
                ]}
                imageSrc="/Aiimage.png" // Replace with your image path
                imageAlt="Description of the image"
            />
        </div>
    );
};

export default YourComponent; 