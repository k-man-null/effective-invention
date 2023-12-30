export function getUserFromStorage() {
    const userFromLocalStorage = localStorage.getItem('user');
    if (userFromLocalStorage) {
        return JSON.parse(userFromLocalStorage);
    }

    return null;
}