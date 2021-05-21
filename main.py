from flask import Flask, request, render_template, jsonify
import json
import explorerhat


app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    """
    returns the main page, template/index.html
    """
    return render_template('index.html')


@app.route('/get_voltage', methods=['POST'])
def get_voltage():
    jsonstring = json.dumps(request.json)
    #index =json.loads(jsonstring).get('index', 0)
    index = int(jsonstring)
    print ("index: ", index)
    voltage = 0.
    if index == 0:
            voltage = explorerhat.analog.one.read()
            #voltage = index + 3.7
    if index == 1:
            voltage = explorerhat.analog.two.read()
            #voltage = index + 3.7
    if index == 2:
            voltage = explorerhat.analog.three.read()
            #voltage = index + 3.7
    if index == 3:
            voltage = explorerhat.analog.four.read()
            #voltage = index + 3.7
    print (voltage)
    returnjson = jsonify({'voltage': voltage})
    return returnjson


if __name__ == '__main__':
    app.run(port=5002, threaded=True, host='0.0.0.0')

