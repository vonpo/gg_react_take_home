import * as React from "react";
import { shallow, configure } from "enzyme";
import { DetailsDialogView } from "./DetailsDialogView";
import { UserDetailsView } from "../UserDetails/UserDetailsView";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import { IImage } from "../../../interfaces/image";
import { CopyLinkContainer } from "../CopyLink/CopyLinkContainer";
import { FavouriteToggleContainer } from "../FavouriteToggle/FavouriteToggleContainer";

describe("<DetailsDialog/> spec", () => {
  before(() => {
    configure({ adapter: new Adapter() });
  });

  it("should render details dialog", () => {
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
    const wrapper = shallow(
      <DetailsDialogView handleClose={() => {}} isOpen={false} image={image} />
    );

    expect(wrapper.exists(UserDetailsView)).to.equal(true);
    expect(wrapper.exists(FavouriteToggleContainer)).to.equal(true);
    expect(wrapper.exists(CopyLinkContainer)).to.equal(true);
  });
});
