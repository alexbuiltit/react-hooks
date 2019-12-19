import React from 'react';
import Layout from '../components/global/Layout';
import Link from 'next/link';
import ListItem from '../components/global/ListItem';

const Index = () => {
  return (
    <Layout>
      <ListItem link="/modal" title="A fully accessible Modal" />
      <ListItem link="/stepper" title="A content stepper" />
      <ListItem link="/tabs" title="Tabs" />
      <ListItem link="/accordion" title="Accordion" />
    </Layout>
  );
};

export default Index;
