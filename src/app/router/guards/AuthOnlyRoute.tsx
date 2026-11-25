import { Navigate, Outlet } from 'react-router-dom';
import {routerPaths} from "../paths.ts";
import {useAuthStore} from "../../../state/auth.ts";

export function AuthOnlyRoute() {
    const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
    return isAuthenticated ? <Outlet /> : <Navigate to={routerPaths.LOGIN} replace />;
}
