import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function RegisterPage() {
    return (
        <div className="bg-stone-600 w-full h-screen flex flex-col justify-center">
            <div className='container max-w-lg py-8 flex flex-col justify-center items-center border-4  border-slate-800 rounded-md  gap-8 '>
                <h1 className="text-2xl text-white font-bold" >Register
                </h1>
                <form className='flex flex-col space-y-4 justify-center items-center'>
                    <div className="grid w-full  items-center gap-1.5">
                        <Label className="text-white font-bold text-xl" htmlFor="email">Email</Label>
                        <Input className="bg-transparent text-white placeholder:text-white placeholder:font-semibold" type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                        <Label className="text-white font-bold text-xl" htmlFor="password">Password</Label>
                        <Input className="bg-transparent text-white placeholder:text-white placeholder:font-semibold" type="password" id="password" placeholder="Password" />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                        <Label className="text-white font-bold text-xl" htmlFor="displayName">Display Name</Label>
                        <Input className="bg-transparent text-white placeholder:text-white placeholder:font-semibold placeholder:text-opacity-60 " type="text" id="displayName" placeholder="Display Name" />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                        <Label className="text-white font-bold text-xl" htmlFor="avatar">Avatar</Label>
                        <Input className="bg-transparent text-white placeholder:text-white placeholder:font-semibold placeholder:text-opacity-60 " type="file" id="avatar" placeholder="Password" />
                    </div>
                    <div className="flex gap-4">
                        <Button className='border border-slate-600' type="submit">Login</Button>

                    </div>
                </form>

            </div>
        </div>
    )
}
