const { calculateDanger } = require('./calculateDanger');

describe('calculateDanger', () => {


  beforeEach(() => {
    let seed = [
      [{}, {}, {}],
      [{}, {}, { mine: true }],
      [{ mine: true }, {}, {}],
    ];

    const expected = [
      [{ danger: 0 }, { danger: 0 }, { danger: 1 }],
      [{ danger: 1 }, { danger: 2 }, { mine: true}],
      [{ mine: true}, { danger: 2 }, { danger: 1 }],
    ];
  })

  it('should add a danger key to each tile indicating how many mines are adjacent to it', () => {
    let seed = [
      [{}, {}, {}],
      [{}, {}, { mine: true }],
      [{ mine: true }, {}, {}],
    ];

    const expected = [
      [{ danger: 0 }, { danger: 0 }, { danger: 1 }],
      [{ danger: 1 }, { danger: 2 }, { mine: true}],
      [{ mine: true}, { danger: 2 }, { danger: 1 }],
    ];

    const calcuated = calculateDanger(seed);

    expect(calcuated).toEqual(expected);
  });

  it('should not apply a danger label to a tile with a mine', () => {

  })
});
