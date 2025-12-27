x = [1, 2, 3, 4, 5, 6.3, 10000]

square = lambda x: x * x * 2

x = map(square, x)

for i in x:
    print(i)

print(x)