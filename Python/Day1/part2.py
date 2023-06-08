import os

file1 = os.path.join(os.path.dirname(__file__), 'inputfile.txt')

f = open(file1,  "r")

with open(file1, "r") as in_file:
    calorie_list = []
    current_calories = 0
    for line in in_file:
        calories = line.rstrip("\n")
        if calories == '':
            calorie_list.append(int(current_calories))
            current_calories = 0
        else:
            current_calories += int(calories)

calorie_list.sort(reverse=True)
print(calorie_list[0:3])
