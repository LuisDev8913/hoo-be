import './index.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <button className='btn' {...props} />;
};
