import React, { useState } from 'react';
import { Card, EditCard } from './components';

const UserCard = ({ deleteItem, updateItem, ...rest }) => {
  const [store, setStore] = useState({ ...rest });
  const { edit } = store;

  const set = (toSet = {}) => setStore({ ...store, ...toSet });

  return (
    <>
      {!edit
        ? <Card {...store} setStore={set} deleteItem={deleteItem} />
        : <EditCard {...store} setStore={set} updateItem={updateItem} />}
    </>
  );
};

export default UserCard;
