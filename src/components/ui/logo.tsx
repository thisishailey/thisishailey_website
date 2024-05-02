import Link from 'next/link';
import { CursorToNormal, CursorToPointer } from '../common/cursor';

export default function Logo() {
    return (
        <Link
            href={'/'}
            className="flex items-end justify-center h-12 w-12 sm:w-28 mb-1 font-logo text-4xl text-theme-dark dark:text-theme-light"
            onMouseOver={CursorToPointer}
            onMouseLeave={CursorToNormal}
        >
            <span className="hidden sm:block">hailey</span>
            <span className="sm:hidden">h.</span>
        </Link>
    );
}
