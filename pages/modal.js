import React from 'react';
import Layout from '../components/global/Layout';
import Modal, {
  ModalHeader,
  ModalContent,
  ModalFooter,
} from '../components/features/modal/Modal';
const Index = () => {
  return (
    <Layout>
      <Modal uniqueId="modalOne">
        <ModalHeader>
          <h1>This modal is fully accessible</h1>
        </ModalHeader>
        <ModalContent>
          I've taken information from{' '}
          <a
            href="https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html"
            target="_blank"
            title="Dialog modal from W3.org"
          >
            w3.org
          </a>
        </ModalContent>
        <ModalFooter>
          It's not that impressive to look at, but it's a good starting point
        </ModalFooter>
      </Modal>
    </Layout>
  );
};

export default Index;
