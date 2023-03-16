function gToL(gallons) {
  const liters = gallons * 3.78541;
  return liters;
}

function lToG(liters) {
  const gallons = liters / 3.78541;
  return gallons;
}

/* ======== Inches to CM & CM to Inches ======== */

function inchToCm(inches) {
  return inches / 0.393701;
}

function cmToInch(centimeters) {
  return centimeters / 2.54;
}
