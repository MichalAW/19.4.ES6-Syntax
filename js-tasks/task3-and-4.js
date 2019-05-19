const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const average = (...args) => {
 	const score = args.reduce((total, arg) => total + arg) / args.length;
  	console.log(`Średnia to: ${score}`);
};

average(1); // 1
average(1, 3); // 2
average(1, 3, 6, 6); // 4
average(...grades);
