import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
locales: ['ko', 'en', 'zh', 'ja', 'fr', 'vi', 'mn' ],
  defaultLocale: 'en'
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);