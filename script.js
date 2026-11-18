

const solarPackages = {
  basic: {
    name: "BASIC SOLAR PACKAGE",
    price: 180000,
    inverter: "1 × Solis 6KW Hybrid Inverter",
    battery: "1 × Dyness 100Ah LiFePO4",
    panels: "6 × 680W Solar Panels",
    capacity: "4.08kWp"
  },
  standard: {
    name: "STANDARD SOLAR PACKAGE",
    price: 250000,
    inverter: "1 × Solis 6KW Hybrid Inverter",
    battery: "2 × Dyness 100Ah LiFePO4",
    panels: "6 × 680W Solar Panels",
    capacity: "4.08kWp"
  },
  premium: {
    name: "PREMIUM SOLAR PACKAGE",
    price: 350000,
    inverter: "1 × Solis 10KW Hybrid Inverter",
    battery: "1 × Dyness 314Ah LiFePO4",
    panels: "12 × 680W Solar Panels",
    capacity: "8.16kWp"
  },
  ultimate: {
    name: "ULTIMATE SOLAR PACKAGE",
    price: 550000,
    inverter: "1 × Solis 12KW Hybrid Inverter",
    battery: "2 × Dyness 314Ah LiFePO4",
    panels: "16 × 625W Solar Panels",
    capacity: "10kWp"
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const selector = document.getElementById("solarPackage");

  if (!selector) return;

  function updateQuote() {
    const item = solarPackages[selector.value];

    document.getElementById("packageTitle").textContent =
      item.name;

    document.getElementById("quotePrice").textContent =
      "₱" + item.price.toLocaleString("en-PH");

    document.getElementById("quoteDetails").innerHTML = `
      <p>Inverter: ${item.inverter}</p>
      <p>Battery: ${item.battery}</p>
      <p>Solar Panels: ${item.panels}</p>
      <p>Panel Capacity: ${item.capacity}</p>
    `;
  }

  selector.addEventListener("change", updateQuote);
  updateQuote();
});
