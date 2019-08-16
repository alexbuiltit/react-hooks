import React from 'react';
import Layout from '../components/global/Layout';
import Stepper, { StepperItem } from '../components/features/stepper/Stepper';
const Index = () => {
  return (
    <Layout>
      <Stepper>
        <StepperItem>Page one</StepperItem>
        <StepperItem>Page two</StepperItem>
        <StepperItem>Page three</StepperItem>
        <StepperItem>Page four</StepperItem>
      </Stepper>
    </Layout>
  );
};

export default Index;
