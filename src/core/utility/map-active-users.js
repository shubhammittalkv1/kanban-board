/* Below is the code for the Map Active Users function */
const mapActiveUsers = (data) => {
    if(!!data){
        const activeUsers = data.reduce((acc, user) => {
            acc[user.id] = {
                name: user.name,
                initials: user.initials,
                color: user.color
            }
            return acc;
        }, {});
    return activeUsers;
    }
    return {};
}

export default mapActiveUsers;
/* End of the above code */