import Phonebook from './Phonebook/Phonebook';
import Section from './Sectiion/Section';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <Filter /> <Contacts />
      </Section>
    </div>
  );
};
