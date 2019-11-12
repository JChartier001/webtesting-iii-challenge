import React from "react"
import Controls from "./Controls"
import { render, fireEvent } from "@testing-library/react";

test('Controls renders correctly', () => {
    render(<Controls />);  
})

test('closed is called', () => {
  const toggleClosed = jest.fn();
  const { getByText } = render(
      <Controls toggleClosed={toggleClosed} closed={false} />
  )
fireEvent.click(getByText(/Close gate/i));

  expect(toggleClosed).toHaveBeenCalled();
  expect(toggleClosed).toHaveBeenCalledTimes(1);
});

test('unlocked and open', () => {
    const closeSpy = jest.fn();
    const { getByText } = render(<Controls locked={false} closed={false} toggleClosed={closeSpy}/>);
    const lockBtn = getByText(/lock gate/i);
    const closeBtn = getByText(/close gate/i);
    expect(lockBtn.disabled).toBe(true);
    expect(closeBtn.disabled).toBe(false);

    fireEvent.click(closeBtn);    
    expect(closeSpy).toBeCalled();
  });

  test('unlocked and closed', () => {
    const openSpy = jest.fn();
    const lockSpy = jest.fn();
    const { getByText } = render(<Controls locked={false} closed={true} toggleClosed={openSpy} toggleLocked={lockSpy}/>);
    const lockBtn = getByText(/lock gate/i);
    const openBtn = getByText(/open gate/i);
    expect(lockBtn.disabled).toBe(false);
    expect(openBtn.disabled).toBe(false);

    fireEvent.click(openBtn);
    expect(openSpy).toBeCalled();

    fireEvent.click(lockBtn);
    expect(lockSpy).toBeCalled();
  });

  test('locked and closed', () => {
    const unlockSpy = jest.fn();
    const { getByText } = render(<Controls locked={true} closed={true} toggleLocked={unlockSpy}/>);
    const unlockBtn = getByText(/unlock gate/i);
    const openBtn = getByText(/open gate/i);
    expect(unlockBtn.disabled).toBe(false);
    expect(openBtn.disabled).toBe(true);

    fireEvent.click(unlockBtn);
    expect(unlockSpy).toBeCalled();
  });
