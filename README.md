[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Dt3ukIt2)
# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

## Answer
We have a typical depth of $\log n$ for the divide and conquer aspect, and then a factor of $n$ for the merging aspect. Hence the span is $\Theta(n\log n)$. This is asymptotically the same as regular mergesort because the advantage of parallelization doesn't revolve around somehow doing less work to accomplish the same task. We are doing the same amount of work, just spread across multiple threads, thus decreasing the runtime in practice. 
