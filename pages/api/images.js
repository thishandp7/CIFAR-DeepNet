import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const imagesDir = path.join(process.cwd(), 'data/inference');
    fs.readdir(imagesDir, (err, files) => {
        if (err) {
            console.log('Error reading images')
            res.status(500).send('Error reading images');
            return;
        }
        const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        let imageData = []
        images.forEach(image => {
            imageData.push(
                {
                    name: image,
                    url: `../data/inference/${image}`
                }
            )
        });
        res.status(200).json(imageData);
    });
}