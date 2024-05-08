export default function Backdrop({ children }: { children: React.ReactNode }) {
    return (
        <div className="fixed z-20 top-0 left-0 w-screen h-screen px-2 pb-10 flex items-center justify-center bg-theme-light dark:bg-theme-dark">
            {children}
        </div>
    );
}
