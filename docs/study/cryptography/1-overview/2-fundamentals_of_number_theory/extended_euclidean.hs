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
