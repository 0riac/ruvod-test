import React from 'react';
import Grid from '@material-ui/core/Grid';
import UserCard from '../UserCard';
import UserCardSkeleton from '../UserCardSkeleton';
import Typography from '@material-ui/core/Typography';

const UserGroupCard = ({ loading, users = [], deleteItem, updateItem }) => {
  return (
    <>
      {!loading ? (
        <>
          {users.length ? (
            <Grid container spacing={3}>
              {users.map((user) => (
                <Grid item xs={12} key={user.id}>
                  <UserCard
                    {...user}
                    deleteItem={() => deleteItem(user.id)}
                    updateItem={(toSet) => updateItem(user.id, toSet)}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography>
              Users list is empty
            </Typography>
          )}
        </>
      )
        : (
          <Grid container spacing={3}>
            {Array(5).fill(null).map((a, i) => (
              <Grid item xs={12} key={i}>
                <UserCardSkeleton />
              </Grid>
            ))}
          </Grid>
        )}
    </>
  );
};

export default UserGroupCard;
