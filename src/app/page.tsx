import { env } from '@/env.mjs';
import { SOCIAL_PLATFORM_IDS_MAP, type PageData, SocialPlatform } from './api/data/type';
import { SocialItem } from '@/components/social-item';
import AvatarImage from '@/assets/images/hoobe-icon.png';
import Image from 'next/image';
import { ContentItem } from '@/components/content-item';
import './index.scss';

export default async function Home() {
  const dataRes = await fetch(`${env.NEXT_PUBLIC_URL}/api/data`);
  const { user, content, userSocialPlatform } = (await dataRes.json()) as PageData;

  const socialPlatforms = userSocialPlatform.reduce((acc, { socialPlatform: platformId, link }) => {
    const socialPlatform = SOCIAL_PLATFORM_IDS_MAP.get(platformId);
    if (!socialPlatform) return acc;
    return [...acc, { socialPlatform, link }];
  }, [] as { socialPlatform: SocialPlatform; link: string }[]);

  return (
    <section>
      <Image src={AvatarImage} className='avatar-image' alt={user.fullName} priority />

      <h1>{user.fullName}</h1>

      <div className='social-platforms'>
        {socialPlatforms.map((platform) => (
          <SocialItem key={platform.link} {...platform} />
        ))}
      </div>

      <div className='content'>
        {content.map((item, i) => (
          <ContentItem key={i} style={{ '--n': i }} {...item.content} />
        ))}
      </div>
    </section>
  );
}
