import Button from "@/components/common/Button/Index";
import InputText from "@/components/common/InputText/Indenx";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [phone, setPhone] = useState("");

    const validate = () => {
        if (!fullName || !email || !password || !phone) {
            toast.warning("Vui lòng nhập đầy đủ thông tin");
            return false;
        }

        if (!email.includes("@")) {
            toast.warning("Enail không hợp lệ");
            return false;
        }

        if (password.length < 8) {
            toast.warning("Mặt khẩu phải có ít nhất 8 ký tự");
            return false;
        }

        if (phone.length !== 10) {
            toast.warning("Số điện thoại phải có 10 chữ số");
            return false;
        }
        return true;
    };

    const handleRegister = async () => {
        const isValid = validate();
        if (!isValid) return;

        try {
            const response = await axios.post(
                "https://nestjs-api-coursera.onrender.com/auth/register",
                {
                    fullName,
                    email,
                    password,
                    phone,
                },
            );
            if ((response.data as any).statusCode === 200) {
                toast.success("Đăng ký thành công");

                setFullName("");
                setEmail("");
                setPassWord("");
                setPhone("");
            }
        } catch (error) {
            toast.error("Đăng ký thất bại");
        }
    };

    return (
        <div className="flex flex-col gap-2 w-[400px]">
            <div className="flex flex-col">
                <InputText
                    value={fullName}
                    onChange={(value) => setFullName(value)}
                    placeholder="Tên đăng nhập"
                />

                <InputText
                    value={email}
                    onChange={(value) => setEmail(value)}
                    placeholder="Email"
                />

                <InputText
                    value={password}
                    onChange={(value) => setPassWord(value)}
                    placeholder="Mặt khẩu"
                    type="password"
                />

                <InputText
                    value={phone}
                    onChange={(value) => setPhone(value)}
                    placeholder="Số điện thoại"
                />
            </div>
            <Button onClick={handleRegister}>Tạo tài khoản</Button>
        </div>
    );
};

export default Register;
