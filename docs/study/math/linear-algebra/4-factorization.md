# 4. 矩阵的 LU 分解

> ### 📂 章节目录
>
> ::: details 展开
>
> [[toc]]
>
> :::

## 矩阵乘积的逆

首先将上一节中剩下的一些内容讲解完。

对于单个矩阵 $A$ 和 $B$，其逆均已知，那么其积 $AB$ 的逆是什么？

首先考虑其积 $AB$ 乘以什么可以得到单位矩阵 —— 显然就是 $\left( AB \right)^{-1}$，故有一下等式：

$$
AB \left( AB \right)^{-1} = I
$$

为了得到 $\left( AB \right)^{-1}$ 只需将左侧 $AB$ 消掉即可，只需先后同左乘 $A^{-1}$ 和 $B^{-1}$ 即可，也就是：

$$
\begin{aligned}
  AB \left( AB \right)^{-1} & = I \\
  A^{-1}AB \left( AB \right)^{-1} & = A^{-1}I \\
  B \left( AB \right)^{-1} & = A^{-1} \\
  B^{-1}B \left( AB \right)^{-1} & = B^{-1}A^{-1} \\
  \left( AB \right)^{-1} & = B^{-1}A^{-1}
\end{aligned}
$$

故其积 $AB$ 的逆是 $B^{-1}A^{-1}$。

::: tip 💡 tip

再次提醒 —— 左乘和右乘的效果是不同的。

:::

或者以另一个方式思考，假设已知 $B^{-1}A^{-1}$ 是 $AB$ 的逆，则只需验证即可。应用矩阵乘法结合律的性质：

$$
\begin{aligned}
  & \left( AB \right) \left( B^{-1}A^{-1} \right) \\
  & = A \left( BB^{-1} \right) A^{-1} \\
  & = AIA^{-1} \\
  & = AA^{-1} \\
  & = I
\end{aligned}
$$

## 转置矩阵的逆矩阵

本节需要用到转置矩阵求逆的基础公式，故首先介绍此公式。

### 矩阵的转置

这里仅仅是对矩阵的转置一个简单的介绍，在下一节中还将详细讨论。

> #### 🧩 转置的定义
>
> 矩阵 $A$ 的转置（transpose）即矩阵 $A$ 的转置矩阵，记为 $A^{T}$。由下列等价动作建立：
>
> - 把 $A$ 的行写为 $A^{T}$ 的列
> - 把 $A$ 的列写为 $A^{T}$ 的行
>
> 形式上说，$m \times n$ 矩阵 $A$ 的转置是 $n \times m$ 矩阵 $A^{T}$：
>
> $A^{T}_{ij} = A_{ij} \left( 1 \leq i \leq m, 1 \leq j \leq n \right)$

矩阵的转置矩阵看起来就像沿着对角线进行了反转。例如：

$$
A = \begin{bmatrix}
  \textcolor{red}{a} & b & c \\
  d & \textcolor{red}{e} & f
\end{bmatrix}
$$

则其转置矩阵为：

$$
A^{T} = \begin{bmatrix}
  \textcolor{red}{a} & d \\
  b & \textcolor{red}{e} \\
  c & f
\end{bmatrix}
$$

特殊地，$I^{T} = I$。因为主对角线不变，其余元素都是 $0$ 且单位矩阵都是方阵。例如：

$$
I^{T} = I = \begin{bmatrix}
  \textcolor{red}{1} & 0 \\
  0 & \textcolor{red}{1}
\end{bmatrix}
$$

### 矩阵乘积的转置

此外，还有如下公式可以从定义证明：

$$
\left( AB \right) ^{T} = B^{T}A^{T}
$$

### 具体公式

如何求 $A$ 的转置 $A^{T}$ 的逆 $\left( A^{T} \right) ^{-1}$？

实际上只要知道 $A$ 的逆 $A^{-1}$，将其转置即可得到答案。证明过程如下：

$$
\begin{aligned}
  AA^{-1} & = I \\
  \left( AA^{-1} \right) ^{T} & = I^{T} \\
  \left( A^{-1} \right) ^{T} A^{T} & = I
\end{aligned}
$$

最后一行 $\left( A^{-1} \right) ^{T} A^{T} = I$ 实际上就是告诉我们 $A^{T}$ 的逆即 $\left( A^{-1} \right) ^{T}$。

换句话说，转置和逆两种运算对于单个矩阵而言，其顺序可以颠倒：

$$
\left( A^{T} \right) ^{-1} = \left( A^{-1} \right) ^{T}
$$

## 矩阵的 LU 分解

消元的目的只是为了认识矩阵的概念，而 $A = LU$ 是最基础的矩阵分解。

在之前的小节中已经介绍了如何应用消元法将矩阵 $A$ 转变为上三角矩阵 $U$，这就引出了矩阵的 $LU$ 分解，它是理解矩阵 $A$ 性质的重要方法。

下面的例子都假设没有行交换的情况。矩阵 $A$ 通过一系列的左乘消元矩阵 $E_{ij}$ 最终转化为 $U$。

### 二阶矩阵

在二阶矩阵中，只需要一次消元操作（左乘 $E_{21}$）即可，例如：

$$
E_{21}A = \begin{bmatrix}
  1 & 0 \\
  -4 & 1
\end{bmatrix} \begin{bmatrix}
  \textcolor{red}{2} & 1 \\
  \textcolor{blue}{8} & 7
\end{bmatrix} = \begin{bmatrix}
  \textcolor{red}{2} & 1 \\
  \textcolor{green}{0} & \textcolor{red}{3}
\end{bmatrix} = U
$$

在之前的小节中，已经介绍了消元矩阵的逆实际上非常容易看出来，只需要将对应位置的正负号改变即可。则等式两边同时左乘 $E_{21}^{-1}$，可得：

$$
\begin{aligned}
  E_{21}^{-1}E_{21}A & = E_{21}^{-1}U \\
  A & = E_{21}^{-1}U
\end{aligned}
$$

也就是说 $L$ 即为 $E_{21}$ 的逆 $E_{21}^{-1}$：

$$
E_{21}^{-1} = L
$$

例如：

$$
A = E_{21}^{-1}E_{21}A = \begin{bmatrix}
  1 & 0 \\
  \textcolor{orange}{4} & 1
\end{bmatrix} \begin{bmatrix}
  1 & 0 \\
  \textcolor{orange}{-4} & 1
\end{bmatrix} \begin{bmatrix}
  \textcolor{red}{2} & 1 \\
  \textcolor{blue}{8} & 7
\end{bmatrix} = \begin{bmatrix}
  1 & 0 \\
  \textcolor{orange}{-4} & 1
\end{bmatrix} \begin{bmatrix}
  \textcolor{red}{2} & 1 \\
  \textcolor{green}{0} & \textcolor{red}{3}
\end{bmatrix} = E_{21}^{-1}U = LU
$$

其中，在之前的小节中提到过 $U$ 代表上三角矩阵（**u**pper triangular matrix），而此处的 $L$ 则代表下三角矩阵（**l**ower triangular matrix）。上三角矩阵的对角线左下方的系数全部为 $0$，下三角矩阵的对角线右上方的系数全部为 $0$。

有时还会将 $U$ 的主元单独列出来，从而进一步分解得到对角矩阵 $D$（**d**iagonal matrix），使得看起来更有“平衡感”：

$$
A = LDU
$$

例如：

$$
A = \begin{bmatrix}
  2 & 1 \\
  8 & 7
\end{bmatrix} = \begin{bmatrix}
  1 & \textcolor{blue}{0} \\
  \textcolor{blue}{-4} & 1
\end{bmatrix} \begin{bmatrix}
  \textcolor{red}{2} & 0 \\
  0 & \textcolor{red}{3}
\end{bmatrix} \begin{bmatrix}
  1 & \textcolor{blue}{1 / 2} \\
  \textcolor{blue}{0} & 1
\end{bmatrix} = LDU
$$

### 三阶矩阵

下面讨论更高阶的矩阵。在之前的二阶矩阵中 $L$ 只是简单的将 $E_{21}$ 中对应位置的符号改了一下，但对于更高阶的矩阵 $E$ 和 $L$ 的区别将大很多。

同样假设没有行互换，那么对于三阶矩阵来说：

$$
E_{32} \left( E_{31} \left( E_{21}A \right) \right) = \left( E_{32}E_{31}E_{21} \right) A = U
$$

同时左乘逆矩阵得到：

$$
A = E_{21}^{-1} \left( E_{31}^{-1} \left( E_{32}^{-1}U \right) \right) = \left( E_{21}^{-1}E_{31}^{-1}E_{32}^{-1} \right) U = LU
$$

::: tip 💡 tip

也可以根据矩阵乘积的逆公式直接得到。

:::

也就是：

$$
\begin{aligned}
  \textcolor{red}{\left( E_{32}E_{31}E_{21} \right)} A & = U \\
  A & = \textcolor{blue}{\left( E_{21}^{-1}E_{31}^{-1}E_{32}^{-1} \right)} U
\end{aligned}
$$

这时可能有人会有疑问 —— 为什么要用逆的形式呢？因为在实践中，逆的形式的积（如 $\textcolor{blue}{E_{21}^{-1}E_{31}^{-1}E_{32}^{-1}}$）要比上面的积（如 $\textcolor{red}{E_{32}E_{31}E_{21}}$）要好。

举一个典型的例子，假设有一组三元矩阵的消元矩阵（其中 $E_{31} = I$），则：

$$
E_{32}E_{31} = \begin{bmatrix}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & -5 & 1
\end{bmatrix} \begin{bmatrix}
  1 & 0 & 0 \\
  -2 & 1 & 0 \\
  0 & 0 & 1
\end{bmatrix} = \begin{bmatrix}
  1 & 0 & 0 \\
  \textcolor{blue}{-2} & 1 & 0 \\
  \textcolor{red}{10} & \textcolor{blue}{-5} & 1
\end{bmatrix} = E
$$

可以观察到 —— 矩阵的对角线上都是 $1$，而上面都是 $0$。需要注意的是在 $\left( 3, 1 \right)$ 位置出现了 $\textcolor{red}{10}$。得到该数的原因是在 $E_{21}$ 中从行二减去了 $2$ 倍行一得到新行二，而在 $E_{32}$ 中实际上是从行三中减去了 $5$ 倍新行二，相当于减去了 $5$ 倍的原行二并减去了 $5 \times -2 = \textcolor{red}{-10}$ 倍的新行一，因此总共在行三中加上了 $\textcolor{red}{10}$ 倍的行一：

$$
\begin{aligned}
  & row_{3} - 5row_{2}' \\
  & = row_{3} - 5 \left( row_{2} - 2row_{1} \right) \\
  & = row_{3} - 5row_{2} + 10row_{1}
\end{aligned}
$$

现在计算其逆：

$$
E_{31}^{-1}E_{32}^{-1} = \begin{bmatrix}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & 5 & 1
\end{bmatrix} \begin{bmatrix}
  1 & 0 & 0 \\
  2 & 1 & 0 \\
  0 & 0 & 1
\end{bmatrix} = \begin{bmatrix}
  1 & 0 & 0 \\
  \textcolor{blue}{2} & 1 & 0 \\
  \textcolor{green}{0} & \textcolor{blue}{5} & 1
\end{bmatrix} = L
$$

可以发现，这时就没有出现上面前行影响后行的情况发生，这是因为运算顺序发生了变化。

故若没有行交换的情况，则消元乘数可以直接写入 $L$ 中而不需要任何运算。

也就是说可以在得到 $LU$ 的过程中把 $A$ 抛开（在之前的高斯消元中实际上也是这样做的），只需记住消元乘数和得到的 $U$ 对应的行，因为 $A$ 中的信息都包含于 $LU$。这是我们对于消元的全新认识。
