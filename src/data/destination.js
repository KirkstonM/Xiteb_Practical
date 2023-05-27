import { nanoid } from '@reduxjs/toolkit';
import Image1 from '../assets/images/destination_component/destination-img-1.jpg';
import Image2 from '../assets/images/destination_component/destination-img-2.jpg';
import Image3 from '../assets/images/destination_component/destination-img-3.jpg';
import Image4 from '../assets/images/destination_component/destination-img-4.jpg';
import Image5 from '../assets/images/destination_component/destination-img-5.jpg';
import Image6 from '../assets/images/destination_component/destination-img-6.jpeg';
import Image7 from '../assets/images/destination_component/destination-img-7.png';
import Maldive from '../assets/images/destination_component/destination-maldives.png';
import Srilanka from '../assets/images/destination_component/destination-srilanka.png';

export const data = [
    {
        id: nanoid(),
        country_image: Srilanka,
        location_image: Image1,
        alt: "Image 1",
        name: "Cinnamon Bentota Beach",
        desc: "Choose Cinnamon Bentota Beach for an opulent stay on Sri Lanka's gold coast. Nestled in the groves of coconut trees is a tastefully designed piece of architecture, an ultimate destination for art and culture enthusiasts!"

    },
    {
        id: nanoid(),
        country_image: Srilanka,
        location_image: Image2,
        alt: "Image 2",
        name: "Cinnamon Life",
        desc: "Take a peak at the first-ever Integrated Resort in Sri Lanka opening in mid-2021. Envisoned to be the epicentre of modern South Asia, it is an urban sanctuary which includes a 5-Star hotel, residential units, office spaces and a wide range of shopping and entertainment options."

    },
    {
        id: nanoid(),
        country_image: Srilanka,
        location_image: Image3,
        alt: "Image 3",
        name: "Cinnamon Lakeside Colombo",
        desc: "Spend time with those who matter by a calm, rippling lake at Cinnamon Lakeside, the plush oasis of peace and warmth, right in the middle of Colombo."

    },
    {
        id: nanoid(),
        country_image: Srilanka,
        location_image: Image4,
        alt: "Image 4",
        name: "Cinnamon Red Colomb",
        desc: "South Asia's first ever lean luxury hotel situated right at the heart of Colombo. The vibrant rooftop bar and serene infinity pool overlooking the Colombo Skyline provides every sense of relaxation and rejuvenation for the adventurous traveller!"
    },

    {
        id: nanoid(),
        country_image: Maldive,
        location_image: Image5,
        alt: "Image 5",
        name: "Cinnamon Velifushi Maldives",
        desc: "Cinnamon Velifushi Maldives, a one-resort island for sun, activity, relaxation and luxury surrounded by exotic marine life and a swimmable lagoon."

    },
    {
        id: nanoid(),
        country_image: Maldive,
        location_image: Image6,
        alt: "Image 6",
        name: "Cinnamon Hakuraa Huraa Maldives",
        desc: "Cinnamon Hakuraa Huraa Maldives with its white roofed Water Bungalows set knee-deep in crystal waters of the lagoon is a vision of the stay promised."

    },
    {
        id: nanoid(),
        country_image: Maldive,
        location_image: Image7,
        alt: "Image 7",
        name: "Ellaidhoo Maldives by Cinnamon",
        desc: "Dive into the most candid experience with the ocean at our house reef with an awe-inspiring diversity of underwater life."
    },
];