const userDetailsConfig = {
    "api": {
    "uri": `https://twitter154.p.rapidapi.com/user/details?username=`,
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "bf798bc916msh6cb8dbaf6476bc7p127c4cjsn0f5a65c40a64",
		"X-RapidAPI-Host": "twitter154.p.rapidapi.com"
    }
    }
    }
    async function getUserDetails(username) {
    const url = `${userDetailsConfig.api.uri}${username}`;
    console.log(url);
    const options = {
    method: userDetailsConfig.api.method,
    headers: userDetailsConfig.api.headers
    };
    const response = await fetch(url, options);
    return addClientGeneratedProperties(await response.json());
    };
    function addClientGeneratedProperties(data){
    data.twitter_link = `https://twitter.com/${data.username}`;
    return data;
    }
    