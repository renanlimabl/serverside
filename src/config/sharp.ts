import { Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';

export default function Sharp(request: Request, response: Response): void {
  // const compressedImagefileSavePath = path.join(__dirname, '../', 'teste');
  const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp', 'teste.jpg');

  sharp(request.file.path)
    .resize(40, 40)
    .jpeg()
    .toFile(tmpFolder, (err, info) => {
      if (err) {
        response.json({ err });
      } else {
        response.json({ info });
      }
    });
}
