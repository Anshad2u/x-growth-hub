'use client';

import { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const useNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navCollapsable = useMemo(() => {
    // Simple stub - all nav items visible
    return true;
  }, [pathname]);

  const activeNav = useMemo(() => {
    const items = [
      { title: 'Overview', href: '/dashboard/overview', icon: 'dashboard' },
      { title: 'Analytics', href: '/dashboard', icon: 'chart' },
      { title: 'Users', href: '/dashboard/users', icon: 'users' },
      { title: 'Products', href: '/dashboard/product', icon: 'product' },
      { title: 'Orders', href: '/dashboard/orders', icon: 'order' },
      { title: 'Chat', href: '/dashboard/chat', icon: 'chat' },
      { title: 'AI Chat', href: '/dashboard/ai-chat', icon: 'ai' },
      { title: 'Kanban', href: '/dashboard/kanban', icon: 'kanban' },
      { title: 'Forms', href: '/dashboard/forms', icon: 'forms' },
      { title: 'Elements', href: '/dashboard/elements/icons', icon: 'elements' },
      { title: 'Notifications', href: '/dashboard/notifications', icon: 'notification' },
      { title: 'Billing', href: '/dashboard/billing', icon: 'billing' },
      { title: 'Settings', href: '/dashboard/settings', icon: 'settings' },
      { title: 'Profile', href: '/dashboard/profile', icon: 'profile' },
      { title: 'Workspaces', href: '/dashboard/workspaces', icon: 'workspace' },
      { title: 'React Query', href: '/dashboard/react-query', icon: 'react-query' },
      { title: 'Exclusive', href: '/dashboard/exclusive', icon: 'exclusive' }
    ];
    const activeItem = items.find((item) => pathname === item.href);
    return activeItem || items[0];
  }, [pathname]);

  return {
    activeNav,
    navCollapsable,
    setActiveNav: (nav: any) => router.push(nav.href),
    // Permission stubs - allow everything
    isAdmin: true,
    isUsersPage: true,
    isOrdersPage: true,
    isBillingPage: true,
    isSettingsPage: true,
    isProfilePage: true,
    isChatPage: true,
    isKanbanPage: true,
    isFormsPage: true,
    isElementsPage: true,
    isNotificationsPage: true,
    isWorkspacePage: true,
    isReactQueryPage: true,
    isExclusivePage: true,
    hasPermission: () => true,
    hasPlan: () => true,
  };
};

export default useNav;
