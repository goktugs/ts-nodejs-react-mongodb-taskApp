import { Request, Response } from "express";
import bcrypt from "bcrypt";
import userModel from "../models/userModel";
import multer from "multer";

const upload = multer({ dest: "public/files" });

const register = async (req: Request, res: Response) => {
  try {
    const { email, password, displayName, avatar } = req.body;

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

    const isEmailExist = await userModel.findOne({ email });

    if (isEmailExist) {
      return res.status(400).json({ message: "Bu email zaten kayıtlı" });
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

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res

        .status(400)
        .json({ message: "Kullanıcı adı ve şifre zorunludur" });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Kullanıcı bulunamadı" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Geçersiz şifre" });
    }

    res.status(200).json({ message: "Giriş başarılı" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
};

const uploadAvatar = async (req: Request, res: Response) => {
  try {
    upload.single("avatar");

    console.log(req.file);

    res.status(200).json({ message: "Avatar yükleme başarılı" });
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Sunucu hatası" });
  }
};

export default { register, login };
