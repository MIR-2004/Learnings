age = int(input("Enter your Age:"))

# can_vote = age >= 18

# print(f"Eligable for vote :{can_vote}")

if(age >= 18):
    print('You can vote.')
elif(age < 0):
    print("Enter a valid age.")
else:
    print("You can't vote.")