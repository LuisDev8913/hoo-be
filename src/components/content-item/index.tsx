import { Content } from '@/app/api/data/type';
import { PhotoLink } from './photo-link';
import { EmbeddedContentItem } from './embedded';
import './index.scss';

interface ContentCSSVars extends React.CSSProperties {
  '--n': number;
}

interface ContentItemProps extends Content {
  style: ContentCSSVars;
}

export const ContentItem: React.FC<ContentItemProps> = ({ title, link, hasPhoto, isEmbedEnabled, style }) => {
  const isPhotoLink = link && hasPhoto;
  const isEmbed = link && isEmbedEnabled;

  return (
    <div style={style} className='content-item'>
      {isPhotoLink ? <PhotoLink title={title} link={link} /> : isEmbed ? <EmbeddedContentItem /> : null}
    </div>
  );
};
