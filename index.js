#!/usr/bin/env node

/**
 * pkg-test
 * testing pkg support
 *
 * @author Gregory Daynes <https://github.com/gregdaynes>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const { prompt } = require('enquirer');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	const response = await prompt({
		type: 'input',
		name: 'username',
		message: 'what is your username?'
	});

	console.log(response);
	debug && log(flags);
})();
