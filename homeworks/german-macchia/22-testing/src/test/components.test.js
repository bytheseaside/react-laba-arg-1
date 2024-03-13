/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { Button } from "../components/Button";
import { Display } from "../components/Display";

describe("Test in <Button />", () => {
  const props = {
    boxStyle: "button border-box corner--left",
    innerHtml: "AC",
    value: 0,
  };

  const button = (
    <Button
      innerHtml={props.innerHtml}
      boxStyle={props.boxStyle}
      value={props.value}
    />
  );

  test("should be a match between render and snapshot", () => {
    render(button);
    expect(screen.container).toMatchSnapshot();
  });

  test("should match text in innerText data value", () => {
    render(button);
    expect(screen.getByTestId("innerText").innerHTML).toBe(props.innerHtml);
  });
});

describe("Test in <Display />", () => {
  const display = <Display />;

  test("should be a match between render and snapshot", () => {
    render(display);
    expect(screen.container).toMatchSnapshot();
  });

  test("should contain a calculation container and display", () => {
    render(display);
    expect(screen.getByTestId("calculation-container")).toBeTruthy();
    expect(screen.getByTestId("calculation-display")).toBeTruthy();
  });

  test("should contain a resolution container and display", () => {
    render(display);
    expect(screen.getByTestId("resolution-container")).toBeTruthy();
    expect(screen.getByTestId("resolution-display")).toBeTruthy();
  });
});
