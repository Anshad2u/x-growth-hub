'use client';

import type { NavItem, NavGroup } from '@/types';

/**
 * Simplified navigation hook - no RBAC for now.
 * Returns all items without filtering.
 */
export function useFilteredNavItems(items: NavItem[]) {
  return items;
}

export function useFilteredNavGroups(groups: NavGroup[]) {
  return groups;
}
