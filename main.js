import inquirer from "inquirer";
import chalk from "chalk";
//classes 
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDcrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDcrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
//player name & opponent select
let player = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter your name"
    }
]);
console.log(player.name);
let opponent = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: "Select your opponent",
        choices: ["Skeleton", "Assaisin", "Zombie"]
    }
]);
console.log(opponent.select);
//gather data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    //skeleton
    if (opponent.select == "Assaisin") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your opponent",
            choices: ["Attack", "Drink Portion", "Run For your LIfe.."]
        });
        if (ask.opt == "Attack") {
            let number = Math.floor(Math.random() * 2);
            if (number > 0) {
                p1.fuelDcrease();
                console.log(chalk.bold.red(`${p1.name}  fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name}  fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You loose ,  Better luck for next time"));
                    process.exit();
                }
            }
            if (number <= 0) {
                o1.fuelDcrease();
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.red(`${p1.name}  fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green.italic(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For your Life..") {
            console.log(chalk.red.bold.italic("You loose ,  Better luck for next time"));
            process.exit();
        }
    }
    //assasin
    if (opponent.select == "Zombie") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your opponent",
            choices: ["Attack", "Drink Portion", "Run For your LIfe.."]
        });
        if (ask.opt == "Attack") {
            let number = Math.floor(Math.random() * 2);
            if (number > 0) {
                p1.fuelDcrease();
                console.log(chalk.bold.red(`${p1.name}  fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name}  fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You loose ,  Better luck for next time"));
                    process.exit();
                }
            }
            if (number <= 0) {
                o1.fuelDcrease();
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.red(`${p1.name}  fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green.italic(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For your Life..") {
            console.log(chalk.red.bold.italic("You loose ,  Better luck for next time"));
            process.exit();
        }
    }
    //zombie
    if (opponent.select == "Skeleton") {
        // console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select your opponent",
            choices: ["Attack", "Drink Portion", "Run For your LIfe.."]
        });
        if (ask.opt == "Attack") {
            let number = Math.floor(Math.random() * 2);
            if (number > 0) {
                p1.fuelDcrease();
                console.log(chalk.bold.red(`${p1.name}  fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name}  fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You loose ,  Better luck for next time"));
                    process.exit();
                }
            }
            if (number <= 0) {
                o1.fuelDcrease();
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.red(`${p1.name}  fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green.italic(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Run For your Life..") {
            console.log(chalk.red.bold.italic("You loose ,  Better luck for next time"));
            process.exit();
        }
    }
} while (true);
