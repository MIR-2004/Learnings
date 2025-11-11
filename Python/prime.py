is_prime = int(input("Enter a number:"))

for i in range(is_prime-1):
    if(i in [0, 1]):
        continue

    if(is_prime%i == 0):
        print("Not Prime")
        break
else:
    print("Prime")

    