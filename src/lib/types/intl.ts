import { TranslationValues, Formats } from 'next-intl';

export type Translation = {
    <TargetKey>(
        key: TargetKey,
        values?: TranslationValues | undefined,
        formats?: Partial<Formats> | undefined
    ): string;
};
