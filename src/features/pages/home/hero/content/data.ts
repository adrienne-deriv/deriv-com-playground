import { TString } from 'types/generics'

export type THeaderItem = {
    id: number
    text: TString
}

export type THomeHeroImage = {
    key: string
    image: {
        src: string
        alt: string
        quality: number
        eager_loading: boolean
    }
}

export const header_items: THeaderItem[] = [
    { id: 0, text: '_t_Uwu whats this, kuru kuru?,_t_' },
    { id: 1, text: '_t_countless kuru kuru and_t_' },
    { id: 2, text: '_t_kururin!_t_' },
]
