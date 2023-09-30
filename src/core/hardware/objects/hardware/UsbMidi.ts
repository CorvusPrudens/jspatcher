import { IInletsMeta, IOutletsMeta } from "../../../objects/base/AbstractObject";
import type { IIosMeta, IPropsMeta, THardwareMetaType } from "../base/AbstractHardwareObject";
import DefaultObject from "../base/DefaultHardwareObject";

export default class UsbMidi extends DefaultObject<{}, {}, any[], any[], []> {
  static author = "Corvus Prudens";
  static version = "v1.0.0";
  static description = "USB MIDI interface";
  static ios: IIosMeta = [
    {
      pin: {
        pinName: "dp",
        busCapabilities: { USB_HS: { usb: true, dplus: true, dminus: false } },
      },
      type: "anything",
      description: "USB D+ pin",
    },
    {
      pin: {
        pinName: "dm",
        busCapabilities: { USB_HS: { usb: true, dplus: false, dminus: true } },
      },
      type: "anything",
      description: "USB D- pin",
    },
  ];

  static patcherInlets: IInletsMeta = [
    {
      type: "anything",
      description: "MIDI bytestream (sent to host)",
      isHot: true,
    },
  ];

  static patcherOutlets: IOutletsMeta = [
    {
      type: "anything",
      description: "MIDI bytestream (received from host)",
    },
  ];

  static props: IPropsMeta = {
    polarity: {
      type: "number",
      default: 0,
      description: "determines button polarity (0 = active low, 1 = active high)",
      alwaysSerialize: true,
    },
    pull: {
      type: "number",
      default: 0,
      description:
        "determines if the pull-up or pull-down state (0 = pull-down, 1 = pull-up, 2 = none)",
      alwaysSerialize: true,
    },
  };

  subscribe() {
    super.subscribe();

    this.on("preInit", () => {
      this.ios = [
        {
          edge: "T",
          position: 0.25,
        },
        {
          edge: "T",
          position: 0.75,
        },
      ];
    });
  }
}
