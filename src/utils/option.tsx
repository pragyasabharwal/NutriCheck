export function option(index: number) {
    if (index === 0) {
      return (
        <span className="text-blue-400 bg-white px-2.5 py-1 m-2 rounded-3xl">
          A
        </span>
      );
    }
    if (index === 1) {
      return (
        <span className="text-yellow-400 bg-white px-2.5 py-1 m-2 rounded-3xl">
          B
        </span>
      );
    }
    if (index === 2) {
      return (
        <span className="text-pink-400 bg-white px-2.5 py-1 m-2 rounded-3xl">
          C
        </span>
      );
    }
    if (index === 3) {
      return (
        <span className="text-green-400 bg-white px-2.5 py-1 m-2 rounded-3xl">
          D
        </span>
      );
    }
  }


  