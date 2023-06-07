package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
)

func main() {

	lineCount := LinesInFile("inputfile.txt")

	var currentElf = 0
	var currentCalories = 0
	highestList := []int{0, 0, 0}

	for i := 0; i < len(lineCount); i++ {
		if lineCount[i] == "" {
			if currentCalories > highestList[0] {
				//removing the first element from the list because this is the elf with the lowest amount of calories in the slice.
				highestList = highestList[1:]
				highestList = append(highestList, currentCalories)
				sort.Ints(highestList)
			}
			// we are going to a new elf
			currentElf++
			currentCalories = 0
		}
		lineCalories, _ := strconv.Atoi(lineCount[i])
		currentCalories = currentCalories + lineCalories
	}

	finalValue := highestList[0] + highestList[1] + highestList[2]
	fmt.Print("This is the amount of calories: ", finalValue)
}

func LinesInFile(fileName string) []string {
	f, _ := os.Open(fileName)
	// Create new Scanner.
	scanner := bufio.NewScanner(f)
	result := []string{}
	// Use Scan.
	for scanner.Scan() {
		line := scanner.Text()
		// Append line to result.
		result = append(result, line)
	}
	return result
}
