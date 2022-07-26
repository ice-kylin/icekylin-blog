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
