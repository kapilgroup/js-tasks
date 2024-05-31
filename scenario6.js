
const userProfile = {};


Object.defineProperty(userProfile, 'dateOfBirth', {
    value: '1999-04-26', 
    writable: false, 
    configurable: false, 
    enumerable: true 
});


userProfile.email = 'user@example.com';


userProfile.updateEmail = function(newEmail) {
    this.email = newEmail;
};


userProfile.dateOfBirth = '2000-01-01'; 


userProfile.updateEmail('newemail@example.com');

console.log(userProfile);
