import React from "react";
import Display from "./Display"
import { render } from "react-testing-library";

test('unlocked and open', () => {
    const { getByText } = render(<Display locked={false} closed={false}/>);
    const unlocked = getByText(/unlocked/i);
    const open = getByText(/open/i);
    expect(unlocked.className).toMatch('green-led');
    expect(open.className).toMatch('green-led');
  });

test('unlocked and closed', () => {
    const { getByText } = render(<Display locked={false} closed={true}/>);
    const unlocked = getByText(/unlocked/i);
    const closed = getByText(/closed/i);
    expect(unlocked.className).toMatch('green-led');
    expect(closed.className).toMatch('red-led');
  });

test('locked and closed', () => {
    const { getByText } = render(<Display locked={true} closed={true}/>);
    // const locked = getByText(/locked/i);
    const locked = getByText("Locked");
    const closed = getByText(/closed/i);
    expect(locked.className).toMatch('red-led');
    expect(closed.className).toMatch('red-led');
  });
