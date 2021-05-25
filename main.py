from flask import Flask, request, render_template, jsonify
import json
from gpiozero import MCP3008
"""
To use the MCP3008 chip, you need to enable the SPI interface in
raspberrypi settings, see
https://bc-robotics.com/tutorials/getting-started-raspberry-pi-16-channel-adc-hat-v2/
"""

app = Flask(__name__)

sensors=[]
for device in range(2):
    for channel in range(8):
        sensors.append(MCP3008(channel = channel, device = device))

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
    voltage = 0.
    voltage = sensor[index].value
    print (voltage)
    returnjson = jsonify({'voltage': voltage})
    return returnjson


if __name__ == '__main__':
    app.run(port=5002, threaded=True, host='0.0.0.0')

