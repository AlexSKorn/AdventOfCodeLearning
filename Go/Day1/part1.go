package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {

	lineCount := LinesInFile("inputfile.txt")

	var currentElf = 0
	var currentCalories = 0
	var highestElf = 0
	var highestCalories = 0

	for i := 0; i < len(lineCount); i++ {
		if lineCount[i] == "" {
			if currentCalories > highestCalories {
				highestElf = currentElf
				highestCalories = currentCalories
			}
			currentElf++
			currentCalories = 0
		}
		lineCalories, _ := strconv.Atoi(lineCount[i])
		currentCalories = currentCalories + lineCalories
	}

	fmt.Print("This is the elf: ", highestElf+1)
	fmt.Print("\n")
	fmt.Print("This is the amount of calories: ", highestCalories)
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
