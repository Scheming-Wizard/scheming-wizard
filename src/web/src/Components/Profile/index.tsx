import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    isAuthenticated && (
      <div className="flec items-center justify-center">
        <img src={user?.picture} alt={user?.name} 
         className="w-10 h10 rounded full"/>
      </div>
    )
  );
};

export default Profile;