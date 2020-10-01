import * as React from "react";
import { shallow, configure } from "enzyme";
import { DetailsDialog } from "../ui/details-dialog";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import { expect } from "chai";
import { IImage } from "../interfaces";
import { CopyLinkContainer } from "../../copyLink";
import { FavouriteToggleContainer } from "../../favourite";
import { UserDetails } from "../ui/details-dialog";

describe("<DetailsDialog/> spec", () => {
  before(() => {
    configure({ adapter: new Adapter() });
  });

  it("should render details dialog", () => {
    const onClick = sinon.spy();
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
    const wrapper = shallow(
      <DetailsDialog handleClose={() => {}} isOpen={false} image={image} />
    );

    expect(wrapper.exists(UserDetails)).to.equal(true);
    expect(wrapper.exists(FavouriteToggleContainer)).to.equal(true);
    expect(wrapper.exists(CopyLinkContainer)).to.equal(true);
  });
});
