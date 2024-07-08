function sum_to_n_a(n: number): number {
	// This approach uses for loop, the most fundamental method in programming for problems involving repetition.
    // By iterating through all the numbers from 1 to n, this method has O(n) time complexity.
    
    let res = 0;
    for (let i = 1; i <= n; i++) {
        res += i;
    }

    return res;
}

function sum_to_n_b(n: number): number {
	// This approach uses the formula of an arithmetic progression.
    // Fomula for sum of all numbers from 1 to n is:
    // S = ((1 + n) * n) / 2
    // So this method has O(1) time complexity
    // This method is the fastest way to solve this problem
    
    return ((1 + n) * n) / 2;
}

function sum_to_n_c(n: number): number {
	// This approach uses recursion
    // With each recursive function call, n is reduced by 1 until n equals 1. Thí method has O(n) time complexity
    // This is the most complex method among all three.

    if (n === 0 || n === 1) {
        return n;
    }

    return n + sum_to_n_c(n - 1);
}