/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  if (size !== "small" && size !== "medium" && size !== "large") return -1;

  var total_cost = 0;
  // getting size prize
  if (size === "small") total_cost += 3.00;
  else if (size === "medium") total_cost += 4.00;
  else if (size === "large") total_cost += 5.00;

  if (type == "regular") total_cost = total_cost;
  else if (type === "latte") total_cost += 1.00;
  else if (type === "cappuccino") total_cost += 1.50;
  else if (type === "mocha") total_cost += 2.00;
  else return -1;

  if (extras.whippedCream) total_cost += 0.50;
  if (extras.extraShot) total_cost += 0.75;

  return total_cost;

}
