Virtual Cake
============

.. image:: https://github.com/thompson318/BirthdayCandles/raw/main/doc/20210605_152438.jpg
   :width: 640px
   :target: https://github.com/thompson318/BirthdayCandles
   :alt: Cake, Real and Virtual

Author: Stephen Thompson

When confronted with the need to avoid children blowing out candles on an actual cake, 
the obvious solution was to build a virtual cake, with on screen candles controlled 
by a set of wind turbines. Here it is, the future of cake.

The project utilises a `Raspberry Pi`_, an analogue to digital converter(ADC)
like this one 
from `BC-Robotics`_, and a set of DC turbines, like these from `Sntieecr`_. 

The software here consists of a Python library (main.py) to query the voltages on the 
ADC in response to POST requests from a javascript front end (static/happybirthday.js).
We use `Flask`_ to create a web application overlaying various animations to 
give the appearance that blowing on the wind turbines blows out the on screen candles, 
shown above rendered with Minecraft. 

.. figure:: https://github.com/thompson318/BirthdayCandles/raw/main/doc/20210608_111525.jpg
   :width: 480px
   :alt: Under the Cake
   
   Under the cake, the Raspberry Pi and 16 Channel ADC HAT.

.. _`Raspberry Pi`: https://www.raspberrypi.org/
.. _`BC-Robotics`: https://bc-robotics.com/tutorials/getting-started-raspberry-pi-16-channel-adc-hat-v2/
.. _`Sntieecr`: https://www.amazon.co.uk/Sntieecr-Mini-Generator-Motors-3V-12V-DC-Motor-Generator-Educational-Experiment/dp/B0922N8MCR/
.. _`Flask`: https://flask.palletsprojects.com/en/2.0.x/
