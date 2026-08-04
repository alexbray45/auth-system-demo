function Profile({setUsername}) {
  return (
    <>
      <h2>Profile</h2>

      <button onClick={() => setUsername("Alex")}>Update Username</button>
    </>
  );
}

export default Profile;
