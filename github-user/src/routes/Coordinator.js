export const goToLogin = (history) => {
    history.push('/login')
}

export const goToUser = (history) => {
    history.push(`/`)
}

export const goToRepositories = (history) => {
    history.push(`/repositorios`)
}

export const gotoBack = (history) => {
    window.history.back()
}

export const goToFollowers = (history) => {
    history.push(`/seguidores`)
}

export const goToFollower = (history, username) => {
    history.push(`/seguidor/${username}`)
}

export const goToFollowing = (history) => {
    history.push(`/seguindo`)
}