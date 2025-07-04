import { Request, Response } from 'express';
import Company from '../Models/companyModel';

export const createCompany = async (req: Request, res: Response) => {
  try {
    const company = await Company.create({ ...req.body, userId: (req as any).user.id });
    res.status(201).json(company);
  } catch (err) {
    res.status(500).json({ message: 'Company creation failed', error: err });
  }
};

export const getCompanies = async (_req: Request, res: Response) => {
  try {
    const companies = await Company.findAll();
    res.status(200).json(companies);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch companies', error: err });
  }
};