
export const UserSummary = ({user, signOut}) => {

  return (
    <div>
      {user.username}
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}
