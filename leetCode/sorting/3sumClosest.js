const threeSumClosest = (nums, target) => {
    const closestSum = Infinity;
    for (let i=0; i<nums.length-2; i++) {
        const [left, right] = [i+1, nums.length];
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
            const currentDiff = Math.abs(currentSum - target);
            const trackedDiff = Math.abs(closestSum - target);
            if (currentDiff < trackedDiff) {
                closestSum = currentSum;
            } 
            if (currentSum < target) {
                left++;
            } else {
                right++;
            }
        }

    }
    return closestSum;
}