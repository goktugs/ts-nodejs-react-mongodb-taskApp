import { Request, Response } from "express";
import bcrypt from "bcrypt";
import userModel from "../models/userModel";

const register = async (req: Request, res: Response) => {
  try {
    const { email, password, displayName } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Kullanıcı adı ve şifre zorunludur" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Şifre en az 6 karakter uzunluğunda olmalıdır" });
    }

    if (displayName.length < 3) {
      return res
        .status(400)
        .json({ message: "İsim en az 3 karakter uzunluğunda olmalıdır" });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      email,
      password: hashedPass,
      displayName,
    });

    await newUser.save();

    res.status(201).json({ message: "Kayıt başarılı" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
};

export default { register };
