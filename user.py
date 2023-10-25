import json

class Order:
    def __init__(self, form):
        self.order_info = dict(form)   # invert the form into dictionary
    def save(self):
        user_list = []
        with open("test.json", "r") as file:
            user_list = json.loads(file.read())
        user_list.append(self.order_info)
        with open("test.json", "w") as file:
            json.dump(user_list, file, indent=4)