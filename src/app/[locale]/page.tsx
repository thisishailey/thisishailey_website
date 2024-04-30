import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('Home');
    return (
        <>
            <h1 className="mt-20 w-72 mx-auto">{t('title')}</h1>
            <h2 className="w-72 mx-auto">{t('subtitle')}</h2>
        </>
    );
}
