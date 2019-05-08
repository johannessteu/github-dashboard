import React from 'react';
import { useCurrentUser } from '../Hooks/useCurrentUser';

const UserView: React.FC = () => {
  const { selectedOrganizations } = useCurrentUser();

  return <pre>{JSON.stringify(selectedOrganizations, null, 2)}</pre>;
};

export default UserView;
