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
    }
}