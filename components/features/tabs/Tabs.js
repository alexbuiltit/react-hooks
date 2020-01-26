import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState('tab_0');

  let tabItems = {};
  let tabNavigation;

  if (children) {
    children.map((child, idx) => {
      const tabId = `tab_${idx}`;
      const title = child.props.title;
      const children = child.props.children;
      const childObject = {
        [tabId]: {
          label: tabId,
          title: title,
          content: children,
        },
      };
      Object.assign(tabItems, childObject);
    });
  }

  if (tabItems) {
    tabNavigation = Object.keys(tabItems).map(item => (
      <button
        role="tab"
        aria-selected={activeTab === item ? 'true' : 'false'}
        key={item}
        onClick={() => setActiveTab(item)}
      >
        {tabItems[item].title}
      </button>
    ));
  }

  return (
    <div>
      <div role="tablist" aria-label="Sample Tabs">
        {tabNavigation}
      </div>
      <div role="tabpanel">{tabItems[activeTab].content}</div>
    </div>
  );
};

Tabs.propTypes = {
  title: PropTypes.string,
};

export const Tab = ({ title, children }) => {
  return (
    <div className="tab">
      <div>{title}</div>
      <div className="tab__content">{children}</div>
    </div>
  );
};

Tab.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Tabs;
