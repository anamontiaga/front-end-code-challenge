import React, { useEffect, useState } from 'react';
import { Accordion } from 'components/Accordion/accordion';
import { BasicLegend } from 'components/BasicLegend/basicLegend';
import { ChoroplethLegend } from 'components/ChoroplethLegend/choroplethLegend';
import { GradientLegend } from 'components/GradientLegend/gradientLegend';
import * as C from './home.constants';
import * as S from './home.style';

export const Home = () => {
  const [legendData, setLegendData] = useState();

  const getData = () => {
    fetch('https://raw.githubusercontent.com/Vizzuality/front-end-code-challenge/master/data.json')
      .then((response) => response.json())
      .then((data) => setLegendData(data));
  };

  useEffect(() => {
    getData();
  }, []);

  const getLegendComponent = ({ type, items }) => {
    const LEGEND_CONTENT = {
      [C.Types.Basic]: <BasicLegend items={items} />,
      [C.Types.Choropleth]: <ChoroplethLegend items={items} />,
      [C.Types.Gradient]: <GradientLegend items={items} />,
      [C.Types.Timeline]: 'Timeline Content',
    };
    return LEGEND_CONTENT[type];
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
              {getLegendComponent({ type: legendItem.type, items: legendItem.items })}
            </S.Body>
          </Accordion>
        ))}
      </S.Legend>
    </S.View>
  );
};
