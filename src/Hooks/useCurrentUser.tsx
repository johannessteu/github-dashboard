import React, { useContext, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';

import { CURRENT_USER } from '../Queries/User';
import { currentUser } from '../Queries/__generated__/currentUser';

interface OrganizationInterface {
  name: string;
  avatarUrl: string;
}

interface CurrentUserInterface {
  name: string | null;
  avatarUrl: string | null;
  login: string | null;
  organizations: OrganizationInterface[];
}

interface CurrentUserContextInterface {
  user: CurrentUserInterface;
  selectedOrganizations: string[];
  setSelectedOrgs(orgs: string[]): void;
}

const CurrentUserContext = React.createContext<CurrentUserContextInterface | undefined>(undefined);

interface CurrentUserProviderPros {
  value?: CurrentUserContextInterface;
  children: React.ReactNode;
}

const CurrentUserProvider = (props: CurrentUserProviderPros) => {
  const { data } = useQuery<currentUser>(CURRENT_USER, { suspend: true });
  const [selectedOrganizations, setSelectedOrgs] = useState<string[]>([]);

  if (!data) {
    return <CurrentUserProvider value={undefined} {...props} />;
  }

  const {
    viewer: { avatarUrl, name, login, organizations }
  } = data;

  let orgs: OrganizationInterface[] = [];
  if (organizations.totalCount > 0 && organizations.nodes) {
    // todo handle if there are more orgs then they are inital fetched
    let allOrgs: string[] = [];

    organizations.nodes.forEach(org => {
      if (org) {
        orgs.push({
          name: org.login,
          avatarUrl: org.avatarUrl
        });

        allOrgs.push(org.login);
      }
    });
  }

  return <CurrentUserContext.Provider value={{ user: { avatarUrl, name, login, organizations: orgs }, selectedOrganizations, setSelectedOrgs }} {...props} />;
};

const useCurrentUser = () => {
  const context = useContext(CurrentUserContext);

  if (!context) {
    throw new Error('useCurrentUser must be used within a CurrentUserProvider');
  }

  const { setSelectedOrgs, selectedOrganizations } = context;

  const selectOrg = (name: string) => {
    setSelectedOrgs([...selectedOrganizations, name]);
  };

  const deSelectOrg = (name: string) => {
    setSelectedOrgs(selectedOrganizations.filter(org => org !== name));
  };

  return { user: context.user, selectedOrganizations, setInitialOrganizations: setSelectedOrgs, selectOrganization: selectOrg, deselectOrganization: deSelectOrg };
};

export { useCurrentUser, CurrentUserProvider };
