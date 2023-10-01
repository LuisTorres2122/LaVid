import { Request, Response } from "express";
import User, { IUser } from "../models/user.model";
import bcrypt from 'bcrypt';

export async function createUser(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const newUser = req.body;
    const user = new User(newUser);
    await user.save();
    return res.json({
      message: "user Saved Successfully",
      member: user,
    });
  } catch (err: any) {
    return res.status(500).json({
      message: "Error al guardar el usuario",
      error: err["message"],
    });
  }
}

export async function authenticateUser(req: Request, res: Response): Promise<void> {
    try {
        const { user, password } = req.body;

        const usersWithSameUsername = await User.find({ user });

        if (usersWithSameUsername.length > 0) {

            for (const userFound of usersWithSameUsername) {
                if (password === userFound.password) {
                    res.json({ authenticated: true, user: userFound });
                    return; 
                }
            }

            res.json({ authenticated: false, message: 'Contraseña incorrecta' });
        } else {
            res.json({ authenticated: false, message: 'Usuario no encontrado' });
        }
    } catch (error: any) {
        res.status(500).json({ message: 'Error al autenticar el usuario', error: error.message });
    }
}
