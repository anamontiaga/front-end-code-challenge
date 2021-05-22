import React, { useEffect, useState } from 'react';
import { Accordion } from 'components/Accordion/accordion';
import * as S from './home.style';

export const Home = () => {
  const [legendData, setLegendData] = useState();
  /* eslint-disable */
  const getData = () => {
    fetch('https://raw.githubusercontent.com/Vizzuality/front-end-code-challenge/master/data.json')
      .then(response => response.json())
      .then(data => setLegendData(data));
  }

  useEffect(() => {
    getData();
  }, []);

  if (!legendData) {
    <div>Cargando...</div>
  }

  const Types = {
    Basic: 'basic',
    Choropleth: 'choropleth',
    Gradient: 'gradient',
    Timeline: 'timeline',
  };

  const LEGEND_CONTENT = {
    [Types.Basic]: 'Basic Content',
    [Types.Choropleth]: 'Choropleth Content',
    [Types.Gradient]: 'Gradient Content',
    [Types.Timeline]: 'Timeline Content',
  };

  return (
    <S.View>
      <S.Legend>
        {legendData && legendData.map((legendItem) => (
          <Accordion
            description={legendItem?.description}
            key={legendItem?.id}
            title={legendItem?.name}
          >
            <S.Body>
              {LEGEND_CONTENT[legendItem?.type]}
            </S.Body>
          </Accordion>
        ))}
      </S.Legend>
    </S.View>
  );
};
