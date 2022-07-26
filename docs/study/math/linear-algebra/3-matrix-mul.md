# 3. 矩阵乘法和逆矩阵

> ### 📂 章节目录
>
> ::: details 展开
>
> [[toc]]
>
> :::

## 矩阵乘法

在上一节中，已经简单介绍了一些矩阵乘法规则，但并没有讲解所有的解法，并且至此为止对矩阵的乘法（除了和向量的乘法外）都还是停留在方阵。

实际上只要左乘矩阵的列数和右乘矩阵的行数相同即可相乘。最终的结果的矩阵的行数和左乘矩阵相同，列数和右乘矩阵相同。

下面通过四种方法讨论如何使矩阵 $A$ 与 $B$ 相乘得到矩阵 $C$。其中 $A$ 为 $m \times n$ 矩阵，而 $B$ 为 $n \times p$ 矩阵，则 $C$ 为 $m \times p$ 矩阵。记 $c_{ij}$ 为矩阵 $C$ 中第 $i$ 行第 $j$ 列的元素。

以下 4 种方法都很重要，结果也一致。

### 常规方法（行乘以列）

首先回顾上节提到过的方法。也就是通过矩阵 $A$ 第 $i$ 行的行向量和矩阵 $B$ 第 $j$ 列的列向量点积得到 $c_{ij}$。$c_{ij}$ 可以表示为：

$$
c_{ij} = \sum_{k = 1}^{n}a_{ik}b_{kj} = a_{i1}b_{1j} + a_{i2}b_{2j} + \cdots + a_{in}b_{nj}
$$

::: tip 💡 tip

从此处的公式中也可以看出只要左乘矩阵的列数和右乘矩阵的行数相同即可相乘。

:::

以 $c_{34}$ 为例，则其由左乘矩阵的第 $3$ 行和右乘矩阵的第 $4$ 列决定：

$$
\begin{bmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  a_{21} & a_{22} & \cdots & a_{2n} \\
  \textcolor{red}{a_{31}} & \textcolor{red}{a_{32}} & \textcolor{red}{\cdots} & \textcolor{red}{a_{3n}} \\
  \vdots & \vdots & \ddots & \vdots \\
  a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix} \begin{bmatrix}
  b_{11} & b_{12} & b_{13} & \textcolor{red}{b_{14}} & \cdots & b_{1p} \\
  b_{21} & b_{22} & b_{23} & \textcolor{red}{b_{24}} & \cdots & b_{2p}\\
  \vdots & \vdots & \vdots & \textcolor{red}{\vdots} & \ddots & \vdots \\
  b_{n1} & b_{n2} & b_{n3} & \textcolor{red}{b_{n4}} & \cdots & b_{np}
\end{bmatrix}
$$

也就是：

$$
c_{34} = \left( row \space 3 \space of \space A \right) \left( column \space 4 \space of \space B \right) =  \sum_{k = 1}^{n}a_{3k}b_{k4} = a_{31}b_{14} + a_{32}b_{24} + \cdots + a_{3n}b_{n4}
$$

#### 分块乘法

### 列操作

有的时候我们希望将整行或整列作为一个整体考虑，则可以将矩阵乘法考虑为矩阵和向量的乘法。

可以发现，$A$ 乘以 $B$ 第 $1$ 列的列向量得到 $C$ 的第 $1$ 列；$A$ 乘以 $B$ 第 $2$ 列的列向量得到 $C$ 的第 $2$ 列，以此类推。

将 $B$ 考虑成 $p$ 个单独的列向量，其中每一个向量符合前述小节中的右乘列向量的计算方法 —— 也就是 $C$ 中的各列的列向量，是 $A$ 中各列的列向量的线性组合，组合的方法（权重）就是 $B$ 中对应各列的列向量的分量。将 $B$ 中的每一列的列向量表示为 $b_{j} \left( 1 \leq j \leq p \right)$，则：

$$
AB = A \begin{bmatrix}
  b_{1} & b_{2} & \cdots & b_{p}
\end{bmatrix} = \begin{bmatrix}
  Ab_{1} & Ab_{2} & \cdots & Ab_{p}
\end{bmatrix}
$$

其中：

$$
Ab_{j} = \begin{bmatrix}
  \textcolor{red}{a_{11}} & \textcolor{blue}{a_{12}} & \textcolor{green}{a_{13}} & \cdots & \textcolor{orange}{a_{1n}} \\
  \textcolor{red}{a_{21}} & \textcolor{blue}{a_{22}} & \textcolor{green}{a_{23}} & \cdots & \textcolor{orange}{a_{2n}} \\
  \textcolor{red}{a_{31}} & \textcolor{blue}{a_{32}} & \textcolor{green}{a_{33}} & \cdots & \textcolor{orange}{a_{3n}} \\
  \textcolor{red}{\vdots} & \textcolor{blue}{\vdots} & \textcolor{green}{\vdots} & \ddots & \textcolor{orange}{\vdots} \\
  \textcolor{red}{a_{m1}} & \textcolor{blue}{a_{m2}} & \textcolor{green}{a_{m3}} & \cdots & \textcolor{orange}{a_{mn}}
\end{bmatrix} \begin{bmatrix}
  \textcolor{red}{b_{1j}} \\
  \textcolor{blue}{b_{2j}} \\
  \textcolor{green}{b_{3j}} \\
  \vdots \\
  \textcolor{orange}{b_{nj}}
\end{bmatrix} = \textcolor{red}{b_{1j}} \begin{bmatrix}
  \textcolor{red}{a_{11}} \\
  \textcolor{red}{a_{21}} \\
  \textcolor{red}{a_{31}} \\
  \textcolor{red}{\vdots} \\
  \textcolor{red}{a_{n1}}
\end{bmatrix} + \textcolor{blue}{b_{2j}} \begin{bmatrix}
  \textcolor{blue}{a_{12}} \\
  \textcolor{blue}{a_{22}} \\
  \textcolor{blue}{a_{32}} \\
  \textcolor{blue}{\vdots} \\
  \textcolor{blue}{a_{n2}}
\end{bmatrix} + \textcolor{green}{b_{3j}} \begin{bmatrix}
  \textcolor{green}{a_{13}} \\
  \textcolor{green}{a_{23}} \\
  \textcolor{green}{a_{33}} \\
  \textcolor{green}{\vdots} \\
  \textcolor{green}{a_{n3}}
\end{bmatrix} + \cdots + \textcolor{orange}{b_{nj}} \begin{bmatrix}
  \textcolor{orange}{a_{1n}} \\
  \textcolor{orange}{a_{2n}} \\
  \textcolor{orange}{a_{3n}} \\
  \textcolor{orange}{\vdots} \\
  \textcolor{orange}{a_{mn}}
\end{bmatrix}
$$

### 行操作

同理，可以发现，$A$ 第 $1$ 行的行向量乘以 $B$ 得到 $C$ 的第 $1$ 行；$A$ 第 $2$ 行的行向量乘以 $B$ 得到 $C$ 的第 $2$ 行，以此类推。

将 $A$ 考虑成 $m$ 个单独的列向量，其中每一个向量符合前述小节中的左乘行向量的计算方法 —— 也就是 $C$ 中的各行的行向量，是 $B$ 中各行的行向量的线性组合，组合的方法（权重）就是 $A$ 中对应各行的行向量的分量。将 $A$ 中的每一行的行向量表示为 $a_{i} \left( 1 \leq i \leq m \right)$，则：

$$
AB = \begin{bmatrix}
  a_{1} \\
  a_{2} \\
  \vdots \\
  a_{m}
\end{bmatrix} B = \begin{bmatrix}
  a_{1}B \\
  a_{2}B \\
  \vdots \\
  a_{m}B
\end{bmatrix}
$$

其中：

$$
a_{i}B = \begin{bmatrix}
  \textcolor{red}{a_{i1}} & \textcolor{blue}{a_{i2}} & \textcolor{green}{a_{i3}} & \cdots & \textcolor{orange}{a_{in}}
\end{bmatrix} \begin{bmatrix}
  \textcolor{red}{b_{11}} & \textcolor{red}{b_{12}} & \textcolor{red}{b_{13}} & \textcolor{red}{\cdots} & \textcolor{red}{b_{1p}} \\
  \textcolor{blue}{b_{21}} & \textcolor{blue}{b_{22}} & \textcolor{blue}{b_{23}} & \textcolor{blue}{\cdots} & \textcolor{blue}{b_{2p}} \\
  \textcolor{green}{b_{31}} & \textcolor{green}{b_{32}} & \textcolor{green}{b_{33}} & \textcolor{green}{\cdots} & \textcolor{green}{b_{3p}} \\
  \vdots & \vdots & \vdots & \ddots & \vdots \\
  \textcolor{orange}{b_{n1}} & \textcolor{orange}{b_{n2}} & \textcolor{orange}{b_{n3}} & \textcolor{orange}{\cdots} & \textcolor{orange}{b_{np}}
\end{bmatrix} = \textcolor{red}{a_{i1}} \begin{bmatrix}
  \textcolor{red}{b_{11}} & \textcolor{red}{b_{12}} & \textcolor{red}{b_{13}} & \textcolor{red}{\cdots} & \textcolor{red}{b_{1p}}
\end{bmatrix} + \textcolor{blue}{a_{i2}} \begin{bmatrix}
  \textcolor{blue}{b_{21}} & \textcolor{blue}{b_{22}} & \textcolor{blue}{b_{23}} & \textcolor{blue}{\cdots} & \textcolor{blue}{b_{2p}}
\end{bmatrix} + \textcolor{green}{a_{i3}} \begin{bmatrix}
  \textcolor{green}{b_{31}} & \textcolor{green}{b_{32}} & \textcolor{green}{b_{33}} & \textcolor{green}{\cdots} & \textcolor{green}{b_{3p}}
\end{bmatrix} + \cdots + \textcolor{orange}{a_{in}} \begin{bmatrix}
  \textcolor{orange}{b_{n1}} & \textcolor{orange}{b_{n2}} & \textcolor{orange}{b_{n3}} & \textcolor{orange}{\cdots} & \textcolor{orange}{b_{np}}
\end{bmatrix}
$$

### 列乘以行

设 $A$ 的第 $k$ 行行向量为 $a_{k}$，$B$ 的第 $k$ 列列向量为 $b_{k}$，则列乘以行方法如下：

$$
AB = \sum_{k = 1}^{n}a_{k}b_{k}
$$

例如：

$$
\begin{bmatrix}
  \textcolor{red}{2} & \textcolor{blue}{7} \\
  \textcolor{red}{3} & \textcolor{blue}{8} \\
  \textcolor{red}{4} & \textcolor{blue}{9}
\end{bmatrix} \begin{bmatrix}
  \textcolor{red}{1} & \textcolor{red}{6} \\
  \textcolor{blue}{0} & \textcolor{blue}{0}
\end{bmatrix} = \begin{bmatrix}
  \textcolor{red}{2} \\
  \textcolor{red}{3} \\
  \textcolor{red}{4}
\end{bmatrix} \begin{bmatrix}
  \textcolor{red}{1} & \textcolor{red}{6}
\end{bmatrix} + \begin{bmatrix}
  \textcolor{blue}{7} \\
  \textcolor{blue}{8} \\
  \textcolor{blue}{9}
\end{bmatrix} \begin{bmatrix}
  \textcolor{blue}{0} & \textcolor{blue}{0}
\end{bmatrix} = \begin{bmatrix}
  2 & 12 \\
  3 & 18 \\
  4 & 24
\end{bmatrix} + \begin{bmatrix}
  0 & 0 \\
  0 & 0 \\
  0 & 0
\end{bmatrix} = \begin{bmatrix}
  2 & 12 \\
  3 & 18 \\
  4 & 24
\end{bmatrix}
$$

每次都是用一个列向量与一个行向量相乘得到一个矩阵，这样的矩阵可以观察到以下特点：

- 其每一列的列向量都和相乘的列向量同向
  - 如 $\begin{bmatrix}
  2 & 12 \\
  3 & 18 \\
  4 & 24
\end{bmatrix}$ 的每一列列向量都和 $\begin{bmatrix}
  2 \\
  3 \\
  4
\end{bmatrix}$ 同向
- 其每一行的行向量都和相乘的行向量同向
  - 如 $\begin{bmatrix}
  2 & 12 \\
  3 & 18 \\
  4 & 24
\end{bmatrix}$ 的每一行都和 $\begin{bmatrix}
  1 & 6
\end{bmatrix}$ 同向

## 逆矩阵

在上一节中，已经介绍了逆矩阵的定义，现在再介绍奇异矩阵和非奇异矩阵的相关概念。

> #### 🧩 奇异矩阵和非奇异矩阵
>
> 如果矩阵 $A$ 是方阵，若存在逆矩阵 $A^{-1}$，使得 $AA^{-1} = I = A^{-1}A$（左逆矩阵等于右逆矩阵，这或许没有那么容易证明，但事实如此）。则称矩阵 $A$ 可逆矩阵（invertible matrix）或非奇异矩阵（nonsingular matrix）。
>
> 反之，如果 $A$ 为奇异矩阵（singular matrix），则其没有逆矩阵。它的行列式为 $0$。另一个等价的说法是，若 $A$ 为奇异矩阵，则方程 $Ax = \mathit {0}$ 存在非零解 $x$（$x$ 和 $\mathit {0}$ 均为向量，$\mathit {0}$ 即零向量）。

### 奇异矩阵

首先讨论奇异矩阵，也就是没有逆的情况。

> #### 🍗 为什么叫奇异矩阵？
>
> 因为大部分的矩阵都不是奇异矩阵，所以奇异矩阵就显得非常的少见、“奇异”。

举一个奇异矩阵例子：

$$
\begin{bmatrix}
  1 & 3 \\
  2 & 6
\end{bmatrix}
$$

为什么说这是一个奇异矩阵？

#### 解释 1：以列的方式思考

以列的方式思考，可以看到其列向量 $\begin{bmatrix}
  1 \\
  2
\end{bmatrix}$ 和 $\begin{bmatrix}
  3 \\
  6
\end{bmatrix}$ 共线。

那么其肯定不存在逆矩阵，使得相乘后得到单位矩阵 $\begin{bmatrix}
  1 & 0 \\
  0 & 1
\end{bmatrix}$。

因为单位矩阵中 $\begin{bmatrix}
  1 \\
  0
\end{bmatrix}$ 和 $\begin{bmatrix}
  0 \\
  1
\end{bmatrix}$ 不共线，无论该矩阵的两个列向量如何线性组合，都无法同时得到单位矩阵中的两个列向量。

#### 解释 2：$Ax = \mathit {0}$ 存在非零解

上面提到过若 $A$ 为奇异矩阵，则方程 $Ax = \mathit {0}$ 存在非零解 $x$。也就是说：

$$
Ax = \begin{bmatrix}
  1 & 3 \\
  2 & 6
\end{bmatrix} x = \begin{bmatrix}
  0 \\
  0
\end{bmatrix}
$$

显然，其中一个解为 $\begin{bmatrix}
  0 \\
  0
\end{bmatrix}$，但最为关键的是其还存在不止一个非零解如 $\begin{bmatrix}
  3 \\
  -1
\end{bmatrix}$ 或 $\begin{bmatrix}
  6 \\
  -2
\end{bmatrix}$ 等使得方程成立（向量共线自然存在多解）。

那么为什么 $Ax = \mathit {0}$ 存在非零解就说明 $A$ 没有逆矩阵呢？可以通过反证法证明：

设奇异矩阵存在逆矩阵 $A^{-1}$，则：

$$
\begin{aligned}
  A^{-1}Ax & = A^{-1}\mathit {0} \\
  x & = \mathit {0}
\end{aligned}
$$

显然，对于奇异矩阵的非零解来说，这是错误的。由此产生矛盾，得证。

### 非奇异矩阵

对于非奇异矩阵，则求它的逆矩阵是一个非常关键的问题。

其实经过上述的思考过程，已经可以想到求逆矩阵的方法了 —— 从列操作的角度思考，实际上求逆矩阵等价于求多个 $Ax = b$，其中 $x$ 为 $A^{-1}$ 的第 $j$ 列，$b$ 为单位矩阵 $I$ 的第 $j$ 列。例如：

$$
\begin{aligned}
  AA^{-1} & = I \\
  \begin{bmatrix}
    1 & 3 \\
    2 & 7
  \end{bmatrix} \begin{bmatrix}
    a & c \\
    b & d
  \end{bmatrix} & = \begin{bmatrix}
    1 & 0 \\
    0 & 1
  \end{bmatrix}
\end{aligned}
$$

等价于求下面两组方程：

$$
\begin{aligned}
  \begin{bmatrix}
    1 & 3 \\
    2 & 7
  \end{bmatrix} \begin{bmatrix}
    a \\
    b
  \end{bmatrix} & = \begin{bmatrix}
    1 \\
    0
  \end{bmatrix} \\
  \begin{bmatrix}
    1 & 3 \\
    2 & 7
  \end{bmatrix} \begin{bmatrix}
    c \\
    d
  \end{bmatrix} & = \begin{bmatrix}
    0 \\
    1
  \end{bmatrix}
\end{aligned}
$$

除了一个一个解出来之外，下面介绍一种更加快捷的方法。

#### 高斯 - 若尔当消元法

类似增广矩阵，将 $I$ 添加到 $A$ 的右侧：

$$
\begin{bmatrix}
  1 & 3 & \textcolor{purple}{1} & \textcolor{purple}{0} \\
  2 & 7 & \textcolor{purple}{0} & \textcolor{purple}{1}
\end{bmatrix}
$$

首先类似高斯消元，将 $A$ 变为上三角矩阵的形式：

$$
\begin{bmatrix}
  \textcolor{red}{1} & 3 & \textcolor{purple}{1} & \textcolor{purple}{0} \\
  \textcolor{blue}{2} & 7 & \textcolor{purple}{0} & \textcolor{purple}{1}
\end{bmatrix} \xrightarrow{(2, 1)} \begin{bmatrix}
  \textcolor{red}{1} & 3 & \textcolor{purple}{1} & \textcolor{purple}{0} \\
  \textcolor{green}{0} & 1 & \textcolor{purple}{-2} & \textcolor{purple}{1}
\end{bmatrix}
$$

高斯做到这就不管了，但若尔当还会往下 —— 反过来向上消元：

$$
\begin{bmatrix}
  \textcolor{red}{1} & \textcolor{blue}{3} & \textcolor{purple}{1} & \textcolor{purple}{0} \\
  \textcolor{green}{0} & \textcolor{red}{1} & \textcolor{purple}{-2} & \textcolor{purple}{1}
\end{bmatrix} \xrightarrow{(1, 2)} \begin{bmatrix}
  \textcolor{red}{1} & \textcolor{green}{0} & \textcolor{purple}{7} & \textcolor{purple}{-3} \\
  \textcolor{green}{0} & \textcolor{red}{1} & \textcolor{purple}{-2} & \textcolor{purple}{1}
\end{bmatrix}
$$

完整的操作如下：

$$
\begin{bmatrix}
  \textcolor{red}{1} & 3 & \textcolor{purple}{1} & \textcolor{purple}{0} \\
  \textcolor{blue}{2} & 7 & \textcolor{purple}{0} & \textcolor{purple}{1}
\end{bmatrix} \xrightarrow{(2, 1)} \begin{bmatrix}
  \textcolor{red}{1} & \textcolor{blue}{3} & \textcolor{purple}{1} & \textcolor{purple}{0} \\
  \textcolor{green}{0} & \textcolor{red}{1} & \textcolor{purple}{-2} & \textcolor{purple}{1}
\end{bmatrix} \xrightarrow{(1, 2)} \begin{bmatrix}
  \textcolor{red}{1} & \textcolor{green}{0} & \textcolor{purple}{7} & \textcolor{purple}{-3} \\
  \textcolor{green}{0} & \textcolor{red}{1} & \textcolor{purple}{-2} & \textcolor{purple}{1}
\end{bmatrix}
$$

此时，得到的结果就是 $\begin{bmatrix}
  I & A^{-1}
\end{bmatrix}$。

至于为什么是这样，非常好理解：

$$
E \begin{bmatrix}
  A & \textcolor{purple}{I}
\end{bmatrix} = \begin{bmatrix}
  EA & \textcolor{purple}{EI}
\end{bmatrix} = \begin{bmatrix}
  I & \textcolor{purple}{A^{-1}}
\end{bmatrix}
$$

将消元所用到的矩阵总称为 $E$，则 $EA = I$ 告诉我们 $E$ **实际上就是需要求的 $A^{-1}$**，而右侧的 $E$ 乘以单位向量 $I$ 得到的自然就是 $E$ 本身，也就是 $A^{-1}$。
