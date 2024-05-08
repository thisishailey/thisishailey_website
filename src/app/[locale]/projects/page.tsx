import { unstable_setRequestLocale } from 'next-intl/server';
import type { Params } from '@/types/param';
import { useTranslations } from 'next-intl';
import { cn } from '@/utils/cn';
import Main from '@/components/common/wrapper';
import Meteors from '@/components/ui/background/meteors';
import BottomNavButtons from '@/components/common/bottomNav';
import Carousel from '@/components/common/carousel';
import ProjectCard from '@/components/ui/project/projectCard';
import ProjectPreview from '@/components/ui/project/projectPreview';
import Backdrop from '@/components/ui/project/backdrop';

export default function Projects({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Projects');

    const tSkills = useTranslations('Skills');
    const tContact = useTranslations('Contact');
    const navValues = [
        { name: tSkills('title'), link: `/${locale}/skills` },
        { name: tContact('title'), link: `/${locale}/contact` },
    ];

    return (
        <>
            <Meteors number={50} />
            <Main>
                <h1
                    className={cn(
                        'mt-14 sm:mt-0 text-5xl sm:text-6xl',
                        locale === 'en' ? 'font-logo' : 'font-cafe'
                    )}
                >
                    {t('title')}
                </h1>
                <div className="grid sm:grid-cols-2 gap-4 mx-2">
                    {[1, 2, 3].map((i) => (
                        <ProjectPreview
                            key={i}
                            index={i - 1}
                            title={t(`project${i}`)}
                            subtitle={t(`subtitle${i}`)}
                        />
                    ))}
                </div>
                <BottomNavButtons values={navValues} />
            </Main>
            <div id="project-carousel" className="hidden">
                <Backdrop>
                    <Carousel count={3}>
                        {[1, 2, 3].map((i) => (
                            <ProjectCard
                                key={i}
                                index={i - 1}
                                title={t(`project${i}`)}
                                subtitle={t(`subtitle${i}`)}
                                description={t(`description${i}`)}
                            />
                        ))}
                    </Carousel>
                </Backdrop>
            </div>
        </>
    );
}
