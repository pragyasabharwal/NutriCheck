function color(index: number) {
  if (index === 0) {
    return "bg-blue-400 w-40 m-2 py-12 text-white sm:w-2/4 md:w-2/4 lg:w-7/12 flex-grow";
  }
  if (index === 1) {
    return "bg-yellow-400 w-40 m-2 py-12 text-white sm:w-2/4 md:w-2/4 lg:w-7/12 flex-grow ";
  }
  if (index === 2) {
    return "bg-pink-400 w-40 m-2 py-12 text-white sm:w-2/4 md:w-2/4 lg:w-7/12 flex-grow";
  }
  if (index === 3) {
    return "bg-green-400 w-40 m-2 py-12 text-white sm:w-2/4 md:w-2/4 lg:w-7/12 flex-grow";
  }
}

export { color };