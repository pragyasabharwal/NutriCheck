import { useTheme } from "../context/ThemeContext";

export const Nav = () => {
  const { setTheme, lightTheme, darkTheme } = useTheme();

  const themeStored = localStorage.getItem("theme");

  function themeFunc() {
    if (themeStored === "dark") {
      localStorage?.setItem("theme", "light");
      setTheme(lightTheme);
    } else {
      localStorage?.setItem("theme", "dark");
      setTheme(darkTheme);
    }
  }

  return (
    <div className="flex justify-between shadow-xl mb-10 bg-green-400">
      <button
        className="text-white cursor-pointer py-6 px-6 "
        onClick={() => themeFunc()}
      >
        {themeStored === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>
      <button className="py-6 px-6 cursor-pointer flex bg-green-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <span>
          Login
        </span>
      </button>
    </div>
  );
};
