# 供暖器
## 题目描述
冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。
现在，给出位于一条水平线上的房屋和供暖器的位置，找到可以覆盖所有房屋的最小加热半径。
所以，你的输入将会是房屋和供暖器的位置。你将输出供暖器的最小加热半径。

说明:
给出的房屋和供暖器的数目是非负数且不会超过 25000。
给出的房屋和供暖器的位置均是非负数且不会超过10^9。
只要房屋位于供暖器的半径内(包括在边缘上)，它就可以得到供暖。
所有供暖器都遵循你的半径标准，加热的半径也一样。
![](https://chengzw258.oss-cn-beijing.aliyuncs.com/Java/20200429210914.png)

## 解题思路
整体思路：
（1）先找到每个房屋离加热器的最短距离（即找出离房屋最近的加热器）；
（2）在所有距离中选出最大的一个即为最小覆盖半径。记住是选一个最大的距离。

* 二分查找的思路
* 针对每个房屋都有四中可能性
* 1，房屋的位置刚好有一个加热器，那么加热器离房屋的距离就是0
* 2，房屋的左边没有加热器，右边有加热器，那最小距离是：加热器位置 - 房屋的位置
* 3，房屋的左边有加热器，右边没有，那最小距离是：房屋的位置 - 加热器的位置
* 4，房屋的左右都有加热器，那最小距离是： Min（房屋离左侧加热器的距离，房屋离右侧加热器的距离）



## 代码

```java
class Solution  {
    public int findRadius(int[] houses, int[] heaters) {
        Arrays.sort(heaters);
        
        //存放每个房屋离加热器的最短距离
        int[] distances = new int[houses.length];
        for (int i = 0; i < houses.length; i++) {
            //left和right刚开始为heaters数组的左右两侧
            int left = 0;
            int right = heaters.length - 1;
            while (left < right) {
                //左移1位，表示除以2，二分法查找
                int mid = (left + right + 1) >> 1;
                //如果加热器的位置的值大于房屋的位置的值，
                if (heaters[mid] > houses[i]) {
                    right = mid - 1; //如果不-1,会陷入死循环，例如left=0,right=1
                } else {
                    left = mid;
                }
            }
            //如果加热器正好在房屋的位置，最短距离就为0
            if (heaters[left] == houses[i]) {
                distances[i] = 0;
            } else if (heaters[left] > houses[i] && left == 0) {
                // 如果加热器在房屋的右边且房屋的左边没有加热器了
                distances[i] = heaters[left] - houses[i];
            } else if (heaters[left] < houses[i] && left == heaters.length - 1) {
                // 如果加热器在房屋的左边，且房屋的右边没有加热器了
                distances[i] = houses[i] - heaters[left];
            } else {
                // 如果房屋两边都有加加热器
                distances[i] = Math.min((heaters[left + 1] - houses[i]), (houses[i] - heaters[left]));
            }
        }
        //对每个房屋离加热器的最短距离进行排序
        Arrays.sort(distances);
        //返回最长的每个房屋离加热器的最短距离
        return distances[distances.length - 1];
    }
}
```
