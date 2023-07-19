let multiArr = [
	[10, 14, 58,],
	[20, 18, 82, 4],
	[10, 12, 11, 100,],
	[0, 18, 68]
];
let sum = 0
for (let rowIndex = 0; rowIndex <= 1; rowIndex++) {
	for (let columnIndex = 0; columnIndex <= 1; columnIndex++) {
		sum += multiArr[rowIndex][columnIndex]
	}
}
console.log(sum);

let sum2 = 0
for (let rowIndex2 = 0; rowIndex2 <= 1; rowIndex2++) {
	for (let columnIndex2 = 1; columnIndex2 < multiArr[rowIndex2].length; columnIndex2++) {
		sum2 += multiArr[rowIndex2][columnIndex2];
	}
}
console.log(sum2);

let sum3 = 0
for (let rowIndex3 = 2; rowIndex3 <= 3; rowIndex3++) {
	for (let columnIndex3 = 1; columnIndex3 < multiArr[columnIndex3].length; columnIndex3++) {
		sum3 += multiArr[rowIndex3][columnIndex3];
	}
}
console.log(sum3);

let sum4 = 0
for (let rowIndex4 = 2; rowIndex4 <= 3; rowIndex4++) {
	for (let columnIndex4 = 1; columnIndex4 < multiArr[rowIndex4].length; columnIndex4++) {
		sum4 += multiArr[rowIndex4][columnIndex4];
	}
}
console.log(sum4);

// Суму парних рядків
let sum5 = 0
for (let rowIndex5 = 0; rowIndex5 < multiArr.length; rowIndex5 += 2) {
	for (let columnIndex5 = 0; columnIndex5 < multiArr[rowIndex5].length; columnIndex5++) {
		sum5 += multiArr[rowIndex5][columnIndex5];
	}
}
console.log(sum5);


// Дано інформацію про прибуток К магазинів протягом тижня. Знайти :


let supermarketChain = [
	[104, 120, 110, 1000, 1200, 200, 180,],  //перший магазин
	[105, 120, 110, 1000, 11200, 200, 180,], //другий магазин
	[10, 130, 110, 1000, 120, 2000, 1800,],  //третій магазин
	[109, 120, 110, 2000, 1200, 3200, 180,], //четвертий магазин
];

//1) загальний прибуток кожного масиву за тиждень;

let rowMarketSumDays = 0
for (let rowMarket = 0; rowMarket < supermarketChain.length; rowMarket++) {
	for (let workDay = 0; workDay < supermarketChain[rowMarket].length; workDay++) {
		rowMarketSumDays += supermarketChain[0][0]
	}
}
console.log(rowMarketSumDays);
//4) загальний прибуток за вихідні дні
let rowMarketSumDays2 = 0
for (let rowMarket = 0; rowMarket < supermarketChain.length; rowMarket++) {
	for (let workDay = 5; workDay <= 6; workDay++) {
		rowMarketSumDays2 += supermarketChain[rowMarket][workDay]
	}
}
console.log(rowMarketSumDays2);


//6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200

let newSupermarketChain = supermarketChain.flat(Infinity)

console.log(newSupermarketChain);

let profitSuper200 = newSupermarketChain.filter(el => el > 200)

console.log(profitSuper200);