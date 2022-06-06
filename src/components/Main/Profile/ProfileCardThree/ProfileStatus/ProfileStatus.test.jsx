import React from "react";
import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";





  describe("ProfileStatus Components", () => {
	test("it shows the expected text when clicked (testing the wrong way!)", () => {
	  const component = create(<ProfileStatus status="yuranius" userId="27242" userIdAuth="27242" />);
	  const instance = component.getInstance();
	  expect(instance.state.status).toBe("yuranius");
	});
  });