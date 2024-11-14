import { useTheme, ThemeProvider } from "./context";

function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const context = useTheme();
  console.log(context);
  return (
    <div
      style={{
        background:
          context.theme === "dark" || context.theme === "system"
            ? "grey"
            : "beige"
      }}
    >
      <h2>React & Typescript</h2>
      <button
        onClick={() => {
          if (context.theme === "dark" || context.theme === "system") {
            context.updateTheme("light");
            return;
          }
          context.updateTheme("dark");
        }}
        className="btn btn-center"
      >
        toggle theme
      </button>
    </div>
  );
}
export default ParentComponent;
