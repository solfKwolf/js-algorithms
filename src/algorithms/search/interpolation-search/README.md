# 插值查找

插值搜索是对二进制搜索的改进，在二进制搜索中，数组中的值是均匀分布的。二分查找总是去中间的元素进行检查。另一方面，插值搜索可能会根据所搜索的键值去不同的位置。例如，如果键的值更接近最后一个元素，插值搜索很可能会从末尾开始搜索。

为了找到要搜索的位置，它使用以下公式:

```
// The idea of formula is to return higher value of pos
// when element to be searched is closer to arr[hi]. And
// smaller value when closer to arr[lo]
pos = lo + ((x - arr[lo]) * (hi - lo) / (arr[hi] - arr[Lo]))

arr[] - Array where elements need to be searched
x - Element to be searched
lo - Starting index in arr[]
hi - Ending index in arr[]
```
