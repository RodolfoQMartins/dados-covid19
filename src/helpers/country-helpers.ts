import { CountryOptions, LabelOptions } from "./enums";

export const handleCountryName = (name: string) => {
    if (name === CountryOptions.spa) {
        return LabelOptions.spa
    }

    if (name === CountryOptions.bra) {
        return LabelOptions.bra
    }

    if (name === CountryOptions.usa) {
        return LabelOptions.usa
    }

    if (name === CountryOptions.ita) {
        return LabelOptions.ita
    }

    if (name === CountryOptions.ger) {
        return LabelOptions.ger
    }

    if (name === CountryOptions.fra) {
        return LabelOptions.fra
    }

    if (name === CountryOptions.uk) {
        return LabelOptions.uk
    }

    if (name === CountryOptions.ira) {
        return LabelOptions.ira
    }

    if (name === CountryOptions.ned) {
        return LabelOptions.ned
    }

    if (name === CountryOptions.bel) {
        return LabelOptions.bel
    }
}