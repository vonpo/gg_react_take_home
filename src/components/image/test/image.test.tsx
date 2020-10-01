import * as React from "react";
import { shallow, configure } from "enzyme";
import { DetailsDialog } from "../ui/details-dialog";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import { IImage } from "../interfaces";
import { CopyLinkContainer } from "../../copyLink";
import { FavouriteToggleContainer } from "../../favourite";
import { ImageWithOptions } from "..";

describe("<ImageWithOptions/> spec", () => {
  before(() => {
    configure({ adapter: new Adapter() });
  });

  it("should not render fav and copy link until user hoover over it", () => {
    const image: IImage = {
      title: "test",
      id: "test",
      images: {
        main: {
          height: 1,
          width: 1,
          url: "",
        },
      },
      url: "",
    };
    const wrapper = shallow(<ImageWithOptions image={image} />);

    expect(wrapper.exists(FavouriteToggleContainer)).to.equal(false);
    expect(wrapper.exists(CopyLinkContainer)).to.equal(false);
  });

  it("should render DetailsDialog", () => {
    const image: IImage = {
      title: "test",
      id: "test",
      images: {
        main: {
          height: 1,
          width: 1,
          url: "",
        },
      },
      url: "",
    };
    const wrapper = shallow(<ImageWithOptions image={image} />);

    expect(wrapper.exists(DetailsDialog)).to.equal(true);
  });
});
