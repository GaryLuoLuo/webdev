
export const UserSummary = ({user, onSignout}) => {


  return (
    <div>
      {user.username}
      <button onClick={onSignout}>Sign Out</button>
    </div>
  )
}
