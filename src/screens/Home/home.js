import React, { useEffect, useState } from 'react';
import { Accordion } from 'components/Accordion/accordion';
import { Basic } from 'components/Basic/basic';
import { Choropleth } from 'components/Choropleth/choropleth';
import { Gradient } from 'components/Gradient/gradient';
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
      [C.Types.Basic]: <Basic items={items} />,
      [C.Types.Choropleth]: <Choropleth items={items} />,
      [C.Types.Gradient]: <Gradient
        caption={C.GRADIENT_CHECK_CAPTION}
        items={items}
        text={C.GRADIENT_TEXT}
      />,
      [C.Types.Timeline]: <Timeline
        timeline={timeline}
        onChangeDate={(values) => console.log('VALUES ON HOME', values)}
      />,
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
