function fetchPopularRepos(language) {
    const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:
        ${language}&sort=stars&order=desc&type=Repositories`);
    return fetch(endpoint)
        .then(res => res.json())
        .then(date => {
            if(!date.items)
                throw new Error(date.message);
            return date.items
        })
}

function getErrorMsg(message, username) {
    if(message === 'Not Found')
        return `${username} doesn't exist`
    return message
}

function getProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(profile => {
            if(profile.message)
                throw new Error(getErrorMsg(profile.message, username))
            return profile
        })
}


function getRepos(username) {
    return fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => res.json())
        .then(repos => {
            if(repos.message)
             throw new Error(repos.message, username)
            return repos
        })
}

function getStarCount(repos) {
    return repos.reduce((count, { stargazers_count }) => count + stargazers_count, 0)
}

function calculateRepos(repos) {
    return repos.reduce((count, repo) => {
        if(!repo.fork)
            return count + 1
        return count
    }, 0)
}
function calculateScore(followers, repos) {
    return (followers * 3) + getStarCount(repos)
}

function getUserData(player) {
    return Promise.all([
        getProfile(player),
        getRepos(player)
    ]).then(userData => ({
        profile: userData[0],
        score: calculateScore(userData[0].followers, userData[1]),
        repos: calculateRepos(userData[1])
    })) 
}

function sortPlayers(players) {
    return players.sort((a, b) => b.score - a.score)
}

function battle(players) {
    return Promise.all([
        getUserData(players[0]),
        getUserData(players[1])
    ]).then(results => sortPlayers(results))
}
export {
    fetchPopularRepos,
    battle
}