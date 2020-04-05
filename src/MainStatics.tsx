
import React from 'react';
import { CountryData } from "./helpers/interfaces";
import { formatNumber } from "./helpers/formatters";

interface MainStaticsProps {
    itemData: CountryData
}

export function MainStatics(props: MainStaticsProps): JSX.Element {
    const { itemData } = props
    return (
        <section className="main-statics" key={itemData.country}>
            <div >
                <h3>Infectados </h3>
                <p>{formatNumber(itemData.confirmed)}</p>
            </div>
            <div >
                <h3 className="healed">Curados</h3>
                <p>{formatNumber(itemData.recovered)}</p>
            </div>
            <div >
                <h3>Óbitos</h3>
                <p>{formatNumber(itemData.deaths)}</p>
            </div>
        </section>
    )
}

export default MainStatics;