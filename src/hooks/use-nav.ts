'use client';

import { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { navGroups } from '@/config/nav-config';

const useNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navCollapsable = useMemo(() => {
    return true;
  }, [pathname]);

  const activeNav = useMemo(() => {
    const allItems = navGroups.flatMap((group) => group.items);
    const activeItem = allItems.find((item) => pathname === item.url);
    return activeItem || allItems[0];
  }, [pathname]);

  return {
    activeNav,
    navCollapsable,
    setActiveNav: (nav: any) => router.push(nav.href),
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

// Stub for KBar component - just returns navGroups as-is
export const useFilteredNavGroups = (groups: any) => {
  return groups;
};

export default useNav;
