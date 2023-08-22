import { Outlet } from 'react-router'

export default function AuthPage() {
    return (
        <div className='flex' >
            <div>AuthPage</div>
            <Outlet />
        </div>
    )
}
