import json
from flask import Flask,redirect, url_for, Response, request
from compare_image import compareImages
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/compare_images', methods=['POST','OPTIONS'])
def compare():
   return Response(json.dumps(compareImages(json.loads(request.data)[0],json.loads(request.data)[1])),  mimetype='application/json')

if __name__ == '__main__':
   app.run(debug = True)