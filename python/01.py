######################  IMPORTS  #################################################
# At the top of the file, we import our dependencies (also known as libraries).
# The Python "Standard Library" (what comes built-in with Python) includes a few important libraries.
# You import them the same way, but they don't need to be added to your requirements.txt file

# standard library imports, no installation:
from ast import Str
from dataclasses import dataclass
import json, pathlib, urllib3, subprocess
from typing import Any, List, Optional

# external dependencies, will throw an error if the libraries aren't installed
import requests

###################  PRIMITIVE TYPES  ####################################
## Python's "primitive types".
# Here we are assigning the data on the right into our custom variable on the left.
# variable_name <- data
# Assignment lets us store data for usage later, and reduces writing duplicate code.
an_integer = 3
a_float = 3.0
a_string = "this is a string type"

a_list = ["this", "is", "a", "list", "of", "strings", "and", "can", "be", "mutated"]
a_tuple = ("this", "is", "an", "immutable", "tuple", "of", "strings")
# you can access list and tuple items by using the 'index' of the item you want.
# lists and tuples are zero-indexed, meaning their first item is actually item 0
assert a_list[0] == "this"
assert a_list[0] == a_tuple[0]

KEY_TO_INTEGER = "key_to_integer"

# a dictionary is an object of Key:Value pairs.
# Keys must be 'hashable' which means they are usually strings.
# Values can be any type!
a_dictionary = {
    "key_to_string": "value_a",
    KEY_TO_INTEGER: 3,
    "key_to_function": requests.get,
    "key_to_class": Str,
    "key_to_list": a_list,
    "key_to_dict": {"sub_key_A": a_float},
}

# dictionary Values are accessed using their Key in brackets
assert a_dictionary[KEY_TO_INTEGER] == 3
assert a_dictionary["key_to_string"] == "value_a"


##########################  FUNCTIONS  #########################################
## Functions. Python uses a colon `:` and indented whitespace to show nested blocks
# A function must be defined before it can be used.
# Using a function is also known as "calling" a function.


# Defining a function
def a_function_that_does_nothing():
    pass


# Defining a function without type hints
def sum_untyped(number_1, number_2):
    return number_1 + number_2


# Defining a function with type hints
def sum_typed(number_1: int, number_2: int) -> int:
    return number_1 + number_2


# Defining a function with typehints & documentation (called a 'docstring').
# Docstrings are visible in your IDE by hovering over the function name.
def head_of_list(a_list: List[Any]) -> Any:
    """Get the first item in a list, raising an exception if list is empty.\n
    Args:
        a_list: list containing any type of data
    """
    # here we use the `len` function to get the length of the provided list
    if len(a_list) > 0:
        return a_list[0]
    else:
        raise Exception("List is empty")


# Calling Functions
a_function_that_does_nothing()

# we can store the output of a function into a variable
sum_that_equals_3 = sum_untyped(1, 2)
assert sum_that_equals_3 == 3

sum_that_equals_5 = sum_typed(5, 0)
assert sum_that_equals_5 == 5

result = head_of_list(a_list)
assert result == "this"


########################  CLASSES  #######################################
## Classes. A class is used to group data and functions to interact with that data.
# A function that is part of a class is also called a "method".
# You can create your own methods on a classs, but classes also come with a few built-in to assist you.

# First we define our class
class BusinessProcess:
    """Some documentation about this class"""

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


# A 'dataclass' is useful to quickly and easily group data together.
# It automatically defines the __init__() constructor for us!
@dataclass
class User:
    name: str
    team: str
    current_access: List["AccessLevel"] = []


@dataclass
class AccessLevel:
    tool: "Tool"
    access_role: "str"


# classes can also be used to establish a common interface, when each item might have a
#   a different way to achieve the same outcome.
@dataclass
class Tool:
    "Parent class to define common interface for various tools we will audit."
    name: str = ""
    tool_owner: str = ""

    def audit_user(self, user: User) -> AccessLevel:
        raise NotImplementedError("Implement this in the child class")


@dataclass
class Gsuite(Tool):
    name = "Gsuite"
    tool_owner = "IT"

    def audit_user(self, user: User) -> AccessLevel:
        # do some logic with the GSUITE api
        return AccessLevel(self, "some_role_name_for_this_user_in_gsuite")


@dataclass
class Slack(Tool):
    name = "Slack"
    tool_owner = "IT"

    def audit_user(self, user: User) -> AccessLevel:
        # do some logic with the SLACK api
        return AccessLevel(self, "some_role_name_for_this_user_in_slack")


tools = [Slack(), Gsuite()]

users = [User("Saxon", "Security")]

for user in users:
    for tool in tools:
        audit_result = tool.audit(user)
        user.current_access.append(audit_result)
