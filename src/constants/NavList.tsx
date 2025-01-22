import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConstructionIcon from '@mui/icons-material/Construction';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

export const NavList = [
  {
    routes: ['dashboard'],
    href: '/dashboard',
    icon: DashboardIcon,
    id: 'dashboard',
    title: 'Dashboard',
    items: [],
  },
  {
    routes: ['RequestQuote'],
    href: '/RequestQuote',
    icon: AccountCircleIcon,
    id: 'RequestQuote',
    title: 'Request Quote',
  },

  {
    routes: ['myTools'],
    href: '/banking',
    icon: ConstructionIcon,
    id: 'myTools',
    title: 'My Tools',
    items: [],
  },
  {
    routes: ['myAccount'],
    href: '/banking',
    icon: AccountCircleIcon,
    id: 'myAccount',
    title: 'My Account',
    items: [],
  },
  {
    routes: ['customerOwnedInventory'],
    href: '/banking',
    icon: ViewInArIcon,
    id: 'customerOwnedInvetory',
    title: 'Customer Owned Inventory',
    items: [],
  },
  {
    routes: ['customerOwnedInventory'],
    href: '/banking',
    icon: ViewInArIcon,
    id: 'customerOwnedInvetory',
    title: 'Customer Owned Inventory',
    items: [],
  },
  // {
  //   href: '/login',
  //   icon: 'LOGOUTIMG',
  //   title: 'Logout',
  // },
];
