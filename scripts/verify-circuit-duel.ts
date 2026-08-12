import { terminalValue, WIN, DEADLOCK_AT, type Terminal } from '../src/games/transfer/model.ts';

function eq(a: unknown, b: unknown, msg: string): void {
  if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error(`FAIL ${msg}: got ${JSON.stringify(a)} want ${JSON.stringify(b)}`);
}
const T = (kinds: string[]): Terminal => ({ id: 0, outcomes: kinds.map((k) => ({ cell: 0, delay: 1, kind: k as never })) });

eq(WIN, 7, 'WIN');
eq(DEADLOCK_AT, 6, 'DEADLOCK_AT');
eq(terminalValue(T(['CLAIM'])), 1, 'claim=1');
eq(terminalValue(T(['CLAIM', 'CLAIM'])), 2, 'split=2');
eq(terminalValue(T(['LOCK'])), 2, 'lock=2');
eq(terminalValue(T(['CONVERT'])), 0.5, 'convert=0.5');
eq(terminalValue(T(['FLIP'])), -1, 'flip=-1');
eq(terminalValue(T(['DEAD'])), 0, 'dead=0');
eq(terminalValue(T(['SHORT'])), 0, 'short=0');
console.log('task1 OK');
