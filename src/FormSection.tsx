import React from 'react';
import { CountryOptions, LabelOptions } from "./helpers/enums"
import { InputLabel, Select, MenuItem } from '@material-ui/core';

interface FormSectionProps {
  selectedCountry: CountryOptions,
  handleSelectedCountry: Function
}

export function FormSection(props: FormSectionProps): JSX.Element {
  const { selectedCountry, handleSelectedCountry } = props;
  return (
    <section className="form-section">
      <InputLabel id="label-country">Escolha o país:</InputLabel>
      <Select onChange={e => handleSelectedCountry(e.target.value)} labelId="label-country" id="select" value={selectedCountry}>
        <MenuItem value={CountryOptions.bra}>{LabelOptions.bra}</MenuItem>
        <MenuItem value={CountryOptions.spa}>{LabelOptions.spa}</MenuItem>
        <MenuItem value={CountryOptions.usa}>{LabelOptions.usa}</MenuItem>
        <MenuItem value={CountryOptions.ita}>{LabelOptions.ita}</MenuItem>
        <MenuItem value={CountryOptions.ger}>{LabelOptions.ger}</MenuItem>
        <MenuItem value={CountryOptions.fra}>{LabelOptions.fra}</MenuItem>
        <MenuItem value={CountryOptions.uk}>{LabelOptions.uk}</MenuItem>
        <MenuItem value={CountryOptions.ira}>{LabelOptions.ira}</MenuItem>
        <MenuItem value={CountryOptions.ned}>{LabelOptions.ned}</MenuItem>
        <MenuItem value={CountryOptions.bel}>{LabelOptions.bel}</MenuItem>
      </Select>
    </section>
  )
}

export default FormSection;