import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard"


import { render } from "react-testing-library";


afterEach(rtl.cleanup);


test("<Dashboard /> snapshot", () => {
    const wrapper = rtl.render(<Dashboard/>)
    expect(wrapper.asFragment()).toMatchSnapshot()
  })

test('Dashboard renders correctly', () => {
    render(<Dashboard />);
  });



test('contains open display', () => {
    const { getByText } = render(<Dashboard />);    
    getByText(/open/i);    
    });

test('contains unlocked display', () => {
    const { getByText } = render(<Dashboard />);    
    getByText(/unlocked/i);    
    });

