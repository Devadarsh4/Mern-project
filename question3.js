function handleSignup(user) {
    const { username, email, ...metadata } = user;

    return {
        username,
        isAdmin: false,
        ...metadata
    };
}

const userData = {
    username: "devadarsh",
    email: "dev@gmail.com",
    password: "12345",
    city: "Delhi",
    zip: 110001
};

console.log(handleSignup(userData));