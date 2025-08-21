
import Validator from "../Validator";

describe("Testing if validateUsername returns correct result", () => { 
    const validator = new Validator();

    test("testing an acceptable userName", () => {
        expect(validator.validateUsername("crazy_555-afanasy")).toBeTruthy();
    });

    test("only Latin letters, dashes -, underscores _ and numbers (0-9) are allowed", () => {
        expect(validator.validateUsername("crazy*_afanasy")).toBeFalsy();
    });

    test(
        "userName can't contain more than 3 letters in a row", () => { 
            expect(validator.validateUsername("afana5555sy")).toBeFalsy();
        }
    );

    test("userName can't start or end with digits", () => {
        expect(validator.validateUsername("555afanasy")).toBeFalsy();
        expect(validator.validateUsername("afanasy555")).toBeFalsy();
    
    });

    test("userName can't start or end with a dash -", () => {
        expect(validator.validateUsername("-afanasy")).toBeFalsy();
        expect(validator.validateUsername("afanasy-")).toBeFalsy();
    });

    test("userName can't start or end with an underscore _", () => {
        expect(validator.validateUsername("_afanasy")).toBeFalsy();
        expect(validator.validateUsername("afanasy_")).toBeFalsy();
    });

});