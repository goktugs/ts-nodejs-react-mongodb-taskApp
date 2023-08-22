import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom";


export default function LoginPage() {
    return (
        <div className="bg-stone-600 w-full h-screen flex flex-col justify-center">
            <div className='container max-w-lg py-8 flex flex-col justify-center items-center border-4  border-slate-800 rounded-md  gap-8 '>
                <h1 className="text-2xl text-white font-bold" >Sign in to your account
                </h1>
                <form className='flex flex-col space-y-8 justify-center items-center'>
                    <div className="grid w-full  items-center gap-1.5">
                        <Label className="text-white font-bold text-xl" htmlFor="email">Email</Label>
                        <Input className="bg-transparent text-white placeholder:text-white placeholder:font-semibold" type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                        <Label className="text-white font-bold text-xl" htmlFor="password">Password</Label>
                        <Input className="bg-transparent text-white placeholder:text-white placeholder:font-semibold" type="password" id="password" placeholder="Password" />
                    </div>
                    <div className="flex gap-4">
                        <Button className='border border-slate-600' type="submit">Login</Button>
                        <Link to={"/auth/register"}>

                            <Button className='border border-slate-600' type="submit">Register</Button>
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    )
}
