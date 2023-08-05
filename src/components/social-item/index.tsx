import { InstagramIcon } from '@/assets/icons/instagram';
import { ThreadsIcon } from '@/assets/icons/threads';
import { TikTokIcon } from '@/assets/icons/tiktok';
import { TwitterIcon } from '@/assets/icons/twitter';

import './index.scss';

const icons = {
  instagram: InstagramIcon,
  threads: ThreadsIcon,
  tiktok: TikTokIcon,
  twitter: TwitterIcon
} as const;

type SocialItemProps = {
  socialPlatform: keyof typeof icons;
  link: string;
};

export const SocialItem: React.FC<SocialItemProps> = ({ socialPlatform, link }) => {
  const Icon = icons[socialPlatform];

  return (
    <a href={link} target='_blank' rel='noreferrer' className='social-item'>
      <Icon className='social-item-icon' />
    </a>
  );
};
