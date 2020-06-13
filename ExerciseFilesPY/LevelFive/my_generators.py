import random

heros = ["batman", "Hulk", "Thor"]


for h in heros:
    print(h)

def magic():
    for i in range(6):
        yield random.randint(1, 20)

for number in magic():
    print("Value is", number)