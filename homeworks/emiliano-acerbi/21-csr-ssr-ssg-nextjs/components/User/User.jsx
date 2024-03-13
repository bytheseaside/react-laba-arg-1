import Image from 'next/image';

function User({ user, index, isRefreshing, refreshUser }) {
  return (
    <div className="image" key={user.id} onClick={() => refreshUser(index)}>
      {/* Overylay */}
      <div className="image__overlay">
        <Image
          src="/001-refresh.svg"
          width={100}
          height={100}
          className={`${isRefreshing && 'image__animation'}`}
          alt=""
        />
      </div>
      <Image src={user.url} width={240} height={240} alt={user.fist_name} />
    </div>
  );
}

export default User;
