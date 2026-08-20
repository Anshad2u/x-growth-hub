import { NavGroup } from '@/types';

export const navGroups: NavGroup[] = [
  {
    label: 'X Growth Hub',
    items: [
      {
        title: 'Home',
        url: '/',
        icon: 'logo',
        isActive: false,
        items: []
      },
      {
        title: 'Analyze Profile',
        url: '/analyze',
        icon: 'search',
        isActive: false,
        items: []
      },
      {
        title: 'Compare Accounts',
        url: '/compare',
        icon: 'teams',
        isActive: false,
        items: []
      },
      {
        title: 'My Account Audit',
        url: '/my-account',
        icon: 'user',
        isActive: false,
        items: []
      },
      {
        title: 'Tweet Insights',
        url: '/dashboard/overview',
        icon: 'dashboard',
        isActive: false,
        items: []
      }
    ]
  }
];
