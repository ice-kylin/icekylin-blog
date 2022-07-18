ce :: Int -> String -> String
ce k xs = [i2c (caesarE k (c2i x)) | x <- xs]

cd :: Int -> String -> String
cd k xs = [i2c (caesarD k (c2i x)) | x <- xs]

caesarE :: Int -> Int -> Int
caesarE k p = (p + k) `mod` 26

caesarD :: Int -> Int -> Int
caesarD k = caesarE (- k)

alphabet :: String
alphabet = "abcdefghijklmnopqrstuvwxyz"

i2c :: Int -> Char
i2c i = alphabet !! i

c2i :: Char -> Int
c2i c = index c alphabet

index :: (Eq t) => t -> [t] -> Int
index _ [] = -1
index x (y : ys)
  | x == y = 0
  | otherwise = 1 + index x ys
