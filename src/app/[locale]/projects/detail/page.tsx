import { Suspense } from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import type { Params } from '@/types/param';
import { useTranslations } from 'next-intl';
import Main from '@/components/common/wrapper';
import Meteors from '@/components/ui/background/meteors';
import Carousel from '@/components/common/carousel';
import ProjectCard from '@/components/ui/project/projectCard';

export default function ProjectsDetail({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Projects');

    return (
        <>
            <Meteors number={50} />
            <Main>
                <Suspense fallback={<div>{'Loading...'}</div>}>
                    <Carousel count={3} close={t('close')}>
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
                </Suspense>
            </Main>
        </>
    );
}
