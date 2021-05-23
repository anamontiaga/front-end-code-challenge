import React, { useEffect, useState } from 'react';
import { Accordion } from 'components/Accordion/accordion';
import { BasicLegend } from 'components/BasicLegend/basicLegend';
import { ChoroplethLegend } from 'components/ChoroplethLegend/choroplethLegend';
import { GradientLegend } from 'components/GradientLegend/gradientLegend';
import { Timeline } from 'components/Timeline/timeline';
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

  const getLegendComponent = ({ type, items, timeline }) => {
    const LEGEND_CONTENT = {
      [C.Types.Basic]: <BasicLegend items={items} />,
      [C.Types.Choropleth]: <ChoroplethLegend items={items} />,
      [C.Types.Gradient]: <GradientLegend
        caption={C.GRADIENT_CHECK_CAPTION}
        items={items}
        text={C.GRADIENT_TEXT}
      />,
      [C.Types.Timeline]: <Timeline timeline={timeline} />,
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
              {getLegendComponent({
                items: legendItem.items,
                timeline: legendItem.timeline,
                type: legendItem.type,
              })}
            </S.Body>
          </Accordion>
        ))}
      </S.Legend>
    </S.View>
  );
};
