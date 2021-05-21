from flask import Flask, request, render_template
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
    voltage = explorerhat.analog.one.read()
    print (voltage)


if __name__ == '__main__':
    app.run(port=5002, threaded=True, host='0.0.0.0')

