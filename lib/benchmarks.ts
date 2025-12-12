// Helper function to get color based on benchmark performance
export function getBenchmarkColor(value: number, good: number, average: number, isLowerBetter = false): string {
    if (isLowerBetter) {
        if (value < good) return "text-emerald-400"; // Green
        if (value <= average) return "text-yellow-400"; // Yellow
        return "text-red-400"; // Red
    } else {
        if (value > good) return "text-emerald-400"; // Green
        if (value >= average) return "text-yellow-400"; // Yellow
        return "text-red-400"; // Red
    }
}

// Meta Ads Benchmarks
export function getCTRColor(ctr: number): string {
    // Good: > 1.5%, Average: 0.9-1.5%, Poor: < 0.9%
    return getBenchmarkColor(ctr, 1.5, 0.9);
}

export function getCPCColor(cpc: number): string {
    // Good: < $0.80, Average: $0.80-$1.50, Poor: > $1.50
    return getBenchmarkColor(cpc, 0.80, 1.50, true);
}

export function getCPMColor(cpm: number): string {
    // Good: < $10, Average: $10-$15, Poor: > $15
    return getBenchmarkColor(cpm, 10, 15, true);
}

// Cold Email Benchmarks
export function getOpenRateColor(rate: number): string {
    // Good: > 40%, Average: 25-40%, Poor: < 25%
    return getBenchmarkColor(rate, 40, 25);
}

export function getReplyRateColor(rate: number): string {
    // Good: > 5%, Average: 2-5%, Poor: < 2%
    return getBenchmarkColor(rate, 5, 2);
}

export function getBounceRateColor(rate: number): string {
    // Good: < 2%, Average: 2-5%, Poor: > 5%
    return getBenchmarkColor(rate, 2, 5, true);
}

// Email Marketing Benchmarks
export function getEmailOpenRateColor(rate: number): string {
    // Good: > 25%, Average: 15-25%, Poor: < 15%
    return getBenchmarkColor(rate, 25, 15);
}

export function getEmailClickRateColor(rate: number): string {
    // Good: > 3%, Average: 1.5-3%, Poor: < 1.5%
    return getBenchmarkColor(rate, 3, 1.5);
}
