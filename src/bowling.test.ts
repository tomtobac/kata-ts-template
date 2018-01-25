import { calculate, parse } from "./bowling";

// describe('Bowling Kata', () => {

//   it('12 rolls: 12 strikes should a perfect score, 300', () => {
//     expect(calculate('XXXXXXXXXXXX')).toBe(300);
//   });

//   it('20 rolls: 10 pairs of 9 and miss should score of 90', () => {
//     expect('9999999990').toBe(90);
//   })

//   it('21 rolls: 10 pairs of 5 and spare, with a final 5 should be 150', () => {
//     expect('5/5/5/5/5/5/5/5/5/5/5').toBe(150);
//   })

// });

describe("create plays", () => {
  it("xxx should return 3 strikes", () => {
    expect(parse("xxx")).toEqual([
      { type: "STRIKE" },
      { type: "STRIKE" },
      { type: "STRIKE" }
    ]);
  });

  it("1234 should return 2 normals", () => {
    expect(parse("1234")).toEqual([
      {
        type: "NORMAL",
        play: [1, 2]
      },
      {
        type: "NORMAL",
        play: [3, 4]
      }
    ]);
  });

  it("5/13 should return 1 spare, 1 normal", () => {
    expect(parse("5/13")).toEqual([
      {
        type: "SPARE",
        play: [5, 5]
      },
      {
        type: "NORMAL",
        play: [1, 3]
      }
    ]);
  });

  it('x8/53 should return 1 strike, 1 spare, 1 normal', () => {
    expect(parse('x8/53')).toEqual(
      [
        {
          type: 'STRIKE'
        },
        {
          type: 'SPARE',
          play: [8, 2]
        },
        {
          type: 'NORMAL',
          play: [5, 3]
        }
      ]
    )
  })

});
