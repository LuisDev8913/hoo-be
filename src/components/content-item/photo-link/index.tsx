import Image from 'next/image';
import DefaultContentImage from '@/assets/images/content-id-f9wzS1vHcf-image.jpg';
import { HoobeIcon } from '@/assets/icons/hoobe';
import './index.scss';

interface PhotoLinkProps {
  title: string;
  link: string;
  imgSrc?: string;
}

export const PhotoLink: React.FC<PhotoLinkProps> = ({ title, link, imgSrc }) => (
  <a href={link} target='_blank' rel='noreferrer' className='photo-link'>
    <Image src={imgSrc || DefaultContentImage} alt={title} />

    <div className='content-block'>
      <span>{title}</span>
      <HoobeIcon />
    </div>
  </a>
);
