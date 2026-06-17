import { departments } from '@/data/departments';
import { siteContent } from '@/data/siteContent';

export const contentService = {
  getSiteContent: () => siteContent,
  getDepartments: () => departments,
};
