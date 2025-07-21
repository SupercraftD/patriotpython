let unitNames = ["Basic Python and Console Interaction", "Conditionals"]
let units = [
    ["Printing in Python","Variables and Types","User Input","Math Operators","String Operators","Comments","Putting it Together"],
    ["Booleans"]
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

        ode: `# Basic math operations
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
    }
}