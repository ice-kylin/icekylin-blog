# 2. 数论基础

> ### 📂 章节目录
>
> ::: details 展开
>
> [[toc]]
>
> :::

## 📗 重点笔记

## 2.1 整除性和带余除法

### 2.1.1 整除性

- 设 `a`、`b`、`m` 均为整数，若存在某个 `m` 使得 `a = mb` 成立，则称非零数 `b` 整除 `a`
  - `b`（整）除 `a` 通常用 `b|a` 来表示
  - 若 `b|a`，则 `b` 是 `a` 的一个**因子**
- 简单的整数整除的性质
  - 若 `a|1`，则 `a = ±1`
  - 若 `a|b` 且 `b|a` 则 `a = ±b`
  - 任何不等于零的数整除 `0`
    - > 💡 也就是说任何不等于零的整数都是 `0` 的因子
  - 若 `a|b` 且 `b|c`，则 `a|c`
  - 对任意整数 `m`、`n`，若 `b|g` 且 `b|h`，则可得出 `b|(mg + nh)`

### 2.1.2 带余除法

- 对给定的任意一个正整数 `n` 和任意非负整数 `a`，若用 `n` 除 `a`，得到整数商 `q` 和整数余数 `r`，则满足以下关系式
  - `a = qn + r, 0 <= r < n; q = [a / n]`
    - `[x]` 表示小于等于 `x` 的最大整数
    - 此式称为带余除法

## 2.2 欧几里得算法

> 💡 欧几里得算法又称辗转相除法

- 两个整数是互素的，当且仅当它们只有一个正整数公因子 `1`

### 2.2.1 最大公因子

- 用 `gcd(a, b)` 表示 `a` 的最大公因子
  - `a` 和 `b` 的最大公因子是能同时整除 `a` 和 `b` 的最大整数
  - `gcd(0, 0) = 0`
  - `gcd(a, b) = max[k, 满足 k|a 且 k|b]`
  - `gcd(a, b) = gcd(|a|, |b|)`
  - `gcd(a, 0) = |a|`
- 若 `gcd(a, b) = 1`，则 `a`、`b` 互质

### 2.2.2 求最大公因子

1. 因为 `gcd(|a|, |b|) = gcd(a, b)`，所以假定 `a >= b > 0`
2. 使用带余除法，`b` 除 `a` 可以表示为

- `a = q1 × b + r1, 0 <= r1 < b`

3. 分类讨论

- 首先考虑 `r1 = 0` 的情况
  - 可知 `b` 整除 `a`，且 `a` 和 `b` 的公因子中不存在比 `b` 更大的 数
  - 所以有 `d = gcd(a, b) = b`
- 另一种情况是 `r1 != 0`
  - 可知一定有 `d|r1`
    - 因为由因子的基本性质可知：存在 `d|a` 和 `d|b`，那么一定有 `d| (a - q1 × b)`（对任意整数 `m`、`n`，若 `b|g` 且 `b|h`，则可得 出 `b|(mg + nh)`），即 `d|r1`
  - `d = gcd(b, r1)`
    1. 因为 `d|b` 且 `d|r1`，所以任意一个 `b` 和 `r1` 的公因子 `c` 有 `c|(q1 × b + r1) = a`
    2. 因此 `c` 整除 `a` 和 `b`，所以一定有 `c <= d`
  - > 💡 简而言之，根据相关性质，`d|r1`、`d|b` 且 `c` 整除 `a` 和 `b`
    >
    > 所以最大的 `c` 就是 `d`

:::: code-group
::: code-group-item Haskell

```hs
gcd' :: Int -> Int -> Int
gcd' x y
  | x < 0 || y < 0 = gcd' (abs x) (abs y)
  | x < y = gcd' y x
  | y == 0 = x
  | otherwise = gcd' y (x `mod` y)
```

:::
::::

## 2.3 模运算

### 2.3.1 模

- 如果 `a` 是一个整数，`n` 是正整数，则定义 `a` 除以 `b` 所得的余数为 `a 模 n`，整数 `n` 称为模数
  - `a = qn + r, 0 <= r < n; q = [a / n]`
  - `a = [a / n] × n + (a mod n)`
  - > 💡 只要 `n` 是正整数，模数永远是正数
    >
    > 言外之意，模数正负和 `n` 一致
- 若 `(a mod n) = (b mod n)`，则称整数 `a` 和 `b` 是模 `n` 同余的，可以表示为 `a ≡ b(mod n)`

### 2.3.2 同余的性质

1. 若 `n|(a - b)`，则 `a ≡ b(mod n)`

- 因为若 `n|(a - b)`，则存在某个 `k` 使得 `(a - b) = kn`
- 于是可知 `a = b + kn`
- 因此 `(a mod n) = (b + kn 除以 n 的余数) = (b 除以 n 的余数) = (b mod n)`

2. 若 `a ≡ b(mod n)`，则有 `b ≡ a(mod n)`
3. 若 `a ≡ b(mod n)`、`b ≡ c(mod n)`，则有 `a ≡ c(mod n)`

### 2.3.3 模算术运算

1. `[(a mod n) + (b mod n)] mod n = (a + b) mod n`
2. `[(a mod n) - (b mod n)] mod n = (a - b) mod n`
3. `[(a mod n) × (b mod n)] mod n = (a × b) mod n`

- 以模 `8` 运算为例
  - 模运算中对于每一个整数存在加法逆元
    - 整数 `x` 的加法逆元 `y` 是使得 `(x + y) mod 8 = 0` 的值
  - 并非所有整数模 `8` 都有乘法逆元
    - 整数 `x` 的乘法逆元 `y` 是使得 `x × y mod 8 = 1` 的值

### 2.3.4 模运算的性质

- 定义比 `n` 小的非负整数集合为 `Zn`
  - `Zn = {0, 1, ..., (n - 1)}`
  - 这个集合称为剩余类集，或模 `n` 的剩余类
  - `Zn` 中的每一个整数都代表一个剩余类
    - 将模 `n` 的剩余类表示为 `[0]`, `[1]`, ..., `[n - 1]`
    - 其中 `[r] = {a | a 是一个整数, a ≡ r(mod n)}`
    - 在剩余类的所有整数中，通常用最小非负整数来代表这个剩余类
      - 寻找与 `k` 是模 `n` 同余的最小非负整数的过程，称为模 `n` 的 `k` 约化
    - `Zn` 是有乘法单位元的交换环
      - > 💡 如满足乘法交换律，则称为交换环

| 性质        | 表达式                                                                                   |
| ----------- | ---------------------------------------------------------------------------------------- |
| 交换律      | `(w + x) mod n = (x + w) mod n`; `(w × x) mod n = (x × w) mod n`                         |
| 结合律      | `[(w + x) + y] mod n = [w + (x + y)] mod n`; `[(w × x) × y] mod n = [w × (x × y)] mod n` |
| 分配律      | `[w × (x + y)] mod n = [(w × x) + (w × y)] mod n`                                        |
| 单位元      | `(0 + w) mod n = w mod n`; `(1 × w) mod n = w mod n`                                     |
| 加法逆 (-w) | 对于每个 `w ∈ Zn` 都存在一个 `z` 使得 `w + z ≡ 0 mod n`                                  |

- 若 `(a + b) ≡ (a + c)(mod n)，则 b ≡ c(mod n)`
- 若 `a` 和 `n` 互素：若 `(a × b) ≡ (a × c)(mod n)`，则 `b ≡ c(mod n)`
  - 可以说该式同乘法逆元的存在性是一致的
  - 将 a 的乘法逆元施加在该式两边得
    - `((a^-1)ab) ≡ ((a^-1)ac)(mod n)`
    - `b ≡ c(mod n)`
  - 原因是对于任何一般的模数 `n`，如果 `a` 和 `n` 有任何公因子的话，用乘数 `a` 依次作用于 `0` 到 `n - 1` 的所有整数将不会产生 `a` 的一个完整的剩余类集

### 2.3.5 回顾欧几里得算法

- 欧几里得算法基于下面的定理：对任意整数 `a`、`b`，且 `a >= b >= 0`
  - `gcd(a, b) = gcd(b, a mod b)`

### 2.3.6 扩展欧几里得算法

- 对于给定的整数 `a` 和 `b`，扩展的欧几里得算法不仅可以计算出最大公因子 `d`，而且可以得到两个整数 `x` 和 `y`，满足如下方程
  - `ax + by = d = gcd(a, b)`
  - `x` 和 `y` 一定具有相反的正负号
  - 对于给定的整数 `a` 和 `b`，可以表示为 `ax + by` 的最小正整数等于 `gcd(a, b)`

1. 假设每个步骤 `i` 都可找到 x<sub>i</sub> 和 y<sub>i</sub> 满足 r<sub>i</sub> = ax<sub>i</sub> + by<sub>i</sub>

> a = q<sub>1</sub>b + r<sub>1</sub>, r<sub>1</sub> = ax<sub>1</sub> + by<sub>1</sub>
>
> b = q<sub>2</sub>r<sub>1</sub> + r<sub>2</sub>, r<sub>2</sub> = ax<sub>2</sub> + by<sub>2</sub>
>
> r<sub>1</sub> =q<sub>3</sub>r<sub>2</sub> + r<sub>3</sub>, r<sub>3</sub> = ax<sub>3</sub> + by<sub>3</sub>
>
> ...
>
> r<sub>n - 2</sub> = q<sub>n</sub>r<sub>n - 1</sub> + r<sub>n</sub>, r<sub>n</sub> = ax<sub>n</sub> + by<sub>n</sub>
>
> r<sub>n - 1</sub> = q<sub>n + 1</sub>r<sub>n</sub> + 0

2. 移项得

> r<sub>i</sub> = r<sub>i - 2</sub> - r<sub>i - 1</sub>q<sub>i</sub>

3. 从 `i - 1` 到 `i - 2` 行，可得到值

> r<sub>i - 2</sub> = ax<sub>i - 2</sub> + by<sub>i - 2</sub>
>
> r<sub>i - 1</sub> = ax<sub>i - 1</sub> + by<sub>i - 1</sub>

4. 代入 2 式可得

> ri
>
> = (ax<sub>i - 2</sub> + by<sub>i - 2</sub>) - (ax<sub>i - 1</sub> + by<sub>i - 1</sub>)q<sub>i</sub>
>
> = a(x<sub>i</sub> - 2 - q<sub>i</sub>x<sub>i - 2</sub>) + b(y<sub>i - 2</sub> - q<sub>i</sub>y<sub>i - 1</sub>)

5. 因为已假设 r<sub>i</sub> = ax<sub>i</sub> + by<sub>i</sub>，因此

> x<sub>i</sub> = x<sub>i - 2</sub> - q<sub>i</sub>x<sub>i - 1</sub>
>
> y<sub>i</sub> = y<sub>i - 2</sub> - q<sub>i</sub>y<sub>i - 1</sub>

:::: code-group
::: code-group-item Haskell

```hs
egcd :: Int -> Int -> (Int, Int, Int)
egcd a b
  | a < 0 || b < 0 = egcd (abs a) (abs b)
  | a < b = egcd b a
  | otherwise = (\(a, _, _, _, b, c) -> (a, b, c)) (egcd' (a, b, 0, 1, 1, 0))

-- x: xn-1
-- y: yn-1
-- x': xn-2
-- y': yn-2
egcd' :: (Int, Int, Int, Int, Int, Int) -> (Int, Int, Int, Int, Int, Int)
egcd' (a, 0, x, y, x', y') = (a, 0, x, y, x', y')
egcd' (a, b, x, y, x', y') = egcd' (b, r, x' - q * x, y' - q * y, x, y)
  where
    q = a `div` b
    r = a `mod` b
```

:::
::::

## 2.4 素数

- 整数 `p > 1` 是素数，当且仅当它只有因子 `±1` 和 `±p`
- 任意整数 `a > 1` 都可以唯一地因式分解为 a = p<sub>1</sub><sup>a<sub>1</sub></sup> × p<sub>2</sub><sup>a<sub>2</sub></sup> × ... × p<sub>t</sub><sup>a<sub>i</sub></sup>
  - 式中 p<sub>1</sub>、p<sub>2</sub>、...、p<sub>t</sub> 均是素数，p<sub>1</sub> ＜ p<sub>2</sub> ＜ ... ＜ p<sub>t</sub>，且所有 a<sub>i</sub> 都是正整数
- 两数相乘即对应指数相加
- 假设 a = ,b = ,如果 `a|b`，那么对任意的 `p ∈ P` 有 a<sub>p</sub> ＜ b<sub>p</sub>
- 如果 `k = gcd(a, b)`，那么对任意 `p ∈ P`，k<sub>p</sub> = min(a<sub>p</sub>, b<sub>p</sub>)

## 2.5 费马定理和欧拉定理

### 2.5.1 费马定理

- 若 `p` 是素数，`a` 是正整数且不能被 `p` 整除，则 a<sup>p - 1</sup> ≡ 1(mod p)
  - > 💡 也就是 a<sup>p - 1</sup> mod p = 1
    >
    > 💡 `p`、`a` 互素
- 若 `p` 是素数且 `a` 是任意正整数，则 a<sup>p</sup> ≡ a mod p
  - > 💡 不要求 `p`、`a` 互素

### 2.5.2 欧拉函数

- 欧拉函数 `ø(n)` 指小于 n 且与 n 互素的正整数的个数
  - 习惯上，`ø(1) = 1`
  - 显然，对素数 p，有 `ø(p) = p - 1`
  - 假设有两个素数 `p` 和 `q`，`p ≠ q`，那么对于 `n = pq`，有
    - `ø(n) = ø(pq) = ø(p) × ø(q) = (p - 1) × (q - 1)`

### 2.5.3 欧拉定理

- 对任意素数的 a 和 n，有 a<sup>ø(n)</sup> ≡ 1(mod n)
  - > 💡 也就是 a<sup>ø(n)</sup> mod n = 1
    >
    > 💡 `n`、`a` 互素
- a<sup>ø(n) + 1</sup> ≡ a(mod n)
  - > 💡 不要求 `n`、`a` 互素

## 2.6 素性测试

### 2.6.1 Miller-Rabin 算法

- `n ≥ 3` 的奇整数可表示如下
  - n - 1 = 2<sup>k</sup>q, k > 0, q 是奇数
    - 用 `2` 除 `n - 1`，直到所得结果为奇数（`q`）
    - 此时共做了 `k` 次除法
- 素数的两个性质
  - 若 `p` 是素数，`a` 是小于 `p` 的正整数（💡 此时 `p` 和 `a` 必定互素），则 a<sup>2</sup> mod p = 1，当且仅当
    - `a mod p = 1` 或
    - `a mod p = -1 mod p = p - 1`
  - 设 p 是大于 2 的素数，则 p - 1 = 2<sup>k</sup>q，其中 k > 0，q 为奇数。设 a 是整数且 1 < a < p - 1，则有下面两个条件之一成立
    - a<sup>q</sup> 模 `p` 和 `1` 同余，即 a<sup>q</sup> mod p = 1 或 a<sup>q</sup> ≡ 1(mod p)
    - 整数 a<sup>q</sup>、a<sup>2q</sup>、a<sup>4q</sup>、...、a<sup>2<sup>k-1</sup>q</sup> 中存在一个数，模 `p` 时和 `-1` 同余，即存在一个 `j (1 ≤ j ≤ k)` 满足 a<sup>2<sup>j - 1</sup>q</sup> mod p = -1 mod p = p - 1，或 a<sup>2<sup>j - 1</sup></sup> ≡ -1(mod p)
- 证明
  1. 若 n 是素数，则由费马定理可知，a<sup>n - 1</sup> ≡ 1(mod n)
  2. 由于 p - 1 = 2<sup>k</sup>q，则 a<sup>p - 1</sup> mod p = a<sup>2<sup>k - 1</sup>q</sup> mod p = 1
  3. 因此，如果看到下列数列
  - a<sup>q</sup> mod p, a<sup>2q</sup> mod p, ..., a<sup>2<sup>k - 1</sup>q</sup> mod p
  - 就知道最后的数为 `1`，并且每一个数都是前一个数的平方
  4. 因此下面两条中必有一条是正确的
  - 数列中的第一个数为 `1`，那么其后的所有数都为 `1`
  - 数列中有些数不为 `1`，但它们的平方模 `p` 后为 `1`
    - 根据素数第一性质，可知满足此条件的唯一整数为 `p - 1`
    - 因此数列中必有一个数为 `p - 1`
- 算法
  1. 找出整数 `k`、`q`，其中 `k > 0`、`q` 是奇数，使 (n - 1 = 2<sup>k</sup>q)
  2. 随机选取整数 `a, 1 < a < n - 1`
  3. 如果 a<sup>q</sup> mod n = 1，则返回不确定
  - 否则遍历 `j` 从 `0` 到 `k - 1`
    - 如果 a<sup>2<sup>j</sup>q</sup> mod n = n - 1，则返回不确定
  4. 返回和数

### 2.6.2 一个确定性的素性判断算法

- 确定性的 AKS 算法并没有 Miller-Rabin 算法快，因此它未替代古老的概率算法

### 2.6.3 素数的分布

## 2.7 中国剩余定理

## 2.8 离散对数

### 2.8.1 模 n 的整数幂

### 2.8.2 模运算对数

### 2.8.3 离散对数的计算
