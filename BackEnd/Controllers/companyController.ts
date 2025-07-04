import { Request, Response } from 'express';
import Company from '../Models/companyModel';

interface AuthenticatedRequest extends Request {
  user?: { id: number };
}

export const createCompany = async (req: AuthenticatedRequest, res: Response) => {
  try {
    console.log('Creating company with data:', req.body);
    console.log('User ID from token:', req.user?.id);
    
    if (!req.user?.id) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const company = await Company.create({ 
      ...req.body, 
      userId: req.user.id 
    });
    
    console.log('Company created successfully:', company);
    res.status(201).json(company);
  } catch (err) {
    console.error('Company creation error:', err);
    res.status(500).json({ message: 'Company creation failed', error: err });
  }
};

export const getCompanies = async (_req: Request, res: Response) => {
  try {
    const companies = await Company.findAll();
    res.status(200).json(companies);
  } catch (err) {
    console.error('Get companies error:', err);
    res.status(500).json({ message: 'Failed to fetch companies', error: err });
  }
};