function verify(userRole, isAuthenticated) {
    if (!isAuthenticated) {
        console.log("Please Log In");
    } else if (isAuthenticated && userRole === "admin") {
        console.log("Welcome to the Dashboard");
    } else {
        console.log("Access Denied.");
    }
}

let isAuthenticated = 1;
let userAge = 25;
let userRole = 'admin';
verify(userRole, isAuthenticated);