import { Translation } from '@/types/intl';

export default function Footer({ t }: { t: Translation }) {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-20 w-72 mx-auto">
            {t('copyright', { year })}
        </footer>
    );
}
