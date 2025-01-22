import { lazy } from 'react';
import routeConstants from './RouteConstant';

// Plese add here route path
const LandingPage = lazy(() => import('../components/Hoc/auth'));
const ResetPassword = lazy(() => import('../screen/onboarding/resetPassword'))
// Pleae add here private path
const Dashboard = lazy(() => import('../screen/dashboard'));
const SignUp = lazy(() => import('../screen/onboarding/signUp'))

const { landingPage, dashboard, resetPassword, signUp } = routeConstants;

export const RoutesPath = [
  {
    path: resetPassword,
    element: ResetPassword,
  },
  {
    path: landingPage,
    element: LandingPage,
  },
  {
    path: signUp,
    element: SignUp,
  },
];

export const PrivateRoutesPath = [
  {
    path: dashboard,
    element: Dashboard,
  },
];
