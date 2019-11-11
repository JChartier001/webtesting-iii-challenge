import React from "react";
import Display from "./Display"
import { render } from "react-testing-library";

test('unlocked and open', () => {
    const { getByText } = render(<Display locked={false} closed={false}/>);
    const unlocked = getByText(/unlocked/i);
    const open = getByText(/open/i);
    expect(unlocked.className).toMatch(/\bgreen-led\b/);
    expect(open.className).toMatch(/\bgreen-led\b/);
  });

test('unlocked and closed', () => {
    const { getByText } = render(<Display locked={false} closed={true}/>);
    const unlocked = getByText(/unlocked/i);
    const closed = getByText(/closed/i);
    expect(unlocked.className).toMatch(/\bgreen-led\b/);
    expect(closed.className).toMatch(/\bred-led\b/);
  });

test('locked and closed', () => {
    const { getByText } = render(<Display locked={true} closed={true}/>);
    const locked = getByText(/locked/i);
    const closed = getByText(/closed/i);
    expect(locked.className).toMatch(/\bred-led\b/);
    expect(closed.className).toMatch(/\bred-led\b/);
  });
