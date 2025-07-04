import { Op } from 'sequelize';
import Company from '../Models/companyModel';
import { Request, Response } from 'express';
export const searchCompanies = async (req: Request, res: Response) => {
  const q = req.query.q as string;
  try {
    const results = await Company.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${q}%` } },
          { industry: { [Op.iLike]: `%${q}%` } },
          { description: { [Op.iLike]: `%${q}%` } }
        ]
      }
    });
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: 'Search failed', error: err });
  }
};