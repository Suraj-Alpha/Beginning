def addme(*num):
    # total = num + num2
    # return total
    total = 0
    for v in num:
        total = total + v
    return total

# myVal = addme(3, 5)

print(addme(3, 3, 2, 1, 99, 44, 3))