function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <img src={user.avatar} alt={user.name} className="user-avatar" />
      <div className="user-info">
        <div className="user-name">{user.name}</div>
        <div className="user-username">@{user.username}</div>
      </div>
    </div>
  )
}

export default UserProfile