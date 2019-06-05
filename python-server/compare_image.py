# import the necessary packages
from skimage.measure import compare_ssim
import argparse
import imutils
import cv2
import numpy as np
import base64
from PIL import Image
from io import StringIO
import re

# these statements will define the images that are being compared
def readb64(base64_string):
    sbuf = StringIO()
    sbuf.write(base64.b64decode(base64_string).encode())
    pimg = Image.open(sbuf)
    return cv2.cvtColor(np.array(pimg), cv2.COLOR_RGB2BGR)

# this is where the image comparison will happen
def compareImages(original, image_to_compare):

    original = re.sub('data:image/png;base64,', '', original)
    image_to_compare = re.sub('data:image/png;base64,', '', image_to_compare)

    img = base64.b64decode(original); 
    npimg = np.fromstring(img, dtype=np.uint8); 
    original = cv2.imdecode(npimg, 1)

    img = base64.b64decode(image_to_compare); 
    npimg = np.fromstring(img, dtype=np.uint8); 
    image_to_compare = cv2.imdecode(npimg, 1)

    (H, W) = image_to_compare.shape[:-1]
    original = cv2.resize(original, (W, H))

    # original=cv2.resize(original,shape)

    # these statements will convert the images to grayscale
    grayA = cv2.cvtColor(original, cv2.COLOR_BGR2GRAY)
    grayB = cv2.cvtColor(image_to_compare, cv2.COLOR_BGR2GRAY)

    # this statement will compare the grayscale images
    (score, diff) = compare_ssim(grayA, grayB, full=True)
    
    # this statement will return the comparison value to the dashboard file
    return score