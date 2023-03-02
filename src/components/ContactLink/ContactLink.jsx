import {
  ContactDescrText,
  ContactLink,
  ContactsMainText,
} from './ContactLink.styled';

export const ContactLinkEl = ({ text, descrText, href }) => {
  return (
    <ContactLink target="_blank" href={href}>
      <ContactsMainText>{text}</ContactsMainText>
      <ContactDescrText>{descrText}</ContactDescrText>
    </ContactLink>
  );
};
