import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo/long-light.png';

export default function Header() {
    return (
        <header className="fixed top-2 inset-x-0 max-w-6xl mx-auto px-4 z-50">
            <nav className="relative rounded-full border border-transparent dark:bg-[--theme-dark] dark:border-white/[0.2] bg-white shadow-md flex justify-between px-10 py-4">
                <Link href={'/'} className="relative h-10 w-[100px]">
                    <Image src={logo.src} alt="Home" width={100} height={40} />
                </Link>
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
            </nav>
        </header>
    );
}
