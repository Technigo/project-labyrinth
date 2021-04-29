/* eslint-disable no-console */
import React from 'react';

import Map from 'components/FolderTabs/TabMap';
import Next from 'components/FolderTabs/TabNext';

import {
  TabsWrapper,
  ButtonTab,
  TabButtonRow,
  TabContent
} from './style';

export default ({ selectedAction }) => {
  const defaultTabs = [
    {
      text: 'Map',
      selected: true,
      component: <Map />
    },
    {
      text: 'Next',
      selected: false,
      component: <Next selectedAction={selectedAction} />
    }
  ];
  const [tabs, setTabs] = React.useState(defaultTabs);

  const handleChange = () => {
    const newTabs = tabs.map((tab) => {
      return { ...tab, selected: !tab.selected };
    });
    setTabs(newTabs);
  };

  return (
    <TabsWrapper>
      <TabButtonRow>
        {tabs.map((tab) => (
          <ButtonTab
            key={tab.text}
            type="button"
            selected={tab.selected}
            onClick={() => handleChange()}>
            {tab.text}
          </ButtonTab>
        ))}
      </TabButtonRow>
      <TabContent>
        {tabs.find((tab) => tab.selected).component}
      </TabContent>
    </TabsWrapper>
  );
};
