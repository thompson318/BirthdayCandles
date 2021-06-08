
ffmpeg -i  flames.mp4 -filter:v "crop=55:62:908:143" -an -vcodec h264 temp.mp4
ffmpeg -y -i temp.mp4 -vf palettegen palette.png
ffmpeg -y -i temp.mp4 -i palette.png -filter_complex paletteuse -r 5 candle0.gif

ffmpeg -i  flames.mp4 -filter:v "crop=60:69:107:1182" -an -vcodec h264 temp.mp4
ffmpeg -y -i temp.mp4 -vf palettegen palette.png
ffmpeg -y -i temp.mp4 -i palette.png -filter_complex paletteuse -r 5 candle1.gif

ffmpeg -i  flames.mp4 -filter:v "crop=65:75:1284:234" -an -vcodec h264 temp.mp4
ffmpeg -y -i temp.mp4 -vf palettegen palette.png
ffmpeg -y -i temp.mp4 -i palette.png -filter_complex paletteuse -r 5 candle2.gif

ffmpeg -i  flames.mp4 -filter:v "crop=62:60:762:201" -an -vcodec h264 temp.mp4
ffmpeg -y -i temp.mp4 -vf palettegen palette.png
ffmpeg -y -i temp.mp4 -i palette.png -filter_complex paletteuse -r 5 candle3.gif

ffmpeg -i  flames.mp4 -filter:v "crop=61:70:942:257" -an -vcodec h264 temp.mp4
ffmpeg -y -i temp.mp4 -vf palettegen palette.png
ffmpeg -y -i temp.mp4 -i palette.png -filter_complex paletteuse -r 5 candle4.gif

ffmpeg -i  flames.mp4 -filter:v "crop=79:87:1170:329" -an -vcodec h264 temp.mp4
ffmpeg -y -i temp.mp4 -vf palettegen palette.png
ffmpeg -y -i temp.mp4 -i palette.png -filter_complex paletteuse -r 5 candle5.gif

ffmpeg -i  flames.mp4 -filter:v "crop=80:82:554:270" -an -vcodec h264 temp.mp4
ffmpeg -y -i temp.mp4 -vf palettegen palette.png
ffmpeg -y -i temp.mp4 -i palette.png -filter_complex paletteuse -r 5 candle6.gif

ffmpeg -i  flames.mp4 -filter:v "crop=89:91:729:354" -an -vcodec h264 temp.mp4
ffmpeg -y -i temp.mp4 -vf palettegen palette.png
ffmpeg -y -i temp.mp4 -i palette.png -filter_complex paletteuse -r 5 candle7.gif

ffmpeg -i  flames.mp4 -filter:v "crop=93:107:996:485" -an -vcodec h264 temp.mp4
ffmpeg -y -i temp.mp4 -vf palettegen palette.png
ffmpeg -y -i temp.mp4 -i palette.png -filter_complex paletteuse -r 5 candle8.gif
