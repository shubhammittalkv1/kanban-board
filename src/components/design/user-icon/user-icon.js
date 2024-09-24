import "./user-icon.css";
function UserIcon({ keyName, activeUsersObj }) {
  return (
    <>{activeUsersObj[keyName] && <div className="user-icon-circle" style={{ backgroundColor: activeUsersObj[keyName].color }}>
      <p className="user-icon-circle-inner">{activeUsersObj[keyName].initials}</p>
    </div>}</>
  );
}

export default UserIcon;
