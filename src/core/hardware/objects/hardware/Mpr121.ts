import { IInletsMeta, IOutletsMeta } from "../../../objects/base/AbstractObject";
import type { IIosMeta, IPropsMeta, THardwareMetaType } from "../base/AbstractHardwareObject";
import DefaultObject from "../base/DefaultHardwareObject";

export default class Mpr121 extends DefaultObject<{}, {}, any[], any[], []> {
  static author = "Corvus Prudens";
  static version = "v1.0.0";
  static description = "MPR121 Capacitive Touch Sensor";
  static ios: IIosMeta = [
    {
      pin: {
        pinName: "sda",
        busCapabilities: { I2C: { i2c: true, sda: true, scl: false } },
      },
      type: "anything",
      description: "I2C Data Pin",
    },
    {
      pin: {
        pinName: "scl",
        busCapabilities: { I2C: { i2c: true, sda: false, scl: true } },
      },
      type: "anything",
      description: "I2C Clock Pin",
    },
  ];

  static patcherOutlets: IOutletsMeta = [
    {
      type: "anything",
      description: "Button index and state pair (0 = no touch, 1 = touch)",
    },
  ];

  static props: IPropsMeta = {
    address: {
      type: "number",
      default: 90,
      description: "The I2C address of the device",
      alwaysSerialize: true,
    },
    touchThreshold: {
      type: "number",
      default: 12,
      description: "sets the touch detection threshold (0-255)",
      alwaysSerialize: true,
    },
    releaseThreshold: {
      type: "number",
      default: 6,
      description: "sets the release detection threshold (0-255)",
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
