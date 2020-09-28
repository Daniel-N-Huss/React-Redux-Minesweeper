const { calculateDanger } = require('./calculateDanger');

describe('calculateDanger', () => {

  let seed = [
    [{ danger: 0, mine: false, adjacentTileIDs: [] }, { danger: 0, mine: false, adjacentTileIDs: [] }, { danger: 0, mine: false, adjacentTileIDs: [] }],
    [{ danger: 0, mine: false, adjacentTileIDs: [] }, { danger: 0, mine: false, adjacentTileIDs: [] }, { mine: true, adjacentTileIDs: [] }],
    [{ mine: true, adjacentTileIDs: [] }, { danger: 0, mine: false, adjacentTileIDs: [] }, { danger: 0, mine: false, adjacentTileIDs: [] }],
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
    //expect(calcuated).toEqual(expect.arrayContaining(expected));
    expect(calcuated[0][0].danger).toEqual(expected[0][0].danger);
    expect(calcuated[0][1].danger).toEqual(expected[0][1].danger);
    expect(calcuated[0][2].danger).toEqual(expected[0][2].danger);
    expect(calcuated[1][0].danger).toEqual(expected[1][0].danger);
    expect(calcuated[1][1].danger).toEqual(expected[1][1].danger);
    expect(calcuated[1][2].danger).toEqual(expected[1][2].danger);
    expect(calcuated[2][0].danger).toEqual(expected[2][0].danger);
    expect(calcuated[2][1].danger).toEqual(expected[2][1].danger);
    expect(calcuated[2][2].danger).toEqual(expected[2][2].danger);
  });

  it('should not apply a danger label to a tile with a mine', () => {
    const calculated = calculateDanger(seed);

    expect(calculated[1][2]).toMatchObject({ mine: true });
  });
});
