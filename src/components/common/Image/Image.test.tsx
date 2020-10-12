import * as React from "react";
import { shallow, configure } from "enzyme";
import { DetailsDialogView } from "../DetailsDialog/DetailsDialogView";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import { IImage } from "../../../interfaces/image";
import { CopyLinkContainer } from "../CopyLink/CopyLinkContainer";
import { FavouriteToggleContainer } from "../FavouriteToggle/FavouriteToggleContainer";
import { ImageWithOptionsView } from "./ImageWithOptionsView";

describe("<ImageWithOptionsView/> spec", () => {
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
        small: {
          height: 1,
          width: 1,
          url: "",
        },
      },
      url: "",
    };
    const wrapper = shallow(<ImageWithOptionsView image={image} />);

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
        small: {
          height: 1,
          width: 1,
          url: "",
        },
      },
      url: "",
    };
    const wrapper = shallow(<ImageWithOptionsView image={image} />);

    expect(wrapper.exists(DetailsDialogView)).to.equal(true);
  });
});
