function solve(commandString) {
    let commands = commandString[0].split("||");
    let fuel = Number(commandString[1]);
    let ammo = Number(commandString[2]);
    commands.forEach((command) => {
        const commandName = command.split(" ")[0];
        const commandArgs = Number(command.split(" ")[1]);

        if (commandName.toLowerCase() == "travel") {
            fuel -= commandArgs;

            if (fuel > 0) {
                console.log(
                    `The spaceship travelled ${commandArgs} light-years.`
                );
            } else {
                console.log("Mission failed.");
                return;
            }
        } else if (commandName.toLowerCase() == "enemy") {
            if (ammo >= commandArgs) {
                ammo -= commandArgs;
                console.log(`An enemy with ${commandArgs} armour is defeated.`);
            } else {
                fuel -= commandArgs * 2;

                if (fuel > 0) {
                    console.log(
                        `An enemy with ${commandArgs} armour is outmaneuvered.`
                    );
                } else {
                    console.log("Mission failed.");
                    return;
                }
            }
        } else if (commandName.toLowerCase() == "repair") {
            fuel += commandArgs;
            ammo += commandArgs * 2;
            console.log(`Ammunitions added: ${commandArgs * 2}.`);
            console.log(`Fuel added: ${commandArgs}.`);
        } else {
            console.log(
                `You have reached ${commandName}, all passengers are safe.`
            );
        }
    });
}

solve([
    "Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan",
    "60",
    "100",
]);
