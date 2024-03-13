import useUsers from './hooks/useUsers';

function App() {
  const { users, isRefreshing, fetchSingleUser, refreshUser, refreshAllUsers } = useUsers();

  const isButtonDisabled = users.length === 0;

  return (
    <div className="container">
      <main className="main">
        {/* Iterates over all the users available */}
        {users.map((user, index) => {
          return (
            <div className="image" key={user.id} onClick={() => refreshUser(index)}>
              {/* Overylay */}
              <div className="image__overlay">
                <img src="/001-refresh.svg" className={`${isRefreshing && 'image__animation'}`} alt="" />
              </div>
              <img src={user.url} width={240} height={240} />
            </div>
          );
        })}

        {/* Add users */}
        <div className="empty-user" onClick={fetchSingleUser}>
          <div className="plus-sign-hor"></div>
          <div className="plus-sign-ver"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <button disabled={isButtonDisabled} className="refresh-btn" onClick={refreshAllUsers}>
          Refresh All
        </button>
      </footer>
    </div>
  );
}

export default App;
