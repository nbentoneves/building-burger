import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({adapter: new Adapter()});

describe("<NavigationItems />", () => {

    let wrapper;

    beforeEach(() => {
        //With enzime we can only render the component instead of react app
        wrapper = shallow(<NavigationItems/>);
    });

    it("should render the two <NavigationItem />", () => {
        //We can set props here
        wrapper.setProps();
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    });

    it("should render the <NavigationItem /> for Burger Builder and Orders", () => {
        //We can set props here
        expect(wrapper.contains(<NavigationItem link="/">Burger Builder</NavigationItem>)).toEqual(true)
        expect(wrapper.contains(<NavigationItem link="/orders">Orders</NavigationItem>)).toEqual(true)
    });
});