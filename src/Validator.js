export default class Validator {

    validateUsername(userName) { 
        const regex = /^[a-z][\w-]*[a-z]$/i;
        return regex.test(userName) && !userName.match(/\d{4,}/);
    }
}