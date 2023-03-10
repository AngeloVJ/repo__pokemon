import React from 'react'
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './styles/radarinfo.css';

function RadarInfo({ poke }) {

    const chartRef = useRef(null);

    const typeColors = {
        grass: '#2f7a5a',
        fire: '#E35825',
        water: '#1479FB',
        normal: '#BC6B7C',
        fighting: '#F1613C',
        ground: '#895C1A',
        poison: '#A564E3',
        rock: '#8D8D94',
        bug: '#3BB039',
        ghost: '#454AA8',
        steel: '#728881',
        electric: '#eeff00',
        psychic: '#df0534',
        ice: '#64CBF5',
        dragon: '#56A4AE',
        dark: '#0D1211',
        fairy: '#C23867'
    };

    const color = typeColors[`${poke?.types[0].type.name}`];

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");
        const myChart = new Chart(ctx, {
            type: "radar",
            data: {
                labels: [
                    `HP: ${poke?.stats[0].base_stat}`,
                    `Attack: ${poke?.stats[1].base_stat}`,
                    `Defense: ${poke?.stats[2].base_stat}`,
                    `S.Attack: ${poke?.stats[3].base_stat}`,
                    `S.Defense: ${poke?.stats[4].base_stat}`,
                    `Speed: ${poke?.stats[5].base_stat}`],
                datasets: [
                    {
                        label: "",
                        data: [
                            `${poke?.stats[0].base_stat}`,
                            `${poke?.stats[1].base_stat}`,
                            `${poke?.stats[2].base_stat}`,
                            `${poke?.stats[3].base_stat}`,
                            `${poke?.stats[4].base_stat}`,
                            `${poke?.stats[5].base_stat}`],
                        backgroundColor: color,
                        borderColor: color,
                        borderWidth: 0,
                        borderOpacity: 0,
                        pointBackgroundColor: 0,
                        pointBorderColor: false,
                        pointHoverBackgroundColor: color,
                        pointHoverBorderColor: color
                    },
                ],
            },
            options: {
                legend: {
                    display: false
                },
                scale: {
                    ticks: {
                        fontColor: 'red'
                    },
                    pointLabels: {
                        fontColor: 'red',
                        fontFamily: 'Arial, sans-serif'
                    }
                },
            }
        });
        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <canvas border="none" ref={chartRef}></canvas>
    );
}

export default RadarInfo;