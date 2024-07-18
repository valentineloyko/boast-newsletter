import React, { useState, useEffect } from "react";
import { Card } from "antd";
import FloatingSubscribeCard from "./FloatingSubscribeCard";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface LayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
  theme: string;
}

const Layout: React.FC<LayoutProps> = ({ children, toggleTheme, theme }) => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isFloatingSubscribeCardVisible, setIsFloatingSubscribeCardVisible] =
    useState(false);

  const [newsletterSubscriptionStatus, setNewsletterSubscriptionStatus] =
    useLocalStorage("newsletterSubscriptionStatus", {
      subscribed: false,
      rejected: "",
    });

  // we don't want to show the floating card if the user has already subscribed
  // we also don't want to bother the users who closed the card and rejected the subscription, therefore we show the card again after some time (for demo purposes the interval is set to 5 seconds)

  useEffect(() => {
    const currentTimestamp = new Date();
    const rejectedTimestamp = new Date(newsletterSubscriptionStatus.rejected);
    const isRejectedValid =
      newsletterSubscriptionStatus.rejected === "" ||
      (currentTimestamp.getTime() - rejectedTimestamp.getTime()) / 1000 > 5;

    if (!newsletterSubscriptionStatus.subscribed && isRejectedValid) {
      setIsFloatingSubscribeCardVisible(true);
    }
  }, [newsletterSubscriptionStatus]);

  const handleClose = () => {
    setIsFloatingSubscribeCardVisible(false);
    if (!newsletterSubscriptionStatus.subscribed) {
      setNewsletterSubscriptionStatus({
        subscribed: false,
        rejected: new Date().toISOString(),
      });
    }
  };

  // we don't want to show the floating card when the user scrolls to the footer, to avoid duplicated subscribe forms
  useEffect(() => {
    const onScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      const scrollPosition = window.scrollY + window.innerHeight;
      const footerTopPosition = footer.offsetTop;

      setIsFooterVisible(scrollPosition >= footerTopPosition);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="bg-[#00c394] text-white p-4 text-lg w-full flex items-center justify-between fixed top-0 left-0 right-0 z-10">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          Header Content
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 text-black dark:text-white bg-white dark:bg-black rounded flex items-center justify-center focus:outline-none"
        >
          {theme === "light" ? "🌞" : "🌜"} Toggle Theme
        </button>
      </header>

      <main className="flex-grow p-4 bg-white dark:bg-black mt-16">
        {children}
      </main>

      <footer className="bg-gray-700 text-white p-4 text-center w-full h-64">
        <Card title="Existing subscribe form" className="w-full max-w-xs ">
          The floating newsletter card should disappear once the user scrolls to
          the footer, to avoid duplicated forms.
        </Card>
        Footer Content
      </footer>

      <FloatingSubscribeCard
        isVisible={!isFooterVisible && isFloatingSubscribeCardVisible}
        onClose={handleClose}
        setNewsletterSubscriptionStatus={setNewsletterSubscriptionStatus}
      />
    </div>
  );
};

export default Layout;
