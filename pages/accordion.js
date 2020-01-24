import React from 'react';
import Layout from '../components/global/Layout';
import Accordion from '../components/features/accordion/Accordion';
const Index = () => {
  return (
    <Layout>
      <Accordion title="Accordion 1" uniqueId="firstaccordion">
        <p>
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a
          pharetra augue. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis
          euismod. Donec ullamcorper nulla non metus auctor fringilla.
        </p>
      </Accordion>
      <Accordion title="Accordion 2" uniqueId="secondaccordion">
        <p>
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a
          pharetra augue. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis
          euismod. Donec ullamcorper nulla non metus auctor fringilla.
        </p>
      </Accordion>
    </Layout>
  );
};

export default Index;
