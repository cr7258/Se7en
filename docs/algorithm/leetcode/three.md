# 有效的山脉数组
## 题目描述
给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。
让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：
A.length >= 3
在 0 < i < A.length - 1 条件下，存在 i 使得：
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1]
![](https://chengzw258.oss-cn-beijing.aliyuncs.com/Java/20200424220442.png)

## 解题思路
**线性扫描**
我们从数组的最左侧开始扫描，直到找到第一个不满足 A[i] < A[i + 1] 的 i，那么 i 就是这个数组的最高点。如果 i = 0 或者不存在这样的 i（即整个数组都是单调递增的），那么就返回 false。否则从 i 开始继续扫描，判断接下来的的位置 j 是否都满足 A[j] > A[j + 1]，若都满足就返回 true，否则返回 false。

## 代码

```java
class Solution {
    public boolean validMountainArray(int[] A) {
        int i = 0;
        int num = A.length;
        //先找到假设的最高峰
        while (i+1 < num && A[i] < A[i+1]) {
            i++;
        }
        //单调递增或者单调递减结果都为false [1,2,3,4,5]或[5,4,3,2,1]
        if (i == 0 || i == num-1) {
            return false;
        }
        //计算出山底
        while (i+1 < num && A[i] > A[i+1]) {
            i++;
        }
        //如果i此时的索引是数组的长度-1，则满足要求
        return num == i + 1;
    }
```

