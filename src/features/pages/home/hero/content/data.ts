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
    { id: 0, text: '_t_One broker,_
]
