import { nanoid } from '@reduxjs/toolkit';
import Image1 from '../assets/images/carousel_component/carousel-img-1.jpg';
import Image2 from '../assets/images/carousel_component/carousel-img-2.png';
import Image3 from '../assets/images/carousel_component/carousel-img-3.jpg';


export const data = [
    {
        id: nanoid(),
        title: "Shangri-La Colombo",
        description: "Come with us through the whimsical world of Shangri-La, where your personal paradise awaits",
        image: Image1,
        alt: "image1"
    },
    {
        id: nanoid(),
        title: "Shangri-La Colombo",
        description: "A personal tropical sanctuary set within the heart of the city",
        image: Image2,
        alt: "image2"
    },
    {
        id: nanoid(),
        title: "Shangri-La Cares",
        description: "Your well-being in our care - learn more about our safety standards",
        image: Image3,
        alt: "image3"
    },
]