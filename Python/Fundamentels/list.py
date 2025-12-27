friends = ["Apple", "Orange", 5, 345.06, False, "Rohan"]

print(friends)

friends[0] = "Grapes"

print(friends)

print(friends[1:4])


# methods of List

# append
friends.append("Gajor")
print(friends) 

# reverse
friends.reverse()
print(friends)

# sort
nums = [1, 5, 3 ,6, 2,7 ,8, 3, 0]
nums.sort()
print(nums)

# insert
nums.insert(3, 18)
print(nums)

# pop
nums.pop(2)
print(nums)

# remove
nums.remove(3)
print(nums)
