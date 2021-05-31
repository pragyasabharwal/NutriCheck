export const Footer = () => {
    const themeStored = localStorage.getItem("theme");
  
    return (
      <footer className="text-white flex mr-auto ml-auto w-80 m-20 mb-20 footer mt-20">
        <div
          className={
            themeStored === "dark" ? "text-white px-2" : "text-black px-2"
          }
        >
          Made with
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mb-8"
          viewBox="0 0 20 20"
          fill="red"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>{" "}
        <div
          className={
            themeStored === "dark" ? "text-white px-2" : "text-black px-2"
          }
        >
          by Pragya Sabharwal
        </div>
      </footer>
    );
  };
  