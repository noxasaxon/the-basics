######################  IMPORTS  #################################################
# At the top of the file, we import our dependencies (also known as libraries).
# The Python "Standard Library" (what comes built-in with Python) includes a few important libraries.
# You import them the same way, but they don't need to be added to your requirements.txt file

# standard library imports, no installation:
from ast import Str
import json, pathlib, urllib3, subprocess
from os import path, open

# external dependencies, will throw an error if the libraries aren't installed
import requests

###################  PRIMITIVE TYPES  ####################################
## Python's "primitive types".
# Here we are assigning the data on the right into our custom variable on the left.
# Assignment lets us store data for usage later, and reduces writing duplicate code.
an_integer = 3
a_float = 3.0
a_string = "this is a string type"
a_list = ["this", "is", "a", "list", "of", "strings", "and", "can", "be", "mutated"]
a_tuple = ("this", "is", "an", "immutable", "tuple", "of", "strings")
a_dictionary = {
    "key_to_string": "value_a",
    "key_to_integer": 3,
    "key_to_function": requests.get,
    "key_to_class": Str,
    "key_to_list": a_list,
    "key_to_dict": {"sub_key_A": a_float},
}


##########################  FUNCTIONS  #########################################
## Functions. Python uses a colon `:` and indented whitespace to show nested blocks
# A function must be defined before it can be used.
# Using a function is also known as "calling" a function.


# Defining Functions
def a_function_that_does_nothing():
    pass


def sum_untyped(number_1, number_2):
    return number_1 + number_2


def sum_typed(number_1: int, number_2: int) -> int:
    return number_1 + number_2


# Calling Functions
a_function_that_does_nothing()

# we can store the output of a function into a variable
sum_that_equals_3 = sum_untyped(1, 2)
assert sum_that_equals_3 == 3

sum_that_equals_5 = sum_typed(5, 0)
assert sum_that_equals_5 == 5


########################  CLASSES  #######################################
## Classes. A class is used to group data and functions to interact with that data.
# A function that is part of a class is also called a "method".
# You can create your own methods on a classs, but classes also come with a few built-in to assist you.

# First we define our class
class BusinessProcess:
    # This is a special built-in method, that 'constructs' the class for the first time.
    # By adding our own parameters to the `__init__` method, we can
    # force users to provide required data to create this class
    def __init__(
        self,
        problem_statement: str,
        acceptance_criteria: str,
        estimated_min_to_complete: float,
        estimated_iterations_per_week: float,
    ) -> None:
        if estimated_iterations_per_week < 0 or estimated_min_to_complete < 0:
            raise Exception("You must provide positive numbers to business process")
        self.problem_statement = problem_statement
        self.acceptance_criteria = acceptance_criteria
        self.estimated_min_to_complete = estimated_min_to_complete
        self.estimated_iterations_per_week = estimated_iterations_per_week

    # a 'method' that uses data inside the class, which is accessed via the special "self" parameter available to classes
    def hours_per_month(self) -> float:
        # These parentheses are used by automatic formatters when lines get too long, but otherwise mean nothing in this context
        weekly_minutes = (
            self.estimated_min_to_complete * self.estimated_iterations_per_week
        )
        monthly_minutes = weekly_minutes * 4
        monthly_hours = monthly_minutes / 60
        return monthly_hours


# then we create an instance of that class
access_audit_process = BusinessProcess(
    problem_statement="Tools that have dangerous capabilities need to have access limited to only the users that require it. Regular auditing of access lists can help us find users that no longer need it.",
    acceptance_criteria="We detect users with outdated access in tools X, Y, & Z within 1 week of them no longer needing access",
    estimated_min_to_complete=30,
    estimated_iterations_per_week=2,
)

assert access_audit_process.hours_per_month() == 4.0
