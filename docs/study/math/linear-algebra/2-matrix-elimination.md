# 2. ç©éµæ¶å

> ### ð ç« èç®å½
>
> ::: details å±å¼
>
> [[toc]]
>
> :::

## é«æ¯æ¶åæ³

> #### ðª¶ é«æ¯æ¶åæ³çåå²
>
> è¯¥æ¹æ³ä»¥å¾·å½æ°å­¦å®¶é«æ¯ï¼Gaussï¼å½åï¼ç±æå¸ææ¯Â·ä¼ä¸ç¹æ¹è¿ï¼åè¡¨äºæ³å½ä½å®éä¸ææ©åºç°äºä¸­å½å¤ç±ãä¹ç« ç®æ¯ãï¼æä¹¦äºçº¦å¬åå 150 å¹´ã

å¨çº¿æ§æ¹ç¨ç»ä¸­çæ¶åæ³åç©éµçæ¶åæ³æ¬è´¨ä¸æ¯ä¸æ ·çã

å¨è§£çº¿æ§æ¹ç¨ç»æ¶éè¿å¯¹æ¹ç¨è¿è¡åä¹ãå åç­æä½å¯ä»¥æ±å¾æ¹ç¨ç»çè§£ã

èç©éµçæ¶ååæ¯éè¿è¡åæ¢å°ç©éµå¯¹è§çº¿ä¸çæææ°å­å¨é¨åæ $0$ï¼ä»èå¯ä»¥åä»£å°æ¹ç¨ç»ä¸­ä»èæ±è§£çº¿æ§æ¹ç¨ç»çè§£ãè¯¥æ¹æ³ä¹æ¯è½¯ä»¶ä¸­æ±è§£çº¿æ§æ¹ç¨ç»çæå¸¸è§ç®æ³ãä¸é¢éè¿ä¸ä¸ªå·ä½çä¾å­æ¥æ¼ç¤ºã

æä»¥ä¸çº¿æ§æ¹ç¨ç»ï¼

$$
\begin{aligned}
  x + 2y + z & = 0 \\
  3x + 8y + z & = 12 \\
  4y + z & = 2
\end{aligned}
$$

åæç©éµçå½¢å¼ä¹å°±æ¯ï¼

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

### å·ä½æ­¥éª¤

1. é¦åï¼å°ç©éµå·¦ä¸è§ $(1, 1)$ ä½ç½®ç $\textcolor{red}{1}$ ç§°ä¹ä¸º**ä¸»åä¸**ï¼è¿ä¸çº¿æ§æ¹ç¨ä¸­å³é®ç $x$ çç³»æ°ç¸å¯¹åºãæ­¤æ¶æä»¬çç®çæ¯å°é¤ä¸»åæå¨è¡ä¹å¤çè¡ä¸­ä¸»åä¸æ¹çä½ç½®é½åæ $0$ï¼ä¹å°±æ¯èè²æ è®°çä½ç½®ï¼ï¼

   $$
   \begin{bmatrix}
     \textcolor{red}{1} & 2 & 1 \\
     \textcolor{blue}{3} & 8 & 1 \\
     \textcolor{blue}{0} & 4 & 1
   \end{bmatrix}
   $$

   é£ä¹åºè¯¥å¦ä½å»åå¢ï¼ç±»ä¼¼çº¿æ§æ¹ç¨ç»ä¸­çæ¶åæ³ï¼å°é¤ç¬¬ä¸è¡æ¹ç¨ä¹å¤ææè¡çæ¹ç¨ä¸­ç $x$ æ¶å»ï¼ï¼åªéè¦ç¨ä¸»åæå¨è¡ä¸é¢çæ¯ä¸è¡åå»ä¸»åæå¨è¡çéå½åæ°å³å¯ãæ¾ç¶ï¼è¿éçç¬¬äºè¡åºè¯¥åå»ç¬¬ä¸è¡ç $3 Ã· 1 = 3$ åï¼ç¬¬ä¸è¡åºè¯¥åå»ç¬¬ä¸è¡ç $0 Ã· 1 = 0$ åï¼ä¹å°±æ¯ä¸ç¨æä½ï¼ï¼

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

   ç±äºè¿ä¸æ­¥ç¬¬ä¸ä¸ªæ¶åçä½ç½®æ¯ $(2, 1)$ï¼æç¨ $(2, 1)$ ä½ä¸ºæ­¤æ­¥çä»£å·ã

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

   ç±äº $(3, 1)$ ä½ç½®å·²ç»æ¯ $0$ äºï¼ææ­¤æ­¥å®éä¸ä¸ç¨åä»»ä½æä½ã

2. æ¥ä¸æ¥å¤çä½äº $(2, 2)$ ä½ç½®çä¸»åäº $\textcolor{red}{2}$ï¼æä½æ¹æ³åç¬¬ä¸æ­¥ä¸æ ·ï¼å¨ç¨åºä¸­å¯ä»¥éè¿éå½æ¥å®ç°ï¼:

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

3. æ­¤æ¶å¾å°äºä½äº $(3, 3)$ ä½ç½®çä¸»åä¸ï¼ç±äºç©éµå¯¹è§çº¿ä¸çæææ°å­å¨é¨é½å·²ç»åæ $0$ï¼ææ¶åç»æãå®æ´çæ¶åæ­¥éª¤å¦ä¸ï¼çç¥äºæ²¡æä»»ä½æä½ç $(3, 1)$ æ­¥éª¤ï¼ï¼

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

   æ­¤æ¶å¾å°çç©éµç§°ä¸ºä¸ä¸è§ç©éµï¼Uppertriangular matrixï¼å®åªæä¸åé¨åçä¸è§å½¢ä¸­ææ°å­ï¼ï¼è®¡ä¸º $U$ã

### æ¶åå¤±æ

æ­£å¦çº¿æ§æ¹ç¨ç»å¯è½åºç°æ è§£æå¤è§£çæåµï¼ç©éµæ¶åå¯è½ä¼å¤±æãè§åä¹å¾ç®å ââ ä¸»åä¸è½ä¸º $0$ã

è¿ä¹ä¸é¾çè§£ï¼ç±»ä¼¼çº¿æ§æ¹ç¨ç»çæ±è§£ï¼å¦ææä¸ä¸ªæ¹ç¨æä¸ä¸ªè¿æªè®¡ç®æ°å¼çæªç¥æ°åå¶å® 0 æå¤ä¸ªå·²è®¡ç®æ°å¼çæªç¥æ°ï¼èè¿æªè®¡ç®æ°å¼çæªç¥æ°çç³»æ°ä¸º $0$ï¼åæ æ³ç®åºæ­¤æªç¥æ°çå·ä½æ°å¼ã

åå°ç©éµæ¶åï¼å¦ææ°å·§æ¶åè³æè¡æ¶ $0$ åºç°å¨äºåºè¯¥æ¯ä¸»åçä½ç½®ä¸ï¼åå ä¸ºä¸»åä¸è½ä¸º $0$ï¼æ­¤æ¶å¯å°è¯éè¿è¡äº¤æ¢çæ¹å¼è§£å³ ââ ä¹å°±æ¯å°ä¸æ¹çæè¡åæ­¤è¡äº¤æ¢ï¼ä½¿å¾é $0$ æ°å­åºç°å¨ä¸»åä½ç½®ä¸ä½¿å¾æ¶åå¾ä»¥ç»§ç»­ãä½å¦æ $0$ åºç°å¨ä¸»åä½ç½®ä¸ä¸ä¸æ¹æ²¡æå¯ä¾äº¤æ¢çè¡ï¼åæ¶åç»æ­¢ï¼å¹¶è¯æç©éµ $A$ ä¸ºä¸å¯éç©éµï¼ä¹å«å¥å¼ç©éµï¼å¨ä¹åè¿å°è¯¦ç»è®¨è®ºï¼ï¼ä¸çº¿æ§æ¹ç¨ç»æ²¡æå¯ä¸è§£ãä¾å¦æ¶åå¾å° $\begin{bmatrix}
  \textcolor{red}{*} & * & * \\
  \textcolor{green}{0} & \textcolor{orange}{0} & * \\
  \textcolor{green}{0} & \textcolor{orange}{0} & *
\end{bmatrix}$ æ $\begin{bmatrix}
  \textcolor{red}{*} & * & * \\
  \textcolor{green}{0} & \textcolor{red}{*} & * \\
  \textcolor{green}{0} & \textcolor{green}{0} & \textcolor{orange}{0}
\end{bmatrix}$ï¼æ³¨ææ æ³¨æ©è²çä½ç½®ï¼ã

## åä»£

å½è¿è¡é«æ¯æ¶åæ¶ï¼éè¦å¯¹ç­å¼å³ä¾§ç $b$ åéååæ ·çä¹æ³åå åæ³æä½ãå¨æç®æ¶å¯ä»¥éè¿åºç¨å¢å¹¿ç©éµæ¹ä¾¿è®¡ç®ï¼è MATLAB ç­è½¯ä»¶æ¯åç®å® $A$ åå¤ç $b$ï¼ã

### å¢å¹¿ç©éµ

> #### ð§© å¢å¹¿ç©éµçå®ä¹
>
> å¢å¹¿ç©éµï¼åç§°å¹¿ç½®ç©éµï¼æ¯å¨çº¿æ§ä»£æ°ä¸­ç³»æ°ç©éµçå³è¾¹æ·»ä¸çº¿æ§æ¹ç¨ç»ç­å·å³è¾¹çå¸¸æ°åå¾å°çç©éµã

å° $b$ æå¥ç©éµ $A$ ä¹åå½¢ææåä¸åï¼å¨æ¶åè¿ç¨ä¸­å¸¦ç $b$ ä¸èµ·æä½ã

è¿æ¯ä¸é¢ççº¿æ§æ¹ç¨ç»ï¼å°å¶åæå¢å¹¿ç©éµçå½¢å¼ï¼

$$
\begin{bmatrix}
  1 & 2 & 1 & \textcolor{purple}{2} \\
  3 & 8 & 1 & \textcolor{purple}{12} \\
  0 & 4 & 1 & \textcolor{purple}{2}
\end{bmatrix}
$$

### å·ä½æ­¥éª¤

1. åºç¨å¢å¹¿ç©éµåå®æ´çæ­¥éª¤ï¼

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

   æ­¤æ¶å° $Ax = b$ è½¬åä¸ºäº $Ux = c$ï¼å¶ä¸­ $c = \begin{bmatrix}
     2 \\
     6 \\
     -10
   \end{bmatrix}$ã

2. ä¸é¢å¼å§åä»£ãé¦åå°æç»çæ¹ç¨ç»ååºæ¥ï¼ä¹å°±æ¯å° $Ux = c$ åæçº¿æ§æ¹ç¨ç»çå½¢å¼ï¼ï¼

   $$
   \begin{aligned}
     x + 2y + z & = 2 \\
     2y - 2z & = 6 \\
     5z & = -10
   \end{aligned}
   $$

3. ä¾æ¬¡è®¡ç® $z$, $y$, $x$ çæ°å¼å³å¯ï¼

   $$
   \begin{aligned}
   z & = -10 Ã· 5 = -2 \\
   y & = (6 + 2z) Ã· 2 = (6 + 2 Ã (-2)) Ã· 2 = 1 \\
   x & = 2 - 2y - z = 2 - 2 Ã 1 - (-2) = 2
   \end{aligned}
   $$

## ç©éµè¿ç®

ä¸è¿°çæ¶åæ­¥éª¤å¹¶æ²¡æç¨ç©éµæ¥è¡¨ç¤ºï¼å¨å°è¯ä½¿ç¨ç©éµæ¥æè¿°è¿äºåæ¢ä¹åï¼éè¦äºè§£ä¸äºç©éµè¿ç®çç¸å³ç¥è¯ã

### å³ä¹ååé

é¦åï¼å¤ä¹ ä¸ä¸ä¸ä¸èä¸­çç©éµå³ä¹ååéçè®¡ç®æ¹æ³ï¼

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

ä¹å°±æ¯ç©éµååéççº¿æ§ç»åã

### å·¦ä¹è¡åé

ç°å¨ä»ç»å·¦ä¹è¡åéçè®¡ç®æ¹æ³ï¼

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

ä¸å³ä¹ååéç¸å¯¹ç§°ï¼ç©éµå·¦ä¹è¡åéåæ¯å¯¹ç©éµçè¡åéè¿è¡çº¿æ§ç»åã

### ç©éµä¹æ³

å°å·¦ä¹è¡åéåå³ä¹ååéçè®¡ç®æ¹æ³ç»¼åæ¥çï¼å°±å¾å°äºç©éµçä¹æ³ï¼

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

::: tip ð¡ tip

è¿éä»ä»æ¯å¯¹ç©éµä¹æ³çç®åä»ç»ï¼å¨ä¸ä¸èä¸­è¿å°æ·±å¥è®¨è®ºã

:::

### åä½ç©éµ

å¶ä¸­ï¼ç¹æ®å°ï¼ä»»ä½ä¸ä¸ªç©éµå·¦ä¹æå³ä¹åä½ç©éµï¼ç»æç­äºå®èªèº«ï¼ä¾å¦ï¼

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

è¿ç­ä»·äºå¯¹æ¯ä¸è¡æ¥è¯´å `1` ä¸ªå¯¹åºçè¯¥è¡çè¡åéèä¸åå¶å®è¡çè¡åéæ¥è¿è¡çº¿æ§ç»åï¼æ¯ä¸è¡çç»æèªç¶å°±ä¸ä¼æ¹åã

> #### ð§© åä½ç©éµçå®ä¹
>
> n é¶åä½ç©éµï¼æ¯ä¸ä¸ª $n \times n$ çæ¹å½¢ç©éµï¼å¶ä¸»å¯¹è§çº¿åç´ ä¸º $1$ï¼å¶ä½åç´ ä¸º $0$ï¼ä½¿ç¨ $I$ è¡¨ç¤ºã

## æ¶åç©éµ

ç°å¨åæ¥çå¦ä½ä½¿ç¨ç©éµæè¿°æ¶åæ­¥éª¤ä¸­çç©éµåæ¢ã

1. ä»¥æ­¥éª¤ $(2, 1)$ ä¸ºä¾ï¼å®éä¸è¿ä¸ªé®é¢å°±æ¯å¨é®å·¦ä¹ä¸ä¸ªä»ä¹æ ·çç©éµå¯ä»¥å¾å°å³è¾¹ç»è¿ $(2, 1)$ ååçç©éµï¼

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

   å¯¹äºæ­¤é®é¢æä»¬å¯ä»¥å¯¹è¯¥ç©éµä¸è¡ä¸è¡æ¥åæã

   å¯¹äºè¯¥ç©éµçç¬¬ä¸è¡æ¥è¯´ï¼ä¸ºäºä½¿ç»æä¸­çç©éµç¬¬ä¸è¡ä¿æä¸åï¼éè¦åæï¼

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

   è¿ç­ä»·äºå `1` ä¸ªè¡ä¸çè¡åéèä¸åå¶å®è¡çè¡åéæ¥è¿è¡çº¿æ§ç»åï¼ç»æèªç¶å°±ä¸ä¼æ¹åã

   åçï¼ç¬¬ä¸è¡ä¹æ¯è¿æ ·ï¼

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

   ç°å¨æ¥çå³é®çç¬¬äºè¡ï¼

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

   è¿ç¸å½äº `-3` åè¡ä¸å ä¸ `1` åè¡äºã

   ç»¼ä¸æè¿°ï¼å¾å°ä»¥ä¸ç»æï¼

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

   å°å·¦ä¹çè¿ä¸ªç©éµç§°ä¸ºåç­ç©éµï¼è®¡ä½ $E_{21}$ï¼elementray å elimination çé¦å­æ¯åä¸º `E`ï¼ä¸æ ä¸º $21$ æ¯ç±äºå®è¡¨ç¤ºä½ç½® $(2, 1)$ ä¸çåæ¢ï¼ã

> #### ð§© åç­ç©éµçå®ä¹
>
> åç­ç©éµï¼elementary matrixï¼åç§°ä¸ºåºæ¬ç©éµï¼æ¯ä¸ä¸ªä¸åä½ç©éµåªæå¾®å°åºå«çç©éµã
>
> å·ä½æ¥è¯´ï¼ä¸ä¸ª n é¶åä½ç©éµ $E$ ç»è¿ä¸æ¬¡åç­è¡åæ¢æä¸æ¬¡åç­ååæ¢æå¾ç©éµç§°ä¸º n é¶åç­ç©éµã

2. åçï¼æ­¥éª¤ $(3, 2)$ éè¿å·¦ä¹ $E_{32}$ æ¥åæ¢ï¼

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

3. æåå°è¿äºæ­¥éª¤ç»¼åèµ·æ¥ï¼å°è¿äºç©éµåæä¸ä¸ªæ¥èèãç°å°å®æ´æ­¥éª¤ååºï¼

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

   ä¹å°±æ¯ $E_{32} \left( E_{21} A \right) = U$ã

4. é£ä¹ç°å¨é®é¢æ¥äº ââ ææ²¡æç©éµå¯ä»¥ä¸æ¬¡æ§è§£å³è¿ä¸ªé®é¢ï¼å° $A$ åæ¢ä¸º $U$ï¼

   ç­æ¡å¶å®å¾ç®åï¼åªéè¦å°ä¸¤ä¸ªåç­ç©éµæ¾å¨ä¸èµ·å³å¯ï¼ä¹å°±æ¯ $\left( E_{32} E_{21} \right) = E$ãè¿éç¨å°äºç©éµä¹æ³çç»åå¾ã

   èªæ­¤ï¼æ´ä¸ªæ¶åæ­¥éª¤é½ä½¿ç¨ç©éµæ¥è¡¨ç¤ºäºï¼å¯ä»¥ç®åçè¡¨ç¤ºä¸º $EA = U$ã

   æ¹ç¨ $Ax = b$ çè§£ä¹æ»¡è¶³æ¹ç¨ $Ux = EAx = Eb = c$ï¼å æ­¤é®é¢è½¬åä¸º $Ux = c$ã

> #### ð§© ç©éµä¹æ³çç»åå¾
>
> $\left( AB \right) C = A \left( BC \right)$

## ç½®æ¢ç©éµ

è¿ééè¦åè°ä¸ç±»ç©éµï¼å«åç½®æ¢ç©éµãå½ä¸ä¸ªç©éµä¹ä¸ä¸ä¸ªç½®æ¢ç©éµæ¶ï¼æå¾å°çæ¯åæ¥ç©éµçæ¨ªè¡ï¼å·¦ä¹ç½®æ¢ç©éµï¼æçºµåï¼å³ä¹ç½®æ¢ç©éµï¼ç»è¿ç½®æ¢åå¾å°çç©éµã

> #### ð§© ç½®æ¢ç©éµçå®ä¹
>
> ç½®æ¢ç©éµï¼permutation matrixï¼æ¯ä¸ç§ç³»æ°åªç± $0$ å $1$ ç»æçæ¹éµãç½®æ¢ç©éµçæ¯ä¸è¡åæ¯ä¸åé½æ°å¥½æä¸ä¸ª $1$ï¼å¶ä½åç´ é½æ¯ $0$ã

### è¡äº¤æ¢

ä»¥ $2 \times 2$ çç©éµä¸ºä¾ï¼ä¸ºäºå°ææè¡ååæåï¼éè¦å·¦ä¹å¦ä¸ç½®æ¢ç©éµï¼

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

### åäº¤æ¢

ä»¥ $2 \times 2$ çç©éµä¸ºä¾ï¼ä¸ºäºå°ææåååæåï¼éè¦å³ä¹å¦ä¸ç½®æ¢ç©éµï¼

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

::: tip ð¡ tip

å·¦å³ä¹ææä¸åå±ç¤ºäºç©éµè¿ç®ä¸ç¬¦åäº¤æ¢å¾çæ§è´¨ã

:::

## éç©éµ

ä¸ºäºå¼å¥éç©éµçæ¦å¿µï¼è®¨è®ºæ¶åç©éµçéç©éµã

æ¶åç©éµçä½ç¨ä¹å°±æ¯æµæ¶æ¶åç©éµå¯¹åç©éµçæ¶åææãä»¥ $E_{21}$ï¼$\begin{bmatrix}
  1 & 0 & 0 \\
  -3 & 1 & 0 \\
  0 & 0 & 1
\end{bmatrix}$ï¼ çéç©éµä¸ºä¾ï¼å¶ä½ç¨ç­ä»·äºå°äºè®©ç¬¬äºè¡çè¡åéåå» `3` åç¬¬ä¸è¡çè¡åéãé£ä¹å¶éåæä½å°±æ¯éæ°è®©ç¬¬äºè¡çè¡åéå åç¬¬ä¸è¡ç `3` åï¼æå¶éç©éµå¦ä¸ï¼

$$
\begin{bmatrix}
  1 & 0 & 0 \\
  3 & 1 & 0 \\
  0 & 0 & 1
\end{bmatrix}
$$

å°å¶è®°ä¸º $E_{21}^{-1}$ã

å¶æ»¡è¶³ $E_{21}^{-1}E_{21} = I$ï¼å³ï¼

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

> #### ð§© éç©éµçå®ä¹
>
> éç©éµï¼inverse matrixï¼åç§°ä¹æ³åæ¹éµãåç©éµï¼ã
>
> ç»å®ä¸ä¸ª $n$ é¶æ¹éµ $A$ï¼è¥å­å¨ $n$ é¶æ¹éµ $B$ï¼ä½¿å¾ $AB = BA = I_{n}$ï¼å¶ä¸­ $I_{n}$ ä¸º $n$ é¶[åä½ç©éµ](#ð§©-åä½ç©éµçå®ä¹)ï¼åç§° $A$ æ¯å¯éçï¼ä¸ $B$ æ¯ $A$ çéç©éµï¼è®°ä½ $A^{-1}$ã
