import Application from '../Models/applicationModel';
import { Request, Response } from 'express';
export const applyTender = async (req: Request, res: Response) => {
  try {
    const app = await Application.create(req.body);
    res.status(201).json(app);
  } catch (err) {
    res.status(500).json({ message: 'Application failed', error: err });
  }
};

export const getApplicationsByTender = async (req: Request, res: Response) => {
  try {
    const apps = await Application.findAll({ where: { tenderId: req.params.id } });
    res.status(200).json(apps);
  } catch (err) {
    res.status(500).json({ message: 'Fetch failed', error: err });
  }
};