#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

const name = readlineSync.question('May I have your name? ');
getName(name);
