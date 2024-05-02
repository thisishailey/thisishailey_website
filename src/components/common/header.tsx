import Logo from '../ui/logo';
import Menu from '../ui/menu';
import type { Translation } from '@/types/intl';

export default function Header({ t }: { t: Translation }) {
    const menuItems = [
        { text: t('about'), link: '/about' },
        { text: t('skill'), link: '/skill' },
        { text: t('project'), link: '/project' },
        { text: t('contact'), link: '/contact' },
    ];

    return (
        <header className="fixed top-3 inset-x-0 max-w-6xl mx-auto z-40">
            <div className="relative flex items-center justify-between mx-3 px-6 sm:px-6 py-2 sm:py-3 rounded-full shadow-inner shadow-theme/50 ring-2 ring-theme/25 dark:ring-0 bg-theme-light dark:bg-theme-dark border border-transparent dark:border-theme/[0.2]">
                <Logo />
                <Menu items={menuItems} />
            </div>
        </header>
    );
}
