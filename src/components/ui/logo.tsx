import Link from 'next/link';
import Image from 'next/image';
import logoLight from '@/assets/logo/long-light.png';
import logoDark from '@/assets/logo/long-dark.png';
import logoShortLight from '@/assets/logo/short-light.png';
import logoShortDark from '@/assets/logo/short-dark.png';
import { CursorToNormal, CursorToPointer } from '../common/cursor';

export default function Logo() {
    return (
        <Link
            href={'/'}
            className="relative h-10 w-[100px]"
            onMouseOver={CursorToPointer}
            onMouseLeave={CursorToNormal}
        >
            <Image
                src={logoLight.src}
                alt="Home"
                width={100}
                height={40}
                priority
                className="sm:block hidden dark:hidden"
            />
            <Image
                src={logoDark.src}
                alt="Home"
                width={100}
                height={40}
                priority
                className="dark:sm:block hidden"
            />
            <Image
                src={logoShortLight.src}
                alt="Home"
                width={40}
                height={40}
                priority
                className="sm:hidden dark:hidden"
            />
            <Image
                src={logoShortDark.src}
                alt="Home"
                width={40}
                height={40}
                priority
                className="dark:block hidden sm:hidden"
            />
        </Link>
    );
}
