import { Translation } from '@/types/intl';

export default function Footer({ t }: { t: Translation }) {
    const year = new Date().getFullYear();

    return (
        <footer className="absolute bottom-0 w-screen pb-4 text-center text-[--theme-dark]">
            {t('copyright', { year })}
        </footer>
    );
}
