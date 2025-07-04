import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../Models/userModel';

const SECRET = process.env.JWT_SECRET as string;

export const register = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ where: { email } });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
   const token = jwt.sign({ id: User.id as number }, SECRET, { expiresIn: '1d' });
    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Registration failed', error: err });
  }
};

export const login = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1d' });
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Login failed', error: err });
  }
};