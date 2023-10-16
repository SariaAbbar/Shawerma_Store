import json
class Order:
    # def __init__(self, username, phone_number, address, quantity, card_num, month, year, cvv):
        # self.order_info = {
        #     "username": username,
        #     "phone_number": phone_number,
        #     "address": address,
        #     "quantity": quantity,
        #     "card_num": card_num,
        #     "month": month,
        #     "year": year,
        #     "cvv": cvv
        # }
    def __init__(self, form):
        self.order_info = form
    def save(self):
        user_list = []
        with open("test.json", "r") as file:
            user_list = json.loads(file.read())

        user_list.append(self.order_info)
        with open("test.json", "w") as file:
            json.dump(user_list, file, indent=4)

