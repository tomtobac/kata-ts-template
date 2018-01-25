export const calculate = (rolls: string): number => {
  
  const frames = parse(rolls);

  const total: number[] = [];
  let acc = 0;
  for ( let i =0; i < frames.length; i++ ) {
    // const frame = frames[i];

    // if ( frame.type === 'STRIKE' ) {
    //   let bonus = 10;
    //   for (let x = i; x < frames.length; x++) {
    //     const sub = frames[x];
    //     if (sub) {

    //     }
    //   }
    // }

  }

  return total.reduce( (p, c) => p + c, 0);
};

export const parse = (rolls: string): any => {
  const toArray = rolls.split("");

  let acc: number | null = null;
  return toArray.reduce((prev, curr) => {
    const tmp = acc;
    if (curr === "x") {
      return [
        ...prev,
        {
          type: "STRIKE"
        }
      ];
    }

    if (curr === "/") {
      acc = null;
      return [
        ...prev,
        {
          type: "SPARE",
          play: [tmp, tmp ? 10 - tmp : 0]
        }
      ];
    }

    if (acc) {
      acc = null;
      return [
        ...prev,
        {
          type: "NORMAL",
          play: [tmp, parseInt(curr)]
        }
      ];
    }

    acc = parseInt(curr);
    return prev;
  }, []);
};
