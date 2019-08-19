/**
 *
 * @param {Array} list list of all the commands
 * @param {String} command current command
 */
const dym = (list, command) => {
    const letters = command.split("");

    const output = list.map(c => {
        const o = letters.reduce((acc, curr) => {
            if (c.includes(curr)) {
                acc += 1;
            }
            return acc;
        }, 0);
        return { command: c, confidence: o };
    }).sort((a,b) => a.confidence < b.confidence)[0].command;

    return output;
};

module.exports = dym;
