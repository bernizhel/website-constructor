import image from '@a/image.png';
import {TextBlock, TitleBlock, ImageBlock, ColumnsBlock} from '@c/blocks';


export const model = [
    new TitleBlock('Website Constructor', {
        tag: 'h1',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem',
        },
    }),
    new TextBlock('Lorem ipsum mono rice mole van truck auto sample.',{
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold',
        },
    }),
    new ColumnsBlock(['11111', '22222', '33333', '44444'],{
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold',
        },
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center',
        },
        imageStyles: {
            width: '500px',
        },
        alt: 'no image',
    }),
];