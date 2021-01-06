// import UserProfile from './UserProfile';
// UserProfile.setName("Some Guy");

// import UserProfile from './UserProfile';
// UserProfile.getName();

var UserCredentials = (() => {
    var activeLogin = "";
    
    var getLogin = () => {
        return activeLogin;
    };

    var setLogin = (login) => {
        activeLogin = login;
    };

    return {
        getLogin: getLogin,
        setLogin: setLogin
    }
})();

export default UserCredentials;