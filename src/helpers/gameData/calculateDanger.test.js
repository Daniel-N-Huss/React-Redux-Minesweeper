const { calculateDanger } = require('./calculateDanger');

describe('calculateDanger', () => {

  let seed = [
    [{ danger: 0, mine: false }, { danger: 0, mine: false }, { danger: 0, mine: false }],
    [{ danger: 0, mine: false }, { danger: 0, mine: false }, { mine: true }],
    [{ mine: true }, { danger: 0, mine: false }, { danger: 0, mine: false }],
  ];

  const expected = [
    [
      { mine: false, danger: 0 },
      { mine: false, danger: 1 },
      { mine: false, danger: 1 },
    ],
    [{ mine: false, danger: 1 }, { mine: false, danger: 2 }, { mine: true }],
    [{ mine: true }, { mine: false, danger: 2 }, { mine: false, danger: 1 }],
  ];

  it('should add a danger key to each tile indicating how many mines are adjacent to it', () => {
    const calcuated = calculateDanger(seed);
    expect(calcuated).toEqual(expected);
  });

  it('should not apply a danger label to a tile with a mine', () => {
    const calculated = calculateDanger(seed);

    expect(calculated[1][2]).toEqual({ mine: true });
  });
});
