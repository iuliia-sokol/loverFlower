import sprite from '../../images/sprite.svg';
import {
  SocialMediaLinkListItem,
  SocialMediaLink,
} from './SocialMediaLinks.styled';

export const SocialMediaLinks = ({ location }) => {
  return (
    <>
      <SocialMediaLinkListItem location={location}>
        <SocialMediaLink href="#" location={location}>
          <svg>
            <use href={sprite + `#whatsup`} />
          </svg>
        </SocialMediaLink>
      </SocialMediaLinkListItem>

      <SocialMediaLinkListItem location={location}>
        <SocialMediaLink href="#" location={location}>
          <svg>
            <use href={sprite + `#instagram`} />
          </svg>
        </SocialMediaLink>
      </SocialMediaLinkListItem>

      <SocialMediaLinkListItem location={location}>
        <SocialMediaLink href="#" location={location}>
          <svg>
            <use href={sprite + `#phone`} />
          </svg>
        </SocialMediaLink>
      </SocialMediaLinkListItem>
    </>
  );
};
