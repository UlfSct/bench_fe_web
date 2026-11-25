import { Navigate, Outlet } from 'react-router-dom';
import {routerPaths} from "../paths.ts";
import {useAuthStore} from "@/state/auth.ts";

export function NoAuthOnlyRoute() {
    const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
    return isAuthenticated ? <Navigate to={routerPaths.APP} replace /> : <Outlet />;
}
