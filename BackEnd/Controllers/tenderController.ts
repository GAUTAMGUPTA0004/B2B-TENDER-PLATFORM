import Tender from '../Models/tenderModel';
import { Request, Response } from 'express';

interface AuthenticatedRequest extends Request {
  user?: { id: number };
}

export const createTender = async (req: AuthenticatedRequest, res: Response) => {
  try {
    console.log('Creating tender with data:', req.body);
    console.log('User ID from token:', req.user?.id);
    
    if (!req.user?.id) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    // Note: You might want to get the user's company ID instead of using user ID directly
    // For now, assuming companyId should be the user's company
    const tender = await Tender.create({ 
      ...req.body, 
      companyId: req.user.id // Consider changing this logic if needed
    });
    
    console.log('Tender created successfully:', tender);
    res.status(201).json(tender);
  } catch (err) {
    console.error('Tender creation error:', err);
    res.status(500).json({ message: 'Tender creation failed', error: err });
  }
};

export const getTenders = async (_req: Request, res: Response) => {
  try {
    const tenders = await Tender.findAll();
    res.status(200).json(tenders);
  } catch (err) {
    console.error('Get tenders error:', err);
    res.status(500).json({ message: 'Failed to fetch tenders', error: err });
  }
};