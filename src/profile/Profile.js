import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div style={{ textAlign: 'center', border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>{fullName}</h2>
      <img src={children} alt="profile" style={{ width: '200px', borderRadius: '50%' }} />
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={() => handleName(fullName)}>Click me!</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'Hassan RACHDI',
  bio: 'Je suis un développeur React.',
  profession: 'développeur React',
  children: 'https://gomycodelearndev.blob.core.windows.net/profiles/91bc3338-41c9-4756-bc77-b959e36dca84-133177340137895919.jpg',
  handleName: (name) => alert(`Bonjour, mon nom est ${name}`),
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;
