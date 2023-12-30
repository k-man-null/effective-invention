export function getUserFromStorage() {
    const userFromLocalStorage = localStorage.getItem('user');
    if (userFromLocalStorage) {
        return JSON.parse(userFromLocalStorage);
    }

    return null;
}

export function getSessionCookie() {
    const cookies = document.cookie.split('; ');
    const sessionCookie = cookies.find(cookie => cookie.startsWith('session='));
    if (sessionCookie) {
        console.log(sessionCookie)
        return true
    } 
    
    return false
}