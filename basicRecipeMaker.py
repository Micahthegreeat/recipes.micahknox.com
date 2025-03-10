def undertale(num):
    if num == 1:
        return'''\n\n<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="recipes.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>'''
    if num == 2:
        return'''</h1>
    <img src = "images/'''
    if num == 3:
        return '''" alt = "Picture of '''
    if num == 4:
        return '''" class = mainPicture>
    </a>
    <!--ingredients-->
    <table  class = ingredients>
        <tr>
            <td class = top>Ingredient</td>
            <td class = top>Amount</td>
        </tr>'''
    if num == 5:
        return '''
    </table>
    <!--instructions-->'''
    if num == 6:
        return '''
</body>
</html>'''
    if num == 7:
        return '''</title>
    <link rel="icon" type="image/x-icon" href="/images/micah.png">
</head>
<body>
    <a href = index.html.>
    <!--title-->
    <h1>'''

def ingridents():
    print("List the ingredients and the amount. When you are out of ingredients type \"end\".")
    currstring = ''
    ingrident = ''
    amount = ''
    while True:
        ing = input("Ingredient(ex. butter): ")
        if ing == 'end':
            return currstring
        amt = input("Amount(ex. 1 lb.): ")
        currstring += '''
        <tr>
            <td>''' + ing + '''</td>
            <td>''' + amt + '''</td>
        </tr>'''
def steps():
    print('List the steps when you are done just type "end".')
    currstring = ''
    inst = ''
    i = 1
    while True:
        ing = input("Step(ex. Preheat pan.): ")
        if ing == 'end':
            return currstring
        currstring += f'''
    <h2>Step {i}</h2>
    <p class = instructions>
    {ing}
    </p>'''
        i += 1
        
def main():
    currentString = undertale(1) # initilizing the string that will contain the entire file
    recipeName = input("what is the name of the Recipe that you are trying to make (ex. Cookie Dough): ")
    currentString += recipeName + undertale(7) + recipeName + undertale(2) # adding header
    picture = input("what is filename of the picture. You will need to place this picture in the images folder.(ex. cookieDough.jpg): ")
    currentString += picture + undertale(3) + recipeName + undertale(4) # adding picture of item and the start if th eingrident header
    currentString += ingridents() # adding ingridents table
    currentString += undertale(5) # ending the ingridents table
    currentString += steps() # the actual steps of the recipes
    currentString += undertale(6) # the end of the file
    print()
    print()
    print(currentString) # printing the string
    print()
    print()
    filename = ''
    while filename == '':
        try:
            filename = input("\nput the code that was just outputted in a file. Name it something and end that with .html What did you name it(ex. cookieDough.html): ")
        except:
            pass

    print("for in the main with the other\n\n")
    print(f'''
    <a href = {filename}>
        <table>
            <tr>
                <th>{recipeName}</th>
            </tr>
            <tr>
                <td><img src = "images/{picture}" alt = "Picture of {recipeName}" width = "300 px"></td>
            </tr>
        </table>
    </a>''')

    

if __name__ == "__main__":
    main()