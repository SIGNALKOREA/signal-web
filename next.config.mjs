import createNextIntlPlugin from 'next-intl/plugin';

// 경로를 최상단 i18n.ts로 수정
const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);