import React from 'react';
import Layout from '../components/global/Layout';
import Tabs, { Tab } from '../components/features/tabs/Tabs';
const Index = () => {
  return (
    <Layout>
      <Tabs>
        <Tab title="tab one">Here is tab one content</Tab>
        <Tab title="tab two">Here is tab two content</Tab>
        <Tab title="tab three">Here is tab three content</Tab>
      </Tabs>
    </Layout>
  );
};

export default Index;
