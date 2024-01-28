# from flask import Flask, jsonify, render_template
# import subprocess

# app = Flask(__name__)

# @app.route('/')
# def home():
#     return render_template('index.html')

# cat  = ['cat', '/home/avishkaprabathg/.ssh/id_rsa.pub']

# @app.route('/api/system-info', methods=['GET'])
# def inf():
#     return get_system_info(cat)
    

# def get_system_info(command):
#     try:
#         result = subprocess.run(command, stdout=subprocess.PIPE, text=True)
#         system_info = result.stdout.strip()
#         return jsonify({"system_info": system_info})  
#     except Exception as e:
#         return jsonify({"error": str(e)})

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5050, debug=True)
from flask import Flask
from info import get_system_info

app = Flask(__name__)


@app.route('/api/system/info', methods=['GET'])
def system_info():
    return get_system_info()

if __name__ == '__main__':
    app.run(debug=True)