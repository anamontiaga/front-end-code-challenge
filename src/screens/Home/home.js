import React, { useEffect, useState } from 'react';
import { fetchData } from 'api/api';
import { Accordion } from 'components/Accordion/accordion';
import { Basic } from 'components/Basic/basic';
import { Choropleth } from 'components/Choropleth/choropleth';
import { Gradient } from 'components/Gradient/gradient';
import { Timeline } from 'components/Timeline/timeline';
import * as C from './home.constants';
import * as S from './home.style';

export const Home = () => {
  const [legendData, setLegendData] = useState();
  // eslint-disable-next-line no-unused-vars
  const [legendDates, setLegendDates] = useState({ startDate: null, endDate: null });
  const [dragId, setDragId] = useState();
  const [accordionOpen, setIsAccordionOpen] = useState();

  useEffect(() => {
    fetchData()
      .then((data) => setLegendData(data.map((obj, i) => ({ ...obj, order: i + 1 }))));
  }, []);

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {
    const dragBox = legendData.find((legendItem) => legendItem.id === dragId);
    const dropBox = legendData.find(
      (legendItem) => legendItem.id === ev.currentTarget.id,
    );

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;

    const newAccordionState = legendData.map((legendItem) => {
      if (legendItem.id === dragId) {
        legendItem.order = dropBoxOrder;
      }
      if (legendItem.id === ev.currentTarget.id) {
        legendItem.order = dragBoxOrder;
      }
      return legendItem;
    });
    setLegendData(newAccordionState);
  };

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
        onChangeDate={(values) => setLegendDates({ startDate: values[0], endDate: values[1] })}
      />,
    };
    return LEGEND_CONTENT[type];
  };

  return (
    <S.View>
      <S.Legend>
        {legendData && legendData
          .sort((a, b) => a.order - b.order)
          .map((legendItem) => (
            <S.DragContainer
              id={legendItem.id}
              onDragOver={(ev) => !accordionOpen && ev.preventDefault()}
              onDragStart={handleDrag}
              onDrop={handleDrop}
            >
              <Accordion
                description={legendItem?.description}
                key={legendItem?.id}
                title={legendItem?.name}
                onChangeAccordion={(isAccordionOpen) => setIsAccordionOpen(isAccordionOpen)}
              >
                <S.Body data-cy="accordion-content">
                  {getLegendComponent({
                    items: legendItem.items,
                    timeline: legendItem.timeline,
                    type: legendItem.type,
                  })}
                </S.Body>
              </Accordion>
            </S.DragContainer>
          ))}
      </S.Legend>
    </S.View>
  );
};
