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
  a_{21} & a_{22} & \cdots & a_{2n}\\
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

### 分块乘法

## 逆矩阵
