import { BasePin, I2CBus, USBBus } from "./types";

function compatibleI2c(pins: BasePin[]) {
  let sdaCount = 0;
  let sclCount = 0;

  pins.forEach((pin) => {
    if (pin.busCapabilities) {
      for (const busType in pin.busCapabilities) {
        const bus = pin.busCapabilities[busType] as I2CBus;
        if (bus.i2c) {
          // Increment counters based on I2C capabilities
          if (bus.sda) sdaCount++;
          if (bus.scl) sclCount++;
        }
      }
    }
  });

  return sdaCount > 1 || sclCount > 1;
}

function compatibleUsb(pins: BasePin[]) {
  let dplusCount = 0;
  let dminusCount = 0;
  let idCount = 0;

  pins.forEach((pin) => {
    if (pin.busCapabilities) {
      for (const busType in pin.busCapabilities) {
        const bus = pin.busCapabilities[busType] as USBBus;
        if (bus.usb) {
          // Increment counters based on USB capabilities
          if (bus.dplus) dplusCount++;
          if (bus.dminus) dminusCount++;
          if (bus.id) idCount++;
        }
      }
    }
  });

  // Let's consider tie flexibility
  const tiePinsCount = pins.filter((p) => p.tie).length;

  if (
    pins.length === 2 &&
    (dplusCount === 1 || dminusCount === 1 || idCount === 1) &&
    tiePinsCount === 1
  ) {
    // If there's only one dplus, dminus, or id, the tie pin can accommodate it
    return true;
  }

  if (dplusCount >= 2 || dminusCount >= 2) {
    return true;
  }

  return false;
}

function compatibleBus(pins: BasePin[]) {
  let compatibilities = [compatibleUsb, compatibleI2c];

  return compatibilities.some((f) => f(pins));
}

function compatibleDigital(pins: BasePin[]) {
  let num_outputs = pins.filter((p) => p.digitalOutput && !p.digitalInput).length;

  if (num_outputs > 1) {
    return false;
  }

  // now, for all fixed outputs, every other pin must have an input
  let outputs = pins.map((p, i) => ({ p, i })).filter(({ p }) => p.digitalOutput);

  let some_valid_config = false;
  for (const output of outputs) {
    const { p: pin, i: index } = output;

    // In any configuration where an output is able to not conflict, there must be a compatibility
    if (pins.filter((_, i) => i !== index).every((p) => p.digitalInput || p.tie)) {
      some_valid_config = true;
      break;
    }
  }

  // otherwise, simple analog connections should be compatible
  return some_valid_config;
}

function compatibleAnalog(pins: BasePin[]) {
  let num_outputs = pins.filter((p) => p.analogOutput && !p.analogInput).length;

  if (num_outputs > 1) {
    return false;
  }

  // now, for all outputs, every other pin must have an input
  let outputs = pins.map((p, i) => ({ p, i })).filter(({ p }) => p.analogOutput);

  let some_valid_config = false;
  for (const output of outputs) {
    const { p: pin, i: index } = output;

    // In any configuration where an output is able to not conflict, there must be a compatibility
    if (pins.filter((_, i) => i !== index).every((p) => p.analogInput || p.tie)) {
      some_valid_config = true;
      break;
    }
  }

  // otherwise, simple analog connections should be compatible
  return some_valid_config;
}

export function compatiblePins(pins: BasePin[]) {
  let compatibilities = [compatibleBus, compatibleDigital, compatibleAnalog];

  // If any of the compatibilities are true, then the pins are compatible
  // TODO -- this should probably return exactly which aspects are compatible
  return compatibilities.some((f) => f(pins));
}
