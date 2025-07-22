let unitNames = ["Basic Python and Console Interaction", "Conditionals","Looping","Functions and Exceptions","Strings"]
let units = [
    ["Printing in Python","Variables and Types","User Input","Math Operators","String Operators","Comments","Putting it Together"],
    ["Booleans", "If Statements", "Comparison Operators", "Logical Operators", "Floating Point Numbers and Rounding"],
    ["While Loops","For Loops","Break and Continue","Nested Control Structures", "Guess the Number"],
    ["Functions", "Functions and Parameters", "Namespaces in Functions","Fix this Program", "Functions and Return Values","Exceptions"],
    ["Indexing","Challenge: Initials","Slicing","Immutability","Strings and For Loops","Challenge: Palindromes","The in Keyword","String Methods","Project: Pig Latin"]
];


let lessonContents={
    "Printing in Python":{
        header:`This is an example python program that prints to the console.<br>Notice how each print statement makes a new line on the console.<br>Experiment with removing parentheses, quotation marks, and adding new lines.<br>Finally, print three fun facts about yourself to the console, each on a different line.`,
        code:`print("hello world!")\nprint("this is a second line!")`
    },
    "Variables and Types": {
        header: `Variables are like labeled boxes that store information.<br>
        Variables have names, types, and values.<br>
        <ul>
            <li><b>Name</b>: a variable's name is what it is called in your code and how it is used</li>
            <li><b>Type</b>: a variable's type is the type of data it stores. Variables can store different types like numbers and words</li>
            <li><b>Value</b>: a variable's value is its data that it represents.</li>
        </ul>

        Some different variable types are:<br>
        <ul>
            <li><code>int</code> is used for whole numbers.</li>
            <li><code>float</code> is used for decimals.</li>
            <li><code>str</code> is used for text (strings).</li>
            <li><code>bool</code> is used for True or False.</li>
        </ul>

        To make or update a variable in python, we use assignment statements. It looks like this:<br>
        <code>variable_name = "any value"</code><br><br>
        Investigate and experiment with the code below. Try making your own variables and modifying existing ones!`,
        code: `# This is a comment. Python ignores comments.\n# Let's create some variables!\n\nname = "Alice"         # a string\nage = 13               # an integer\nheight = 5.3           # a float\nlikes_python = True    # a boolean\n\n# Let's print them!\nprint("Name:", name)\nprint("Age:", age)\nprint("Height:", height)\nprint("Likes Python:", likes_python)`
    },
    
    "User Input":{
        header: `You can ask the user questions using the <code>input()</code> function. It always gives you a <b>string</b>, even if the user types a number.<br><br>
    To do math or comparisons, you’ll need to convert the input to another type like <code>int</code> (for whole numbers) or <code>float</code> (for decimals).<br><br>
    To do this, we use functions like <code>int()</code> or <code>float()</code>. See the code below to see how they work!<br><br>
    Read through the given code below. Try running this code, then experiment by entering your own name and age.<br>
    Then change it to ask for your favorite number, convert it to an <code>int</code>, and multiply it!`,

        code: `
# Ask the user for their name and age
name = input("What is your name? ")
age = input("How old are you? ")

print("Hi", name + "! You are", age, "years old.")

# Convert age to an integer so we can do math with it
age_number = int(age)
next_year = age_number + 1
print("Next year, you will be", next_year)

# Ask for a decimal number and convert it to float
height = float(input("How tall are you in feet? "))
print("You are", height, "feet tall!")`
    },

    "Math Operators":{
        header: `Python can do math just like a calculator! You can use numbers directly, or use variables to store them.<br><br>
    <b>Basic Operators:</b><br>
    <ul>
        <li><code>+</code> : Addition</li>
        <li><code>-</code> : Subtraction</li>
        <li><code>*</code> : Multiplication</li>
        <li><code>/</code> : Division (returns a float)</li>
        <li><code>//</code> : Integer Division (drops the decimal)</li>
        <li><code>%</code> : Modulo (remainder)</li>
        <li><code>**</code> : Exponentiation (power)</li>
    </ul>    
    <b>Order of operations</b> follows PEMDAS: parentheses first, then exponents, multiplication/division, and finally addition/subtraction.<br><br>
    Try changing the numbers and operators in the examples below. At the end, create your own math expression and see what it evaluates to!`,

        code: `# Basic math operations
a = 10
b = 3

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division (float):", a / b)
print("Exponent:", a ** b)
print("Remainder (modulo):", a % b)
print("Integer division:", a // b)  # Divides and drops the decimal

# Float example
c = 2.5
d = 4

print("Float multiplication:", c * d)
print("Float + int:", c + a)

# Order of operations (PEMDAS)
result = 2 + 3 * 4
print("2 + 3 * 4 =", result)

# Use parentheses to control order
result = (2 + 3) * 4
print("(2 + 3) * 4 =", result)

# Try your own!
my_math = (5 + 2) ** 2 // 3
print("My math expression result:", my_math)`
    },

    "String Operators":{
        header: `Strings are just text in Python, and you can combine or repeat them using operators!<br><br>
    <b>Useful string operators:</b>
    <ul>
        <li><code>+</code> : Concatenates (joins) two strings together. Can only be used with two strings.</li>
        <li><code>*</code> : Repeats a string multiple times. Can only be used with a string and an integer.</li>
    </ul>
    You can’t directly add a number to a string, you’ll need to convert the number using <code>str()</code> first.<br><br>
    Try experimenting with combining strings and numbers and the different operations. Read through the code and investigate if anything confuses you!`,

        code: `# Concatenating strings
first = "Hello"
second = "world"
combined = first + " " + second
print(combined)

# Repeating strings
laugh = "ha"
print(laugh * 5)  # prints 'hahahahaha'

# Mixing strings and numbers (will cause an error!)
age = 13
# print("I am " + age + " years old")  # This will error!

# Convert the number to a string
print("I am " + str(age) + " years old")

# You can also build longer strings using variables
name = "Alice"
hobby = "drawing"
sentence = name + " likes " + hobby + "."
print(sentence)

# Try making your own!
emoji = "🐍"
print(emoji * 10)`
    },

    "Comments":{
        header: `Comments are notes in your code that Python ignores. They're super helpful for explaining what your code does.<br><br>
    <b>Types of comments:</b>
    <ul>
        <li><code>#</code> : Single-line comment</li>
        <li>Triple quotes (<code>'''</code> or <code>"""</code>) : Multi-line comment</li>
    </ul>
    Use comments to explain your thinking or remind yourself of what your code is doing. It makes your code easier to understand!`,

        code: `# This is a single-line comment
print("Hello")  # This prints a message

# You can also "turn off" code using a comment
# print("This won't run")

"""
This is a multi-line comment.
It's useful for longer notes or explanations.
Python actually sees this as a multi-line string,
but if it's not assigned to anything, it works like a comment.
"""

print("Code with comments is easier to read!")`
    },
    "Putting it Together":{
        header:`Now you have learned some basic python! Use everything we've learned in the past lessons and create your own program. Make sure to use printing, variables, user input, math and string operations, and comments!<br><br>
        Some program ideas:
        <ul>
            <li>Ask the user for the side length of a square and calculate its area</li>
            <li>Get the user's name and give them a nickname</li>
        </ul>
        Or, be creative!`,
        code:``
    },






    "Booleans":{
        header: `Booleans are a special type of value in Python that can only be one of two things:<br>
    <ul>
        <li><code>True</code></li>
        <li><code>False</code></li>
    </ul>
    They’re used to represent yes/no, on/off, or true/false ideas in code.<br><br>
    Try changing the values below or making your own!`,

        code: `# Boolean values
is_hungry = True
is_sleepy = False

print("Hungry:", is_hungry)
print("Sleepy:", is_sleepy)

# You can also just print them directly
print(True)
print(False)`
    },
    
    "If Statements":{
        header: `An <code>if</code> statement lets your code make decisions.<br>
    If something is <code>True</code>, Python will run the code inside the <code>if</code> block.<br><br>
    You can also use <code>if/else</code> to run one thing if it's <code>True</code>, and something else if it's <code>False</code>.<br><br>
    In this lesson, we’ll use <code>True</code> and <code>False</code> directly. We’ll learn how to test conditions later!<br>
    Read the code below. Look at each <code>if</code> statement, and try to find which lines are part of the block and will be run. Try changing the boolean values and see how the output changes.`,

        code: `# Using if
is_raining = True

if is_raining:
    print("Take an umbrella!")

# Using if/else
is_hungry = False

if is_hungry:
    print("Time to eat!")
else:
    print("Not hungry right now.")

# You can test different values by changing True/False
wants_ice_cream = True

if wants_ice_cream:
    print("Here's your ice cream!")
else:
    print("No ice cream for now.")`
    },

    "Comparison Operators":{
        header: `Now that you know how booleans and <code>if</code> statements work, let’s talk about <b>comparison operators</b>.<br><br>
    These let you <b>compare values</b> in Python and get a <code>True</code> or <code>False</code> result.
    <ul>
        <li><code>==</code> : equal to</li>
        <li><code>!=</code> : not equal to</li>
        <li><code>></code> : greater than</li>
        <li><code><</code> : less than</li>
        <li><code>>=</code> : greater than or equal to</li>
        <li><code><=</code> : less than or equal to</li>
    </ul>
    You can use these inside <code>if</code> statements to control your code.<br><br>
    Try changing the numbers and see how the results change! (Also, investigate how <code>elif</code> works!)`,

        code: `# Basic comparisons
print(5 == 5)    # True
print(3 != 4)    # True
print(10 > 2)    # True
print(7 < 7)     # False
print(6 >= 6)    # True
print(8 <= 3)    # False

# Using comparisons in if statements
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: D or lower")

# Try your own!
age = 13

if age < 13:
    print("You're a kid!")
elif age < 18:
    print("You're a teenager!")
else:
    print("You're an adult!")`
    },

    "Logical Operators":{
        header: `Sometimes you want to check more than one condition at the same time. That’s where <b>logical operators</b> come in.<br><br>
    These operators let you combine or modify boolean values:
    <ul>
        <li><code>and</code> : True only if <i>both</i> sides are True</li>
        <li><code>or</code> : True if <i>at least one</i> side is True</li>
        <li><code>not</code> : Flips True to False, and False to True</li>
    </ul>
    Try changing the values and watching how the output changes!`,

        code: `# Logical operators with booleans
is_raining = True
has_umbrella = False

if is_raining and has_umbrella:
    print("You stay dry!")
else:
    print("You might get wet!")

# OR: only one side needs to be True
is_sunny = False
wants_to_go_outside = True

if is_sunny or wants_to_go_outside:
    print("Going outside!")
else:
    print("Staying indoors.")

# NOT: flips the value
is_tired = False

if not is_tired:
    print("You're ready to go!")
else:
    print("Take a nap.")`
    },

    "Floating Point Numbers and Rounding":{
        header: `Floating point numbers are numbers with decimals, like <code>3.14</code> or <code>0.5</code>.<br>
    But because of how computers store these numbers, sometimes math with decimals is a little bit off.<br><br>
    For example, you'd expect <code>0.0037 == 0.37 / 100</code> to be <code>True</code>, but it’s actually <code>False</code> because of tiny rounding errors inside the computer.<br><br>
    To fix this, you can use the <code>round()</code> function to round numbers to a certain number of decimal places before comparing them.`,

        code: `# Floating point math looks normal at first
a = 0.3
b = 0.1+0.2

print("a:", a)
print("b:", b)
print("Are they equal?", a == b)  # This will print False!

# Let's round both numbers to 5 decimal places
a_rounded = round(a, 5)
b_rounded = round(b, 5)

print("Rounded a:", a_rounded)
print("Rounded b:", b_rounded)
print("Are they equal now?", a_rounded == b_rounded)  # Now True!

# You can round any float
pi = 3.14159265
print("Rounded pi to 2 decimals:", round(pi, 2))`
    },




    "While Loops":{
        header: `The code inside a <code>while</code> loop runs over and over <b>as long as a condition is True</b>.<br>
    It’s great when you don’t know exactly how many times you’ll need to repeat something.<br><br>
    <b>Careful!</b> If the condition never becomes <code>False</code>, the loop will go on forever!<br><br>
    Try running the loop below, then change the condition or the counter to see what happens. Then, write your own while loop that prints all the even numbers from 2 to 20.`,

        code: `# This loop prints numbers from 1 to 5
count = 1

while count <= 5:
    print("Count is:", count)
    count = count + 1  # Make sure to update the counter!

print("Loop is done!")
`
    },

    "For Loops":{
        header: `A <code>for</code> loop runs a block of code a certain number of times. It's perfect when you know how many times you want to repeat something!<br><br>
    <b>range()</b> is used to generate a list of numbers to loop through. You can give it either 1, 2, or 3 numbers. It works like this:
    <ul>
        <li><code>range(stop)</code> — counts from 0 to stop (not including stop)</li>
        <li><code>range(start, stop)</code> — counts from start to stop (not including stop)</li>
        <li><code>range(start, stop, step)</code> — counts with a custom step (like +2 or -1)</li>
    </ul>
    Try out the examples below — then challenge yourself by printing numbers 1–10 or asking for 10 numbers from the user and adding them up!`,

        code: `# Basic for loop with range
for i in range(5):
    print("i is:", i)  # Prints 0 to 4

# Custom start and stop
for i in range(1, 6):
    print("Number:", i)  # Prints 1 to 5

# Custom step
for i in range(0, 10, 2):
    print("Even number:", i)  # 0, 2, 4, 6, 8
`
    },

    "Break and Continue":{
        header: `Sometimes you want to <b>stop</b> a loop early, or <b>skip</b> over part of it.<br><br>
    Python gives you two special keywords:
    <ul>
        <li><code>break</code> — completely stops the loop</li>
        <li><code>continue</code> — skips the rest of the loop and moves to the next turn</li>
    </ul>
    Try out the examples below, then try writing your own loop that skips or stops at certain numbers!`,

        code: `# BREAK: stop the loop early
for i in range(1, 10):
    if i == 5:
        print("Breaking the loop at", i)
        break
    print("i is:", i)

# CONTINUE: skip just one turn
for i in range(1, 6):
    if i == 3:
        print("Skipping 3")
        continue
    print("i is:", i)

# You can use break and continue in while loops too!
count = 0
while count < 10:
    count += 1
    if count % 2 == 0:
        continue  # skip even numbers
    if count == 9:
        break     # stop before 9
    print("Odd count:", count)`
    },

    "Nested Control Structures":{
        header: `You can put one control structure (like a loop or an <code>if</code> statement) <b>inside another</b> — this is called <b>nesting</b>.<br><br>
    For example, you can have an <code>if</code> inside a <code>for</code> loop, or even a loop inside another loop.<br>
    This lets you create more powerful programs, like drawing grids or checking multiple conditions.<br><br>
    Try the examples below, and then create your own nested loop!`,

        code: `# if inside a loop
for i in range(1, 6):
    if i % 2 == 0:
        print(i, "is even")
    else:
        print(i, "is odd")

# loop inside a loop (nested for loop)
for row in range(3):
    for col in range(4):
        print("(", row, ",", col, ")", end=" ")
    print()  # new line after each row

# Challenge: Print a number grid
# Example:
# 1 2 3
# 4 5 6
# 7 8 9`
    },

    "Guess the Number":{
        header:`Use what you learned about loops to create a simple Guess the Number game.<br>
        Decide on a certain number, then keep getting user input until they select the correct number.<br><br>
        `,
        code:``
    },







    "Functions":{
        header: `Functions are like mini-programs inside your program. They let you organize your code, avoid repeating yourself, and make your code easier to read.<br><br>
    To create a function, use <code>def</code>, give it a name, and write the code you want it to run.<br>
    To run (or "call") the function, just use its name followed by parentheses.<br><br>
    Everytime you call the function, it runs the code inside it.<br><br>
    Read through the code below and try to understand it, then try making your own function and calling it multiple times!`,

        code: `# Define a function
def say_hello():
    print("Hello!")
    print("Welcome to the program.")

# Call the function
say_hello()

# You can call it as many times as you want
say_hello()
say_hello()

# Try making your own function!
def cheer():
    print("You got this!")

cheer()`
    },

    "Functions and Parameters":{
        header: `You can give functions <b>parameters</b>, which are like variables the function uses when it runs.<br>
    When you call the function, you pass in <b>arguments</b> — the actual values you want to use.<br><br>
    This lets your functions be flexible and reusable for different situations!<br><br>
    Look at the examples below. Notice how the function uses its parameters in the code. It is used like a normal variable, but it gets its value from the arguments you pass in when you call the function.<br>
    Try changing the values passed in when calling the function.`,

        code: `# Function with one parameter
def greet(name):
    print("Hello,", name + "!")

greet("Alice")
greet("Bob")

# Function with two parameters
def add_numbers(a, b):
    print("The sum is:", a + b)

add_numbers(3, 5)
add_numbers(10, 20)

# Try your own!
def repeat(word, times):
    print(word * times)

repeat("hi", 3)`
    },

    "Namespaces in Functions":{
        header: `When you create a variable, it exists in a certain <b>scope</b> or <b>namespace</b> — a part of the program where the variable is visible.<br><br>
    <b>Local variables</b> are created inside a function and only exist while that function is running.<br>
    <b>Global variables</b> are created outside of all functions and can be used by the whole program.<br><br>

    If you try to use a local variable outside its function, you’ll get an error.<br><br>

    If a local variable has the same name as a global one, the function will use the local version. The global one stays unchanged.<br><br>
    Try editing the variables below to see how Python handles different scopes!`,

        code: `# This is a global variable
message = "Hello from the outside!"

def speak():
    # This is a local variable with the same name
    message = "Hello from inside the function!"
    print(message)

print("Before function call:", message)
speak()
print("After function call:", message)

# Local variables can't be used outside their function
def example():
    x = 42  # local variable
    print("Inside function:", x)

example()
# print(x)  # This will cause an error: x is not defined

# You can read global variables inside a function
name = "Alice"

def say_name():
    print("Your name is", name)

say_name()`
    },

    "Fix this Program":{
        header: `There is a bug in the code below. Fix it.<br><br>
        <b>Hint:</b> The variable is used in the wrong namespace<br>`,

        code: `
def print_name():
    name = "Alice"
    print(name)

print(name)`
    },

    "Functions and Return Values":{
        header: `Sometimes you want a function to <b>give back</b> a value when it's done. This is called a <b>return value</b>.<br><br>
    You use the <code>return</code> keyword to send a result back to wherever the function was called.<br>
    You can then <b>store</b> that value in a variable, <b>print</b> it, or even <b>pass it into another function</b>.<br><br>
    When a function returns a value, it stops running and sends that value back immediately.<br><br>
    You can use function calls that return values just like any other value or variable in Python.<br>
    Try playing with the return values below and combining them in different ways!`,

        code: `# A basic return value
def add(a, b):
    return a + b

result = add(3, 4)
print("Result is:", result)

# Return values can be used directly
print("5 + 6 =", add(5, 6))

# You can pass return values into other functions
def square(x):
    return x * x

print("Square of 3 + 2:", square(add(3, 2)))

# Nesting functions
def double(n):
    return n * 2

print("Double the square of 4:", double(square(4)))

# Storing return values in variables
a = add(1, 2)
b = square(a)
c = double(b)
print("Final result:", c)`
    },

    "Exceptions":{
        header: `Sometimes your code can run into problems, like trying to divide by zero or using a variable that doesn't exist.<br>
    When this happens, Python raises an <b>exception</b> — a special error message that tells you something went wrong.<br><br>
    Usually, if an exception happens, your program stops running.
    You can handle exceptions using <code>try</code> and <code>except</code> blocks. This way, your program can continue running even if an error occurs! Your code will try to run the code inside the <code>try</code> block, and if an exception happens, it will jump to the <code>except</code> block instead of crashing.<br><br>
    A common exception is the ValueError, which happens when you try to convert something that isn't a number into a number.<br>
    Try running the code below and see what happens when the user inputs something that isn't a number!<br>`,
    code: `# Example of handling exceptions
try:
    value = int(input("Enter a number: "))
    print("You entered:", value)
except ValueError:
    print("That's not a valid number!")`
    },


    //lesson on string indexing that talks about how strings are like lists of characters, square brackets, indexes, how to access characters, out of bounds errors, and negative indexes
    "Indexing":{
        header: `In Python, strings are like lists of characters. You can access individual characters using <b>indexing</b>.<br>
        Each character has a number called an <b>index</b> that tells you its position in the string, starting from 0.<br><br>
        You can use square brackets <code>[]</code> to get a character at a specific index.<br>
        The first character is at index 0, the second at index 1, and so on. Put the number inside the square brackets, after the string.<br><br>
        Example string with each index labeled:<br>
        <code>hello</code><br>
        <code>01234</code><br><br>
        If you try to access an index that is too high or too low, you’ll get an <b>IndexError</b>.<br><br>
        Negative indexes count from the end of the string, with -1 being the last character.<br>
        Try running the code below and see how indexing works! Then, try accessing characters at different indexes.`,
        code: `# Example string
my_string = "Hello, World!"
print(my_string[0])    # H
print(my_string[7])    # W
print(my_string[-1])   # !
print(my_string[-5])   # o
# print(my_string[100]) # IndexError
        `
    },

    "Challenge: Initials":{
        header: `Write a function that has two parameters, a first name and a last name and returns the initials (like "J.D.").<br>
        Use string indexing to get the first letter of each part of the name.<br>`,
        code: `def get_initials(first_name, last_name):
    #write your own code here!


print(get_initials("John", "Doe"))  # Should return "J.D."
print(get_initials("Alice", "Smith"))  # Should return "A.S."`
    },

    "Slicing":{
        header: `Slicing lets you get a part of a string by specifying a start and end index.<br>
        You can use the syntax <code>string[start:end]</code> to get a substring.<br>
        The <b>start</b> index is included, but the <b>end</b> index is not.<br><br>
        You can also use a third number called <b>step</b> to skip characters. The syntax is <code>string[start:end:step]</code>.<br>
        The <b>step</b> is how many characters to skip each time. It can also be negative.<br><br>
        If you leave out <b>start</b>, it defaults to 0. If you leave out <b>end</b>, it goes to the end of the string. If you leave out <b>step</b>, it defaults to 1.<br><br>
        Try running the code below and see how slicing works! Then, try slicing the string in different ways.`,
        code: `# Example string
my_string = "Hello, World!"
print(my_string[0:5])    # Hello
print(my_string[7:12])   # World
print(my_string[0:12:2]) # Hlo ol!
print(my_string[::-1])     # !dlroW ,olleH
        `
    },

    "Immutability":{
        header: `Strings in Python are <b>immutable</b>, which means you can’t change them directly.<br>
        If you try to change a character in a string, you’ll get an error.<br><br>
        Instead, you can create a new string based on the old one with the changes you want.<br>
        You can use slicing to get parts of the string and then combine them with new characters.<br><br>
        Try running the code below and see how immutability works! Then, try creating your own modified string.`,
        code: `# Example string
my_string = "Hello, World!"
# Trying to change a character (this will raise an error)
# my_string[0] = "h"
# Instead, create a new string
new_string = "h" + my_string[1:]
print(new_string)  # hello, World!
        `
    },

    //basic overview of strings and for loops, with normal iteration and using len
    "Strings and For Loops":{
        header: `You can use a <b>for loop</b> to go through each character in a string.<br>
        Doing this lets you easily access each character one by one.<br><br>
        You can also use the <b>len()</b> function to get the length of the string (the number of characters).<br>
        This is useful if you want to loop through the string using indexes.<br><br>
        Try running the code below to see how for loops work with strings!`,
        code: `# Example string
my_string = "Hello"

# Using a for loop to iterate through each character
# char will be set to each character in the string one by one
for char in my_string:
    print(char)

#using len() and range() to iterate by index
for i in range(len(my_string)):
    print("Character at index", i, "is", my_string[i])
        `
    },

    "Challenge: Palindromes":{
        header: `A <b>palindrome</b> is a word or phrase that reads the same forwards and backwards, like "racecar" or "level".<br>
        Write a function that checks if a given string is a palindrome.<br>`,
        code: `def is_palindrome(s):
    #write your own code here!

# Test the function
print(is_palindrome("racecar"))  # Should return True
print(is_palindrome("hello"))    # Should return False
print(is_palindrome("level"))  # Should return True
        `
    },

    "The in Keyword":{
        header: `The <b>in</b> keyword lets you check if a character or substring is inside a string.<br>
        It returns <code>True</code> if the character or substring is found, and <code>False</code> if it’s not.<br><br>
        You can use it in <code>if</code> statements to make decisions based on whether something is in a string.<br><br>
        Try running the code below and see how the <b>in</b> keyword works!`,
        code: `# Example string
my_string = "Hello, World!"

# Check if a character is in the string
if "H" in my_string:
    print("Found 'H'!")
else:
    print("Did not find 'H'.")

# Check if a substring is in the string
if "World" in my_string:
    print("Found 'World'!")
else:
    print("Did not find 'World'.")`
    },

    //explains methods vs functions, how to use them, and the methods: upper(), lower(), isupper(), islower(), swapcase(),strip(),find(),replace()
    "String Methods":{
        header: `Methods are special functions that belong to a specific type of data, like strings.<br>
        You call them using the dot <code>.</code> notation, like <code>string.method()</code>.<br>
        Methods let you perform actions on the string, like changing its case or finding parts of it.<br><br>
        Here are some common string methods:<br>
        <ul>
            <li><code>upper()</code> : Converts the string to uppercase</li>
            <li><code>lower()</code> : Converts the string to lowercase</li>
            <li><code>isupper()</code> : Checks if the string is in uppercase</li>
            <li><code>islower()</code> : Checks if the string is in lowercase</li>
            <li><code>swapcase()</code> : Swaps the case of each character</li>
            <li><code>strip()</code> : Removes leading and trailing whitespace</li>
            <li><code>find()</code> : Finds the first occurrence of a substring</li>
            <li><code>replace()</code> : Replaces a substring with another substring</li>
        </ul>
        Explore how they are used below:<br>`,
        code: `# Example string
my_string = " Hello, World! "

# upper(): Converts the string to uppercase
print(my_string.upper())  # " HELLO, WORLD! "

# lower(): Converts the string to lowercase
print(my_string.lower())  # " hello, world! "

# isupper(): Checks if the string is in uppercase
print(my_string.isupper())  # False

# islower(): Checks if the string is in lowercase
print(my_string.islower())  # False

# swapcase(): Swaps the case of each character
print(my_string.swapcase())  # " hELLO, wORLD! "

# strip(): Removes leading and trailing whitespace
print(my_string.strip())  # "Hello, World!"

# find(): Finds the first occurrence of a substring and returns the index
print(my_string.find("World"))  # 8

# replace(): Replaces a substring with another substring
print(my_string.replace("World", "Python"))  # " Hello, Python! "
        `
    },

    "Project: Pig Latin":{
        header: `Pig Latin is a fun way to play with words! The rules are simple:
        <ul>
            <li>If a word starts with a consonant, move the first letter to the end and add "ay".</li>
            <li>If it starts with a vowel, just add "yay" to the end.</li>
        </ul>
        Write a function that takes a string and converts it to Pig Latin.<br>
        You can use string methods and indexing to help you.<br>`,
        code: `def pig_latin(word):
    #write your own code here!

# Test the function
print(pig_latin("hello"))  # Should return "ellohay"
print(pig_latin("apple"))  # Should return "appleyay"`
    }
}