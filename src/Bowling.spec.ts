import {Bowling} from "./Bowling";

describe("DiUS Bowling System", () => {

    let bowling: Bowling;

    beforeEach(() => {
        bowling = new Bowling()
    });

    let addRolls = (pins: number, times: number) => {
        for(let i = 0; i < times; i++){
            bowling.addRoll(pins);
        }
    };

    it("All Gutters - Score should be 0", () => {
        addRolls(0, 20);
        expect(bowling.getScore()).toBe(0);
    });

    it("Score should be 8 if first two rolls are 4 each", () => {
        addRolls(2, 4);
        expect(bowling.getScore()).toBe(8);
    });

    it("Score should be 20 if rolls are 4,6 | 5, 0", () => {
        addRolls(4, 1);
        addRolls(6, 1);
        addRolls(5, 1);
        addRolls(0, 1);
        expect(bowling.getScore()).toBe(20);
    });

    it("Score should be 28 if rolls are 10 | 5, 4", () => {
        addRolls(10, 1);
        addRolls(5, 1);
        addRolls(4, 1);
        expect(bowling.getScore()).toBe(28);
    });

    it("Score should be 10 when one spare and all gutters", () => {
        addRolls(5, 2);
        addRolls(0, 18);
        expect(bowling.getScore()).toBe(10);
    });

    it("Perfect game: All strike for every roll - Score should be 300", () => {
        addRolls(10, 12);
        addRolls(0, 18);
        expect(bowling.getScore()).toBe(300);
    });

});
