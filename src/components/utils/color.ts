function color(index: number) {
  if (index === 0) {
    return "bg-blue-400 w-40 m-2 py-7 text-white sm:w-2/4 md:w-2/4 flex-grow hover:bg-blue-600";
  }
  if (index === 1) {
    return "bg-yellow-400 w-40 m-2 py-7 text-white sm:w-2/4 md:w-2/4 flex-grow hover:bg-yellow-500";
  }
  if (index === 2) {
    return "bg-pink-400 w-40 m-2 py-7 text-white sm:w-2/4 md:w-2/4 flex-grow hover:bg-pink-500";
  }
  if (index === 3) {
    return "bg-green-400 w-40 m-2 py-7 text-white sm:w-2/4 md:w-2/4 flex-grow hover:bg-green-500";
  }
}

export { color };
