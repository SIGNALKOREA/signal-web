import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // 💡 여기에 베트남어(vi)와 몽골어(mn)를 추가해야 교통경찰이 길을 열어줍니다!
 locales: ['ko', 'en', 'zh', 'ja', 'fr', 'vi', 'mn', 'th' ],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};