import React from 'react';
import Profile from './profile/Profile';

function App() {
  return (
    <div>
      <Profile fullName="Hassan RACHDI" bio="Je suis un développeur React." profession="développeur React" handleName={(name) => alert(`Bonjour, mon nom est ${name}`)}>
          https://gomycodelearndev.blob.core.windows.net/profiles/91bc3338-41c9-4756-bc77-b959e36dca84-133177340137895919.jpg
      </Profile>
    </div>
  );
}

export default App;
