from flask import Flask, render_template,request,redirect,url_for
from user import Order
import json
app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')



@app.route('/buying')
def buying():
    return render_template('buying.html')

@app.route('/done')
def done():
    return render_template('done.html')

@app.route('/checkout', methods=['POST'])
def checkout():
    order = Order(dict(request.form))
    order.save()
    return redirect(url_for("done"))



@app.route('/history',)
def history():
    with open('test.json') as f:
        data = json.load(f)
    return render_template('history.html', data=data)



if __name__=="__main__":
    app.run(debug=True)