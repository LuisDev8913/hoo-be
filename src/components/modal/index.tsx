import { forwardRef } from 'react';
import { CrossIcon } from '@/assets/icons/cross';
import './index.scss';

interface ModalProps extends React.ComponentPropsWithRef<'dialog'> {
  close: () => void;
  children: React.ReactNode;
}

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(({ close, children, ...props }, ref) => (
  <dialog {...props} ref={ref}>
    {children}
    <button className='close' onClick={close}>
      <CrossIcon />
    </button>
  </dialog>
));
