import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['ko', 'en', 'zh', 'ja', 'fr', 'vi', 'mn', 'th'];

export default getRequestConfig(async ({ requestLocale }) => {
  // 1. 최신 버전은 locale 대신 requestLocale을 Promise 형태로 받아옵니다.
  let locale = await requestLocale;

  // 2. 지원하지 않는 언어 주소로 접속하면 404(Not Found) 처리
  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale, // 3. 최신 버전에서는 사용할 locale을 반드시 한 번 더 반환해야 합니다.
    messages: (await import(`./messages/${locale}.json`)).default
  };
});