import { nanoid } from '@reduxjs/toolkit';
import Image1 from '../assets/images/experience_component/experience-img-1.jpg'
import Image2 from '../assets/images/experience_component/experience-img-2.jpg'
import Image3 from '../assets/images/experience_component/experience-img-3.jpg'
import Image4 from '../assets/images/experience_component/experience-img-4.jpg'
import Image5 from '../assets/images/experience_component/experience-img-5.jpg'
import Image6 from '../assets/images/experience_component/experience-img-6.jpg'

export const data = [
    {
        id: nanoid(),
        title: "Multiply your points",
        alternate: 'img01',
        img: Image1
    },
    {
        id: nanoid(),
        title: "Get away & save more",
        alternate: 'img02',
        img: Image2

    },
    {
        id: nanoid(),
        title: "Earn up to 130k points ",
        alternate: 'img03',
        img: Image3

    },
    {
        id: nanoid(),
        title: "A night on us",
        alternate: 'img04',
        img: Image4

    },
    {
        id: nanoid(),
        title: "3 nights under $250",
        alternate: 'img05',
        img: Image5

    },
    {
        id: nanoid(),
        title: "Warn up to 3x points on every stay",
        alternate: 'img06',
        img: Image6

    },
]