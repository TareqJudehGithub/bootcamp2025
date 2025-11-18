// Write a program that returns true if any item in words list is uppercase.
List<string> words = ["quick", "BROWN", "fox"];


// Old school C#
bool IsAnyWordUppercase(List<string> listOfWords)
{
    bool result = false;
    foreach (var word in listOfWords)
    {
        if (word == word.ToUpper())
        //Console.WriteLine(word.ToUpper());
        {
            return result = true;
        }
    }
    return result;
}
bool isAnyWordUppercase = IsAnyWordUppercase(words);
Console.WriteLine(isAnyWordUppercase);


bool isUpper(List<string> wordsList)
{
    return wordsList.Any(word => word == word.ToUpper());
}

Console.WriteLine(isUpper(words));