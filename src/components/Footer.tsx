export const Footer = () => {
  const themeStored = localStorage.getItem("theme");

  return (
    <footer className="text-black flex mr-auto ml-auto place-content-center items-center w-100 m-20 mb-20 footer mt-20 bg-green-400 p-2">
      <div
        className="text-black px-2"
      >
        Made with
      </div>
      <span className={themeStored==="dark" ? "text-white" : "text-black"}>&lt;/&gt;</span>
      <div
        className="text-black px-2"
      >
        by Pragya Sabharwal
      </div>
    </footer>
  );
};
