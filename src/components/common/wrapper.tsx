export default function Main({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col items-center gap-8 sm:gap-14 w-screen max-w-6xl mx-auto p-4 pt-20 sm:pt-24 pb-8 sm:pb-10">
            {children}
        </main>
    );
}
