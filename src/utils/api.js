export const fetchUsers = async () => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'meer'},
        { id: 2, name: 'wow'},
        { id: 3, name: 'kiw'},
      ]);
    }, 2000);
  });
};
