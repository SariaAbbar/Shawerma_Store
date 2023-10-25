# importing the Flask and user modules.
from flask import Flask, render_template, request, redirect, url_for, session
from user import Order
import json

app = Flask(__name__)

app.secret_key = "7d733430c3aedc51ab4fab8987c4e7e8df19f1c35d6e589a5220b58d5f39489cbfdcxghtfd"


#  The home page is rendered using the function called home().
#  This function returns an HTML file that will be displayed when visiting the homepage.

@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html")


#  The buying page is also rendered using another function called buying().
@app.route("/buying")
def buying():
    return render_template("buying.html")


# rendering the done page that have the history button
@app.route("/done")
def done():
    return render_template("done.html")


# function that takes the data and saves it then redirecting to the done page.
@app.route("/checkout", methods=["POST"])
def checkout():
    order = Order(request.form)
    order.save()
    return redirect(url_for("done"))

# route for admin
# he should add the correct username and password 
#  The code checks to see if the user is logged in, and if not it redirects them back to the login page.
@app.route("/admin", methods=["GET", "POST"])
def admin():
    error = None
# there is just one user can see the history
    if request.method == "POST":
        username = request.form["usernameadmin"]
        password = request.form["passwordadmin"]

        # Validate username and password
        if username == "admin" and password == "1234":
            session["logged_in"] = True
            return redirect(url_for("history"))
        else:
            error = "Invalid username or password"

    return render_template("admin.html", error=error)


# function for loading the data from the Json file then rendering the history page
@app.route("/history")
def history():
    if not session.get("logged_in", False):
        return redirect(url_for("admin"))
    with open("test.json") as f:
        data = json.load(f)
    return render_template("history.html", data=data)


if __name__ == "__main__":
    app.run(debug=True)