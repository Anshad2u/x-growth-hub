import { NavGroup } from '@/types';

export const navGroups: NavGroup[] = [
  {
    label: 'X Growth Hub',
    items: [
      {
        title: 'Home',
        url: '/',
        icon: 'dashboard',
        isActive: false,
        items: []
      },
      {
        title: 'Analyze Profile',
        url: '/analyze',
        icon: 'users',
        isActive: false,
        items: []
      },
      {
        title: 'Compare Accounts',
        url: '/compare',
        icon: 'barChart',
        isActive: false,
        items: []
      },
      {
        title: 'My Account Audit',
        url: '/my-account',
        icon: 'chart',
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
