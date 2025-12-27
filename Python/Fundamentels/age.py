age = int(input("Enter your Age:"))

if(age >= 18):
    print('You can vote.')
elif(age < 0):
    print("Enter a valid age.")
else:
    print("You can't vote.")