import { Translation } from '@/types/intl';

export default function Footer({ t }: { t: Translation }) {
    const year = new Date().getFullYear();

    return (
        <footer className="absolute bottom-0 w-screen pb-4 text-center text-theme-dark dark:text-theme-light">
            {t('copyright', { year })}
        </footer>
    );
}
