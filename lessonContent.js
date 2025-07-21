let unitNames = ["Basic Python and Console Interaction", "Conditionals","Looping"]
let units = [
    ["Printing in Python","Variables and Types","User Input","Math Operators","String Operators","Comments","Putting it Together"],
    ["Booleans", "If Statements", "Comparison Operators", "Logical Operators", "Floating Point Numbers and Rounding"],
    ["While Loops","For Loops","Break and Continue","Nested Control Structures", "Guess the Number"]
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
        <b>Challenge</b>: For every incorrect guess, tell the user if the number is higher or lower!`,
        code:``
    }
}