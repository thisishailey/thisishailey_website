import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo/long-light.png';
import { CloseIcon, MenuIcon } from '../ui/icons';

export default function Header() {
    return (
        <header className="fixed top-2 inset-x-0 max-w-6xl mx-auto px-4 z-40">
            <nav className="relative rounded-full border border-transparent bg-theme-light dark:bg-theme-dark dark:border-theme-light/[0.2] shadow-md flex justify-between px-10 py-4">
                <Link href={'/'} className="relative h-10 w-[100px]">
                    <Image
                        src={logo.src}
                        alt="Home"
                        width={100}
                        height={40}
                        priority
                    />
                </Link>
                <button>
                    <MenuIcon />
                    {/* <CloseIcon /> */}
                </button>
            </nav>
        </header>
    );
}
