import { useState, useEffect } from "react";
import "./App.css";
import { Space, Card } from "antd";
import Layout from "./components/Layout";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  return (
    <>
      <Layout toggleTheme={toggleTheme} theme={theme}>
        <h1 className="text-3xl font-bold text-gray-600">Page Content</h1>
        <Space
          direction="vertical"
          size="middle"
          style={{ width: "100%", justifyContent: "center" }}
        >
          {Array.from({ length: 8 }, (_, index) => (
            <Card
              key={index}
              title={
                <span className="text-gray-800 dark:text-white">
                  Title {index + 1}
                </span>
              }
              style={{ minHeight: 200 }}
              className=" dark:bg-gray-800 dark:text-white"
            >
              Lorem Ipsum
            </Card>
          ))}
        </Space>
      </Layout>
    </>
  );
}

export default App;
