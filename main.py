from flask import Flask, request, render_template, jsonify
import json
from gpiozero import MCP3008
"""
To use the MCP3008 chip, you need to enable the SPI interface in
raspberrypi settings, see
https://bc-robotics.com/tutorials/getting-started-raspberry-pi-16-channel-adc-hat-v2/
"""

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
    sensor = getMCPSensor(index)
    voltage = 0.
    voltage = sensor.value
    print (voltage)
    returnjson = jsonify({'voltage': voltage})
    return returnjson

def getMCPSensor(index):
    """
    this should convert a simple index (0-15)
    into a device and sensor setting
    """
    if index == 0:
        print("returning(7,1)")
        return MCP3008(channel = 7, device = 1)
    else:
        return MCP3008(channel = index, device = 0)

if __name__ == '__main__':
    app.run(port=5002, threaded=True, host='0.0.0.0')

