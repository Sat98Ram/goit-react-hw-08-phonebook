import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Phonebook from 'components/Phonebook/Phonebook';
import Section from 'components/Section/Section';

export const ContactsPage = () => {
  return (
    <>
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
};
