
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

export default function handler(req, res) {
  const businesses = [];
  
  fs.createReadStream(path.join(process.cwd(), 'Outscraper-20250307092319s54_electrician (1).csv'))
    .pipe(csv())
    .on('data', (data) => businesses.push(data))
    .on('end', () => {
      res.status(200).json(businesses);
    });
}
