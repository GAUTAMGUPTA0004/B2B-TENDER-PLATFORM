import Tender from '../Models/tenderModel';
import { Request, Response } from 'express';
export const createTender = async (req: Request, res: Response) => {
  try {
    const tender = await Tender.create({ ...req.body, companyId: (req as any).user.id });
    res.status(201).json(tender);
  } catch (err) {
    res.status(500).json({ message: 'Tender creation failed', error: err });
  }
};

export const getTenders = async (_req: Request, res: Response) => {
  try {
    const tenders = await Tender.findAll();
    res.status(200).json(tenders);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch tenders', error: err });
  }
};