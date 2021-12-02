## 单链表

链表是线性表的链式存储方式，元素的线性顺序不是由它们在内存中的物理位置给出的。而是每个元素都附加一个指针域，指向下一个元素的存储位置。

每个节点都包含 2 个域：数据域和指针域。数据域存储数据元素，指针域存储下一个节点的地址，因此指针的指向也是节点类型。

### 复杂度

#### 时间复杂度

| Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
|  O(n)  |  O(n)  |   O(1)    |   O(1)   |

#### 空间复杂度

O(n)