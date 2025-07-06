import { Request, Response } from 'express';
import Company from '../Models/companyModel';
import { AuthRequest } from '../Middleware/AuthMiddleware';

export const createCompany = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    console.log('Creating company with data:', req.body);
    console.log('User ID from token:', req.user?.id);
    
    if (!req.user?.id) {
      res.status(401).json({ message: 'User not authenticated' });
      return;
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

export const getCompanies = async (_req: Request, res: Response): Promise<void> => {
  try {
    const companies = await Company.findAll();
    res.status(200).json(companies);
  } catch (err) {
    console.error('Get companies error:', err);
    res.status(500).json({ message: 'Failed to fetch companies', error: err });
  }
};