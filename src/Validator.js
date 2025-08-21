export default class Validator {
   
    validateUsername(userName) { 
        const regex = /^[a-z][\w-]*[a-z]$/i;

        if (regex.test(userName) && !userName.match(/\d{4,}/)) {
            return true;
        } else { 
            return false;
        }
    }
}