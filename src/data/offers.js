import { nanoid } from '@reduxjs/toolkit';
import Image1 from '../assets/images/offers_component/offers-img-1.jpg';
import Image2 from '../assets/images/offers_component/offers-img-2.jpg';
import Image4 from '../assets/images/offers_component/offers-img-4.jpg';
import Image5 from '../assets/images/offers_component/offers-img-5.jpg';
import Image6 from '../assets/images/offers_component/offers-img-6.jpg';

export const data = [
    {
        id: nanoid(),
        section: "Rooms & Suites",
        title: "A Romantic Colombo City Escape",
        description: "An indulgent staycation in the heart of the city relaxing with a soothing spa treatment and gourmet dining.",
        price: "106,249.50",
        img: Image6,
        alt: "image6"
    },
    {
        id: nanoid(),
        section: "Rooms & Suites",
        title: "Horizon Club Stay",
        description: "Discover your moment of Shangri-La with incredible views, delectable dining and access to the Horizon Club Lounge..",
        price: "74,374.65",
        img: Image5,
        alt: "image5"
    },
    {
        id: nanoid(),
        section: "Rooms & Suites",
        title: "Circle Exclusive Member Rate",
        description: "Exclusive Member Rate for inner Circle member..",
        price: "48,571.20",
        img: Image4,
        alt: "image4"
    },
    {
        id: nanoid(),
        section: "Rooms & Suites",
        title: "Exclusive Member Rate with Breakfast",
        description: "Exclusive Member Rate with Breakfast for Hotel Circle member.",
        price: "54,642.60",
        img: Image1,
        alt: "image1"
    },
    {
        id: nanoid(),
        section: "Rooms & Suites",
        title: "Bed & Breakfast",
        description: "Start your day with stunning views of Colombo and daily breakfast.",
        price: "62,231.85",
        img: Image2,
        alt: "image2"
    },
]