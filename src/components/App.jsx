import Profile from './Profile/Profile';
import user from '../db/user.json';
import Statistics from './Statistics/Statistics';
import data from '../db/data.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
    </>
  );
};
