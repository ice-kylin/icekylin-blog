gcd' :: Int -> Int -> Int
gcd' x y
  | x < 0 || y < 0 = gcd' (abs x) (abs y)
  | x < y = gcd' y x
  | y == 0 = x
  | otherwise = gcd' y (x `mod` y)
