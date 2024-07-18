import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FloatingSubscribeCard from "../FloatingSubscribeCard";

beforeAll(() => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
});

describe("FloatingSubscribeCard", () => {
  test("is not visible when the isVisible prop is false", () => {
    render(
      <FloatingSubscribeCard
        isVisible={false}
        onClose={() => {}}
        setNewsletterSubscriptionStatus={() => {}}
      />
    );

    const card = screen.queryByTestId("floating-subscribe-card");
    expect(card).not.toBeInTheDocument();
  });
  test("is visible when the isVisible prop is true", () => {
    render(
      <FloatingSubscribeCard
        isVisible={true}
        onClose={() => {}}
        setNewsletterSubscriptionStatus={() => {}}
      />
    );

    const card = screen.getByTestId("floating-subscribe-card");
    expect(card).toBeInTheDocument();
  });
});
