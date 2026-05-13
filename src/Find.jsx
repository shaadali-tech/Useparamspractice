const Find = () => {
  const users = [
    {
      id: 1,
      name: "Ali",
    },
    {
      id: 2,
      name: "Sara",
    },
    {
      id: 3,
      name: "Ahmed",
    },
  ];

  const user = users.find((user) => user.id === 2);
  console.log(user);
  return;
  <></>;
};

export default Find;
