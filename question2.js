const user = {
    age: 25,

    name: function() {
        console.log("Age of user is:", this.age);
    }
};


user.name();