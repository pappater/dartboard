// ### Bubble Sort

// **Bubble Sort** is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.

// #### Concept

// The algorithm works by repeatedly "bubbling" the largest element to the end of the list. Here's how it works step by step:

// 1. **Start from the first element** of the array.
// 2. **Compare the first and second elements**. If the first element is greater than the second, **swap them**.
// 3. Move to the next pair (second and third elements) and repeat the comparison and swap if necessary.
// 4. Continue this process until you reach the end of the array.
// 5. At the end of this pass, the largest element will have "bubbled" up to its correct position at the end of the array.
// 6. **Ignore the last element** (since it's already in its correct position), and repeat the process for the remaining elements.
// 7. Continue making passes through the list, reducing the range by 1 element after each pass, until no more swaps are needed (i.e., the list is sorted).

// #### Example:

// Suppose you have the array `[5, 2, 9, 1, 5, 6]`.

// 1. **First pass**:
//    - Compare 5 and 2 → Swap → `[2, 5, 9, 1, 5, 6]`
//    - Compare 5 and 9 → No swap → `[2, 5, 9, 1, 5, 6]`
//    - Compare 9 and 1 → Swap → `[2, 5, 1, 9, 5, 6]`
//    - Compare 9 and 5 → Swap → `[2, 5, 1, 5, 9, 6]`
//    - Compare 9 and 6 → Swap → `[2, 5, 1, 5, 6, 9]`

//    After the first pass, 9 is in its correct position.

// 2. **Second pass**:
//    - Compare 2 and 5 → No swap → `[2, 5, 1, 5, 6, 9]`
//    - Compare 5 and 1 → Swap → `[2, 1, 5, 5, 6, 9]`
//    - Compare 5 and 5 → No swap → `[2, 1, 5, 5, 6, 9]`
//    - Compare 5 and 6 → No swap → `[2, 1, 5, 5, 6, 9]`

//    After the second pass, 6 is in its correct position.

// 3. **Third pass**:
//    - Compare 2 and 1 → Swap → `[1, 2, 5, 5, 6, 9]`
//    - Compare 2 and 5 → No swap → `[1, 2, 5, 5, 6, 9]`
//    - Compare 5 and 5 → No swap → `[1, 2, 5, 5, 6, 9]`

//    At this point, the array is already sorted, but Bubble Sort will make a few more passes to confirm.

// #### Key Points:

// - **Time complexity**: O(n²) in the worst and average case, where n is the number of elements in the array. This is because for each element, you have to compare it with every other element.
// - **Space complexity**: O(1), as it only requires a constant amount of extra space.
// - **Best case**: O(n) if the array is already sorted (you can optimize it by adding a flag to check if no swaps were made during a pass).
// - **Stable**: Bubble Sort is a stable sorting algorithm, meaning that equal elements maintain their relative order.
// - **Simple to understand** but inefficient for large datasets.

// Bubble Sort is often used for educational purposes to introduce the concept of sorting algorithms but is rarely used in practice for large datasets due to its inefficiency.

const input = [5, 2, 9, 1, 5, 6];

let output = [];
for (let i = 0; i <= input.length; i++) {
  if (input[i] < input[i + 1]) {
    console.log(`${input[i + 1]} is greater than ${input[i]}`);

    // output[i] = input[i + 1];
  } else {
    // output[i] = input[i];
    console.log(`${input[i]} is greater than ${input[i + 1]}`);
  }
}
console.log("output", output);
