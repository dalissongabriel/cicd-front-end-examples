const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Foo",
    },
    {
      id: 2,
      name: "Bar",
    },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
