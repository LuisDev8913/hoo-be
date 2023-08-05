'use client';

import { useDialog } from '@/utils/use-dialog';
import { Button } from '@/components/button';
import { HoobeOutlinedIcon } from '@/assets/icons/hoobe-outlined';
import { Modal } from '../modal';
import './index.scss';

export const Footer: React.FC = () => {
  const { showModal, close, props } = useDialog();

  return (
    <>
      <Modal close={close} {...props} className='sign-up-modal'>
        <span className='heading'>sign up</span>
      </Modal>

      <footer>
        <Button onClick={showModal}>
          <HoobeOutlinedIcon className='btn-icon' />
          create your hoo.be
        </Button>

        <a href='login' className='login-link'>
          login
        </a>
      </footer>
    </>
  );
};
