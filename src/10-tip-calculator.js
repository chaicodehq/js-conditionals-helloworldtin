/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  if (billAmount <= 0) return null;
  if (!(serviceRating >= 1 && serviceRating <= 5)) return null;

  var tipAmount = 0;
  var tip_percentage = 0;

  switch (serviceRating) {
    case 1:
      tipAmount = billAmount * (5 / 100);
      tip_percentage = 5;
      break;

    case 2:
      tipAmount = billAmount * (10 / 100);
      tip_percentage = 10;
      break;

    case 3:
      tipAmount = billAmount * (15 / 100);
      tip_percentage = 15;
      break;
    case 4:
      tipAmount = billAmount * (20 / 100);
      tip_percentage = 20;
      break;

    case 5:
      tipAmount = billAmount * (25 / 100);
      tip_percentage = 25;
      break;
    default:
      return null;
  }
  var total_amount = tipAmount + billAmount;

  return {
    tipPercentage: tip_percentage,
    tipAmount: Number(tipAmount.toFixed(2)),
    totalAmount: Number(total_amount.toFixed(2)),
  }


}
