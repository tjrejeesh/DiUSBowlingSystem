import { TOTAL_NO_FRAMES, TOTAL_NO_PINS } from "./util/constants";

export class Bowling {

    private rolls: Array<number> = [];

    public addRoll(pins: number): void{
        this.rolls.push(pins);
    }

    public getScore(): number{
        let score: number = 0;

        for (
            let frameIndex: number = 0, rollIndex: number = 0;
            frameIndex < TOTAL_NO_FRAMES && rollIndex < this.rolls.length;
            frameIndex++
        ){
            score += this.rolls[rollIndex];
            score += this.rolls[rollIndex + 1];

            if(this.isSpare(rollIndex) || this.isStrike(rollIndex)){
                score += this.rolls[rollIndex + 2];
            }

            this.isStrike(rollIndex) ? rollIndex++ : (rollIndex += 2);
        }

        return score
    }

    private isSpare(rollIndex: number): boolean {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === TOTAL_NO_PINS
    }

    private isStrike(rollIndex: number): boolean {
        return this.rolls[rollIndex] === TOTAL_NO_PINS
    }
}
