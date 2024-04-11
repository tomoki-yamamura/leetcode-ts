function maxProfit(prices: number[]): number {
  let tempProfit = 0;
  let tmpMin = prices[0];
  for(let i = 1; i < prices.length; i++) {
    tmpMin = prices[i] < tmpMin ? prices[i] : tmpMin
    tempProfit = (prices[i] - tmpMin) > tempProfit ? (prices[i] - tmpMin) : tempProfit
  }
  return tempProfit
};

console.log(maxProfit([7,6,4,3,1]));
