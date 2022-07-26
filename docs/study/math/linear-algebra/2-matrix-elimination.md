# 2. 矩阵消元

> ### 📂 章节目录
>
> ::: details 展开
>
> [[toc]]
>
> :::

## 高斯消元法

> #### 🪶 高斯消元法的历史
>
> 该方法以德国数学家高斯（Gauss）命名，由拉布扎比·伊丁特改进，发表于法国但实际上最早出现于中国古籍《九章算术》，成书于约公元前 150 年。

在线性方程组中的消元法和矩阵的消元法本质上是一样的。

在解线性方程组时通过对方程进行倍乘、加减等操作可以求得方程组的解。

而矩阵的消元则是通过行变换将矩阵对角线下的所有数字全部变成 $0$，从而可以回代到方程组中从而求解线性方程组的解。该方法也是软件中求解线性方程组的最常见算法。下面通过一个具体的例子来演示。

有以下线性方程组：

$$
\begin{aligned}
  x + 2y + z & = 0 \\
  3x + 8y + z & = 12 \\
  4y + z & = 2
\end{aligned}
$$

写成矩阵的形式也就是：

$$
A = \begin{bmatrix}
  1 & 2 & 1 \\
  3 & 8 & 1 \\
  0 & 4 & 1
\end{bmatrix}, b = \begin{bmatrix}
  0 \\
  12 \\
  2
\end{bmatrix}
$$

### 具体步骤

1. 首先，将矩阵左上角 $(1, 1)$ 位置的 $\textcolor{red}{1}$ 称之为**主元一**，这与线性方程中关键的 $x$ 的系数相对应。此时我们的目的是将除主元所在行之外的行中主元下方的位置都变成 $0$（也就是蓝色标记的位置）：

   $$
   \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{blue}{3} & 8 & 1 \\
     \textcolor{blue}{0} & 4 & 1
   \end{bmatrix}
   $$

   那么应该如何去做呢？类似线性方程组中的消元法（将除第一行方程之外所有行的方程中的 $x$ 消去），只需要用主元所在行下面的每一行减去主元所在行的适当倍数即可。显然，这里的第二行应该减去第一行的 $3 ÷ 1 = 3$ 倍；第三行应该减去第一行的 $0 ÷ 1 = 0$ 倍（也就是不用操作）：

   $$
   \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{blue}{3} & 8 & 1 \\
     \textcolor{blue}{0} & 4 & 1
   \end{bmatrix} \xrightarrow{(2, 1)} \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{green}{0} & 2 & -2 \\
     \textcolor{blue}{0} & 4 & 1
   \end{bmatrix}
   $$

   由于这一步第一个消元的位置是 $(2, 1)$，故用 $(2, 1)$ 作为此步的代号。

   $$
   \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{blue}{3} & 8 & 1 \\
     \textcolor{blue}{0} & 4 & 1
   \end{bmatrix} \xrightarrow{(2, 1)} \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{green}{0} & 2 & -2 \\
     \textcolor{blue}{0} & 4 & 1
   \end{bmatrix} \xrightarrow{(3, 1)} \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{green}{0} & 2 & -2 \\
     \textcolor{green}{0} & 4 & 1
   \end{bmatrix}
   $$

   由于 $(3, 1)$ 位置已经是 $0$ 了，故此步实际上不用做任何操作。

2. 接下来处理位于 $(2, 2)$ 位置的主元二 $\textcolor{red}{2}$，操作方法和第一步一样（在程序中可以通过递归来实现）:

   $$
   \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{green}{0} & \textcolor{red}{2} & -2 \\
     \textcolor{green}{0} & \textcolor{blue}{4} & 1
   \end{bmatrix} \xrightarrow{(3, 2)} \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{green}{0} & \textcolor{red}{2} & -2 \\
     \textcolor{green}{0} & \textcolor{green}{0} & 5
   \end{bmatrix}
   $$

3. 此时得到了位于 $(3, 3)$ 位置的主元三，由于矩阵对角线下的所有数字全部都已经变成 $0$，故消元结束。完整的消元步骤如下（省略了没有任何操作的 $(3, 1)$ 步骤）：

   $$
   A = \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{blue}{3} & 8 & 1 \\
     \textcolor{blue}{0} & 4 & 1
   \end{bmatrix} \xrightarrow{(2, 1)} \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{green}{0} & \textcolor{red}{2} & -2 \\
     \textcolor{green}{0} & \textcolor{blue}{4} & 1
   \end{bmatrix} \xrightarrow{(3, 2)} U = \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{green}{0} & \textcolor{red}{2} & -2 \\
     \textcolor{green}{0} & \textcolor{green}{0} & \textcolor{red}{5}
   \end{bmatrix}
   $$

   此时得到的矩阵称为上三角矩阵（Uppertriangular matrix，它只有上半部分的三角形中有数字），计为 $U$。

### 消元失效

正如线性方程组可能出现无解或多解的情况，矩阵消元可能会失效。规则也很简单 —— 主元不能为 $0$。

这也不难理解，类似线性方程组的求解，如果某一个方程有一个还未计算数值的未知数和其它 0 或多个已计算数值的未知数，而还未计算数值的未知数的系数为 $0$，则无法算出此未知数的具体数值。

回到矩阵消元，如果恰巧消元至某行时 $0$ 出现在了应该是主元的位置上，又因为主元不能为 $0$，此时可尝试通过行交换的方式解决 —— 也就是将下方的某行和此行交换，使得非 $0$ 数字出现在主元位置上使得消元得以继续。但如果 $0$ 出现在主元位置上且下方没有可供交换的行，则消元终止，并证明矩阵 $A$ 为不可逆矩阵（也叫奇异矩阵，在之后还将详细讨论），且线性方程组没有唯一解。例如消元得到 $\begin{bmatrix}
  \textcolor{red}{*} & * & * \\
  \textcolor{green}{0} & \textcolor{orange}{0} & * \\
  \textcolor{green}{0} & \textcolor{orange}{0} & *
\end{bmatrix}$ 或 $\begin{bmatrix}
  \textcolor{red}{*} & * & * \\
  \textcolor{green}{0} & \textcolor{red}{*} & * \\
  \textcolor{green}{0} & \textcolor{green}{0} & \textcolor{orange}{0}
\end{bmatrix}$（注意标注橙色的位置）。

## 回代

当进行高斯消元时，需要对等式右侧的 $b$ 向量做同样的乘法和加减法操作。在手算时可以通过应用增广矩阵方便计算（而 MATLAB 等软件是先算完 $A$ 再处理 $b$）。

### 增广矩阵

> #### 🧩 增广矩阵的定义
>
> 增广矩阵，又称广置矩阵，是在线性代数中系数矩阵的右边添上线性方程组等号右边的常数列得到的矩阵。

将 $b$ 插入矩阵 $A$ 之后形成最后一列，在消元过程中带着 $b$ 一起操作。

还是上面的线性方程组，将其写成增广矩阵的形式：

$$
\begin{bmatrix}
  1 & 2 & 1 & \textcolor{purple}{2} \\
  3 & 8 & 1 & \textcolor{purple}{12} \\
  0 & 4 & 1 & \textcolor{purple}{2}
\end{bmatrix}
$$

### 具体步骤

1. 应用增广矩阵后完整的步骤：

   $$
   A = \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 & \textcolor{purple}{2} \\
     \textcolor{blue}{3} & 8 & 1 & \textcolor{purple}{12} \\
     \textcolor{blue}{0} & 4 & 1 & \textcolor{purple}{2}
   \end{bmatrix} \xrightarrow{(2, 1)} \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 & \textcolor{purple}{2}\\
     \textcolor{green}{0} & \textcolor{red}{2} & -2 & \textcolor{purple}{6} \\
     \textcolor{green}{0} & \textcolor{blue}{4} & 1 & \textcolor{purple}{2}
   \end{bmatrix} \xrightarrow{(3, 2)} U = \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 & \textcolor{purple}{2} \\
     \textcolor{green}{0} & \textcolor{red}{2} & -2 & \textcolor{purple}{6} \\
     \textcolor{green}{0} & \textcolor{green}{0} & \textcolor{red}{5} & \textcolor{purple}{-10}
   \end{bmatrix}
   $$

   此时将 $Ax = b$ 转化为了 $Ux = c$，其中 $c = \begin{bmatrix}
     2 \\
     6 \\
     -10
   \end{bmatrix}$。

2. 下面开始回代。首先将最终的方程组写出来（也就是将 $Ux = c$ 写成线性方程组的形式）：

   $$
   \begin{aligned}
     x + 2y + z & = 2 \\
     2y - 2z & = 6 \\
     5z & = -10
   \end{aligned}
   $$

3. 依次计算 $z$, $y$, $x$ 的数值即可：

   $$
   \begin{aligned}
   z & = -10 ÷ 5 = -2 \\
   y & = (6 + 2z) ÷ 2 = (6 + 2 × (-2)) ÷ 2 = 1 \\
   x & = 2 - 2y - z = 2 - 2 × 1 - (-2) = 2
   \end{aligned}
   $$

## 矩阵运算

上述的消元步骤并没有用矩阵来表示，在尝试使用矩阵来描述这些变换之前，需要了解一些矩阵运算的相关知识。

### 右乘列向量

首先，复习一下上一节中的矩阵右乘列向量的计算方法：

$$
\begin{bmatrix}
  \textcolor{red}{a_{11}} & \textcolor{blue}{a_{12}} & \textcolor{green}{a_{13}} & \cdots & \textcolor{orange}{a_{1n}} \\
  \textcolor{red}{a_{21}} & \textcolor{blue}{a_{22}} & \textcolor{green}{a_{23}} & \cdots & \textcolor{orange}{a_{2n}} \\
  \textcolor{red}{a_{31}} & \textcolor{blue}{a_{32}} & \textcolor{green}{a_{33}} & \cdots & \textcolor{orange}{a_{3n}} \\
  \textcolor{red}{\vdots} & \textcolor{blue}{\vdots} & \textcolor{green}{\vdots} & \ddots & \textcolor{orange}{\vdots} \\
  \textcolor{red}{a_{n1}} & \textcolor{blue}{a_{n2}} & \textcolor{green}{a_{n3}} & \cdots & \textcolor{orange}{a_{nn}}
\end{bmatrix} \begin{bmatrix}
  \textcolor{red}{b_{1}} \\
  \textcolor{blue}{b_{2}} \\
  \textcolor{green}{b_{3}} \\
  \vdots \\
  \textcolor{orange}{b_{n}}
\end{bmatrix} = \textcolor{red}{b_{1}} \begin{bmatrix}
  \textcolor{red}{a_{11}} \\
  \textcolor{red}{a_{21}} \\
  \textcolor{red}{a_{31}} \\
  \textcolor{red}{\vdots} \\
  \textcolor{red}{a_{n1}}
\end{bmatrix} + \textcolor{blue}{b_{2}} \begin{bmatrix}
  \textcolor{blue}{a_{12}} \\
  \textcolor{blue}{a_{22}} \\
  \textcolor{blue}{a_{32}} \\
  \textcolor{blue}{\vdots} \\
  \textcolor{blue}{a_{n2}}
\end{bmatrix} + \textcolor{green}{b_{3}} \begin{bmatrix}
  \textcolor{green}{a_{13}} \\
  \textcolor{green}{a_{23}} \\
  \textcolor{green}{a_{33}} \\
  \textcolor{green}{\vdots} \\
  \textcolor{green}{a_{n3}}
\end{bmatrix} + \cdots + \textcolor{orange}{b_{n}} \begin{bmatrix}
  \textcolor{orange}{a_{1n}} \\
  \textcolor{orange}{a_{2n}} \\
  \textcolor{orange}{a_{3n}} \\
  \textcolor{orange}{\vdots} \\
  \textcolor{orange}{a_{nn}}
\end{bmatrix}
$$

也就是矩阵列向量的线性组合。

### 左乘行向量

现在介绍左乘行向量的计算方法：

$$
\begin{bmatrix}
  \textcolor{red}{b_{1}} & \textcolor{blue}{b_{2}} & \textcolor{green}{b_{3}} & \cdots & \textcolor{orange}{b_{n}}
\end{bmatrix} \begin{bmatrix}
  \textcolor{red}{a_{11}} & \textcolor{red}{a_{12}} & \textcolor{red}{a_{13}} & \textcolor{red}{\cdots} & \textcolor{red}{a_{1n}} \\
  \textcolor{blue}{a_{21}} & \textcolor{blue}{a_{22}} & \textcolor{blue}{a_{23}} & \textcolor{blue}{\cdots} & \textcolor{blue}{a_{2n}} \\
  \textcolor{green}{a_{31}} & \textcolor{green}{a_{32}} & \textcolor{green}{a_{33}} & \textcolor{green}{\cdots} & \textcolor{green}{a_{3n}} \\
  \vdots & \vdots & \vdots & \ddots & \vdots \\
  \textcolor{orange}{a_{n1}} & \textcolor{orange}{a_{n2}} & \textcolor{orange}{a_{n3}} & \textcolor{orange}{\cdots} & \textcolor{orange}{a_{nn}}
\end{bmatrix} = \textcolor{red}{b_{1}} \begin{bmatrix}
  \textcolor{red}{a_{11}} & \textcolor{red}{a_{12}} & \textcolor{red}{a_{13}} & \textcolor{red}{\cdots} & \textcolor{red}{a_{1n}}
\end{bmatrix} + \textcolor{blue}{b_{2}} \begin{bmatrix}
  \textcolor{blue}{a_{21}} & \textcolor{blue}{a_{22}} & \textcolor{blue}{a_{23}} & \textcolor{blue}{\cdots} & \textcolor{blue}{a_{2n}}
\end{bmatrix} + \textcolor{green}{b_{3}} \begin{bmatrix}
  \textcolor{green}{a_{31}} & \textcolor{green}{a_{32}} & \textcolor{green}{a_{33}} & \textcolor{green}{\cdots} & \textcolor{green}{a_{3n}}
\end{bmatrix} + \cdots + \textcolor{orange}{b_{n}} \begin{bmatrix}
  \textcolor{orange}{a_{n1}} & \textcolor{orange}{a_{n2}} & \textcolor{orange}{a_{n3}} & \textcolor{orange}{\cdots} & \textcolor{orange}{a_{nn}}
\end{bmatrix}
$$

与右乘列向量相对称，矩阵左乘行向量则是对矩阵的行向量进行线性组合。

### 矩阵乘法

将左乘行向量和右乘列向量的计算方法综合来看，就得到了矩阵的乘法：

$$
\begin{bmatrix}
  \textcolor{red}{a_{11}} & \textcolor{red}{a_{12}} & \textcolor{red}{\cdots} & \textcolor{red}{a_{1n}} \\
  \textcolor{blue}{a_{21}} & \textcolor{blue}{a_{22}} & \textcolor{blue}{\cdots} & \textcolor{blue}{a_{2n}} \\
  \vdots & \vdots & \ddots & \vdots \\
  \textcolor{green}{a_{n1}} & \textcolor{green}{a_{n2}} & \textcolor{green}{\cdots} & \textcolor{green}{a_{nn}}
\end{bmatrix} \begin{bmatrix}
  \textcolor{orange}{b_{11}} & \textcolor{purple}{b_{12}} & \cdots & \textcolor{pink}{b_{1n}} \\
  \textcolor{orange}{b_{21}} & \textcolor{purple}{b_{22}} & \cdots & \textcolor{pink}{b_{2n}} \\
  \textcolor{orange}{\vdots} & \textcolor{purple}{\vdots} & \ddots & \textcolor{pink}{\vdots} \\
  \textcolor{orange}{b_{n1}} & \textcolor{purple}{b_{n2}} & \cdots & \textcolor{pink}{b_{nn}}
\end{bmatrix} = \begin{bmatrix}
  \textcolor{red}{a_{11}} \times \textcolor{orange}{b_{11}} + \textcolor{red}{a_{12}} \times \textcolor{orange}{b_{21}} + \cdots + \textcolor{red}{a_{1n}} \times \textcolor{orange}{b_{n1}} & \textcolor{red}{a_{11}} \times \textcolor{purple}{b_{12}} + \textcolor{red}{a_{12}} \times \textcolor{purple}{b_{22}} + \cdots + \textcolor{red}{a_{1n}} \times \textcolor{purple}{b_{n2}} & \cdots & \textcolor{red}{a_{11}} \times \textcolor{pink}{b_{1n}} + \textcolor{red}{a_{12}} \times \textcolor{pink}{b_{2n}} + \cdots + \textcolor{red}{a_{1n}} \times \textcolor{pink}{b_{nn}} \\
  \textcolor{blue}{a_{21}} \times \textcolor{orange}{b_{11}} + \textcolor{blue}{a_{22}} \times \textcolor{orange}{b_{21}} + \cdots + \textcolor{blue}{a_{2n}} \times \textcolor{orange}{b_{n1}} & \textcolor{blue}{a_{21}} \times \textcolor{purple}{b_{12}} + \textcolor{blue}{a_{22}} \times \textcolor{purple}{b_{22}} + \cdots + \textcolor{blue}{a_{2n}} \times \textcolor{purple}{b_{n2}} & \cdots & \textcolor{blue}{a_{21}} \times \textcolor{pink}{b_{1n}} + \textcolor{blue}{a_{22}} \times \textcolor{pink}{b_{2n}} + \cdots + \textcolor{blue}{a_{2n}} \times \textcolor{pink}{b_{nn}} \\
  \vdots & \vdots & \ddots & \vdots \\
  \textcolor{green}{a_{n1}} \times \textcolor{orange}{b_{11}} + \textcolor{green}{a_{n2}} \times \textcolor{orange}{b_{21}} + \cdots + \textcolor{green}{a_{nn}} \times \textcolor{orange}{b_{n1}} & \textcolor{green}{a_{n1}} \times \textcolor{purple}{b_{12}} + \textcolor{green}{a_{n2}} \times \textcolor{purple}{b_{22}} + \cdots + \textcolor{green}{a_{nn}} \times \textcolor{purple}{b_{n2}} & \cdots & \textcolor{green}{a_{n1}} \times \textcolor{pink}{b_{1n}} + \textcolor{green}{a_{n2}} \times \textcolor{pink}{b_{2n}} + \cdots + \textcolor{green}{a_{nn}} \times \textcolor{pink}{b_{nn}}
\end{bmatrix}
$$

::: tip 💡 tip

这里仅仅是对矩阵乘法的简单介绍，在下一节中还将深入讨论。

:::

### 单位矩阵

其中，特殊地，任何一个矩阵左乘或右乘单位矩阵，结果等于它自身，例如：

$$
\begin{bmatrix}
  \textcolor{red}{1} & 0 & 0 \\
  0 & \textcolor{red}{1} & 0 \\
  0 & 0 & \textcolor{red}{1}
\end{bmatrix} \begin{bmatrix}
  1 & 2 & 1 \\
  3 & 8 & 1 \\
  0 & 4 & 1
\end{bmatrix} = \begin{bmatrix}
  1 & 2 & 1 \\
  3 & 8 & 1 \\
  0 & 4 & 1
\end{bmatrix}
$$

这等价于对每一行来说取 `1` 个对应的该行的行向量而不取其它行的行向量来进行线性组合，每一行的结果自然就不会改变。

> #### 🧩 单位矩阵的定义
>
> n 阶单位矩阵，是一个 $n \times n$ 的方形矩阵，其主对角线元素为 $1$，其余元素为 $0$，使用 $I$ 表示。

## 消元矩阵

现在再来看如何使用矩阵描述消元步骤中的矩阵变换。

1. 以步骤 $(2, 1)$ 为例，实际上这个问题就是在问左乘一个什么样的矩阵可以得到右边经过 $(2, 1)$ 变化的矩阵：

   $$
   \begin{bmatrix}
     ? & ? & ? \\
     ? & ? & ? \\
     ? & ? & ?
   \end{bmatrix} \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{blue}{3} & 8 & 1 \\
     \textcolor{blue}{0} & 4 & 1
   \end{bmatrix} = \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{green}{0} & 2 & -2 \\
     \textcolor{green}{0} & 4 & 1
   \end{bmatrix}
   $$

   对于此问题我们可以对该矩阵一行一行来分析。

   对于该矩阵的第一行来说，为了使结果中的矩阵第一行保持不变，需要写成：

   $$
   \begin{bmatrix}
     1 & 0 & 0
   \end{bmatrix} \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{blue}{3} & 8 & 1 \\
     \textcolor{blue}{0} & 4 & 1
   \end{bmatrix} = \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1
   \end{bmatrix}
   $$

   这等价于取 `1` 个行一的行向量而不取其它行的行向量来进行线性组合，结果自然就不会改变。

   同理，第三行也是这样：

   $$
   \begin{bmatrix}
     0 & 0 & 1
   \end{bmatrix} \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{blue}{3} & 8 & 1 \\
     \textcolor{blue}{0} & 4 & 1
   \end{bmatrix} = \begin{bmatrix}
     \textcolor{green}{0} & 4 & 1
   \end{bmatrix}
   $$

   现在来看关键的第二行：

   $$
   \begin{bmatrix}
     -3 & 1 & 0
   \end{bmatrix} \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{blue}{3} & 8 & 1 \\
     \textcolor{blue}{0} & 4 & 1
   \end{bmatrix} = \begin{bmatrix}
     \textcolor{green}{0} & 2 & -2
   \end{bmatrix}
   $$

   这相当于 `-3` 倍行一加上 `1` 倍行二。

   综上所述，得到以下结果：

   $$
   \begin{bmatrix}
     1 & 0 & 0 \\
     -3 & 1 & 0 \\
     0 & 0 & 1
   \end{bmatrix} \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{blue}{3} & 8 & 1 \\
     \textcolor{blue}{0} & 4 & 1
   \end{bmatrix} = \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{green}{0} & 2 & -2 \\
     \textcolor{green}{0} & 4 & 1
   \end{bmatrix}
   $$

   将左乘的这个矩阵称为初等矩阵，计作 $E_{21}$（elementray 和 elimination 的首字母均为 `E`，下标为 $21$ 是由于它表示位置 $(2, 1)$ 上的变换）。

> #### 🧩 初等矩阵的定义
>
> 初等矩阵（elementary matrix，又称为基本矩阵）是一个与单位矩阵只有微小区别的矩阵。
>
> 具体来说，一个 n 阶单位矩阵 $E$ 经过一次初等行变换或一次初等列变换所得矩阵称为 n 阶初等矩阵。

2. 同理，步骤 $(3, 2)$ 通过左乘 $E_{32}$ 来变换：

   $$
   \begin{bmatrix}
     1 & 0 & 0 \\
     0 & 1 & 0 \\
     0 & -2 & 1
   \end{bmatrix} \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{green}{0} & \textcolor{red}{2} & -2 \\
     \textcolor{green}{0} & \textcolor{blue}{4} & 1
   \end{bmatrix} = \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{green}{0} & \textcolor{red}{2} & -2 \\
     \textcolor{green}{0} & \textcolor{green}{0} & 5
   \end{bmatrix}
   $$

3. 最后将这些步骤综合起来，将这些矩阵合成一个来考虑。现将完整步骤列出：

   $$
   \begin{bmatrix}
     1 & 0 & 0 \\
     0 & 1 & 0 \\
     0 & -2 & 1
   \end{bmatrix} \left( \begin{bmatrix}
     1 & 0 & 0 \\
     -3 & 1 & 0 \\
     0 & 0 & 1
   \end{bmatrix} \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{blue}{3} & 8 & 1 \\
     \textcolor{blue}{0} & 4 & 1
   \end{bmatrix} \right) = \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{green}{0} & \textcolor{red}{2} & -2 \\
     \textcolor{green}{0} & \textcolor{green}{0} & \textcolor{red}{5}
   \end{bmatrix}
   $$

   也就是 $E_{32} \left( E_{21} A \right) = U$。

4. 那么现在问题来了 —— 有没有矩阵可以一次性解决这个问题，将 $A$ 变换为 $U$？

   答案其实很简单，只需要将两个初等矩阵放在一起即可，也就是 $\left( E_{32} E_{21} \right) = E$。这里用到了矩阵乘法的结合律。

   自此，整个消元步骤都使用矩阵来表示了，可以简单的表示为 $EA = U$。

   方程 $Ax = b$ 的解也满足方程 $Ux = EAx = Eb = c$，因此问题转化为 $Ux = c$。

> #### 🧩 矩阵乘法的结合律
>
> $\left( AB \right) C = A \left( BC \right)$

## 置换矩阵

这里需要再谈一类矩阵，叫做置换矩阵。当一个矩阵乘上一个置换矩阵时，所得到的是原来矩阵的横行（左乘置换矩阵）或纵列（右乘置换矩阵）经过置换后得到的矩阵。

> #### 🧩 置换矩阵的定义
>
> 置换矩阵（permutation matrix）是一种系数只由 $0$ 和 $1$ 组成的方阵。置换矩阵的每一行和每一列都恰好有一个 $1$，其余元素都是 $0$。

### 行交换

以 $2 \times 2$ 的矩阵为例，为了将所有行反向排列，需要左乘如下置换矩阵：

$$
\begin{bmatrix}
  0 & \textcolor{red}{1} \\
  \textcolor{red}{1} & 0
\end{bmatrix} \begin{bmatrix}
  a & b \\
  c & d
\end{bmatrix} = \begin{bmatrix}
  c & d \\
  a & b
\end{bmatrix}
$$

### 列交换

以 $2 \times 2$ 的矩阵为例，为了将所有列反向排列，需要右乘如下置换矩阵：

$$
\begin{bmatrix}
  a & b \\
  c & d
\end{bmatrix} \begin{bmatrix}
  0 & \textcolor{red}{1} \\
  \textcolor{red}{1} & 0
\end{bmatrix} = \begin{bmatrix}
  b & a \\
  d & c
\end{bmatrix}
$$

::: tip 💡 tip

左右乘效果不同展示了矩阵运算不符合交换律的性质。

:::

## 逆矩阵

为了引入逆矩阵的概念，讨论消元矩阵的逆矩阵。

消元矩阵的作用也就是抵消消元矩阵对原矩阵的消元效果。以 $E_{21}$（$\begin{bmatrix}
  1 & 0 & 0 \\
  -3 & 1 & 0 \\
  0 & 0 & 1
\end{bmatrix}$） 的逆矩阵为例，其作用等价于将于让第二行的行向量减去 `3` 倍第一行的行向量。那么其逆向操作就是重新让第二行的行向量加回第一行的 `3` 倍，故其逆矩阵如下：

$$
\begin{bmatrix}
  1 & 0 & 0 \\
  3 & 1 & 0 \\
  0 & 0 & 1
\end{bmatrix}
$$

将其记为 $E_{21}^{-1}$。

其满足 $E_{21}^{-1}E_{21} = I$，即：

$$
\begin{bmatrix}
  1 & 0 & 0 \\
  3 & 1 & 0 \\
  0 & 0 & 1
\end{bmatrix} \begin{bmatrix}
  1 & 0 & 0 \\
  -3 & 1 & 0 \\
  0 & 0 & 1
\end{bmatrix} = \begin{bmatrix}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & 0 & 1
\end{bmatrix}
$$

> #### 🧩 逆矩阵的定义
>
> 逆矩阵（inverse matrix，又称乘法反方阵、反矩阵）。
>
> 给定一个 $n$ 阶方阵 $A$，若存在 $n$ 阶方阵 $B$，使得 $AB = BA = I_{n}$，其中 $I_{n}$ 为 $n$ 阶[单位矩阵](#🧩-单位矩阵的定义)，则称 $A$ 是可逆的，且 $B$ 是 $A$ 的逆矩阵，记作 $A^{-1}$。
