import './index.scss';

interface EmbeddedContentItemProps {
  link?: string;
}

export const EmbeddedContentItem: React.FC<EmbeddedContentItemProps> = () => (
  <div className='embedded'>
    <iframe
      src='https://www.youtube.com/embed/VywJBsrMCDQ'
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
      loading='lazy'
    />
  </div>
);
